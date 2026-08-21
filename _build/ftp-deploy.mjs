/**
 * FTP deploy: upload next-app/out/ to Hostinger public_html.
 * Credentials via env: FTP_HOST, FTP_USER, FTP_PASS.
 * Tries FTPS (explicit TLS) first, falls back to plain FTP.
 * Non-destructive: overwrites/adds files, never deletes remote files.
 */
import { Client } from 'basic-ftp';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'next-app', 'out');
const { FTP_HOST, FTP_USER, FTP_PASS } = process.env;
if (!FTP_HOST || !FTP_USER || !FTP_PASS) { console.error('missing FTP_* env'); process.exit(1); }

const client = new Client(30000);
client.ftp.verbose = false;

async function connect(secure) {
  await client.access({
    host: FTP_HOST,
    user: FTP_USER,
    password: FTP_PASS,
    secure,
    secureOptions: { rejectUnauthorized: false },
  });
  return secure ? 'FTPS (explicit TLS)' : 'plain FTP';
}

let mode;
try { mode = await connect(true); }
catch (e) {
  console.log('FTPS failed (' + e.message + '), retrying plain FTP…');
  client.close();
  mode = await connect(false);
}
console.log('connected via ' + mode);

// inspect target before touching anything
await client.ensureDir('/public_html');
const existing = await client.list('/public_html');
console.log('public_html BEFORE (' + existing.length + ' entries):');
for (const f of existing.slice(0, 25)) console.log('  ' + (f.isDirectory ? 'd ' : '- ') + f.name + (f.isFile ? ` (${f.size}b)` : ''));

let uploaded = 0;
client.trackProgress((info) => { if (info.type === 'upload') uploaded = info.fileCount; });
await client.uploadFromDir(OUT, '/public_html');
client.trackProgress();

const after = await client.list('/public_html');
console.log(`\nuploaded ~${uploaded} files. public_html AFTER: ${after.length} entries`);
client.close();
console.log('DEPLOY DONE');
