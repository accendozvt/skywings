#!/bin/bash
cd "$(dirname "$0")"
for i in 1 2 3 4; do
  echo "=== CYCLE $i: generate overrides from last sweep ==="
  node gen-a11y-contrast.mjs
  echo "=== CYCLE $i: build ==="
  (cd ../next-app && npm run build >/tmp/b.log 2>&1) || { echo BUILD FAILED; exit 1; }
  node make-htaccess.mjs >/dev/null
  node precompress.mjs >/dev/null
  powershell -Command "Get-NetTCPConnection -LocalPort 8900 -State Listen -ErrorAction SilentlyContinue | ForEach-Object { Stop-Process -Id \$_.OwningProcess -Force -ErrorAction SilentlyContinue }" >/dev/null
  (npx -y http-server ../next-app/out -p 8900 -c-1 -g --silent >/dev/null 2>&1 &)
  sleep 3
  echo "=== CYCLE $i: sweep ==="
  node a11y-sweep.mjs 2>&1 | grep -E " A[0-9]+|total|FAILED"
  fails=$(node -e "console.log(JSON.parse(require('fs').readFileSync('a11y-sweep.json','utf8')).length)")
  echo "=== CYCLE $i fails: $fails ==="
  [ "$fails" -eq 0 ] && { echo CONVERGED; exit 0; }
done
echo "NOT CONVERGED after 4 cycles"
