
(function() {
  var header    = document.getElementById('swh');
  var hamburger = document.getElementById('swh-hamburger');
  var drawer    = document.getElementById('swh-drawer');

  /* ── Scroll: transparent → solid ── */
  function onScroll() {
    if (window.scrollY > 20) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── Hamburger toggle ── */
  hamburger.addEventListener('click', function() {
    var isOpen = drawer.classList.toggle('is-open');
    hamburger.classList.toggle('is-open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  /* ── Close drawer on link click ── */
  drawer.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      drawer.classList.remove('is-open');
      hamburger.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  /* ── Close on outside click ── */
  document.addEventListener('click', function(e) {
    if (drawer.classList.contains('is-open') &&
        !drawer.contains(e.target) &&
        !hamburger.contains(e.target)) {
      drawer.classList.remove('is-open');
      hamburger.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  /* ── Keyboard: close on Escape ── */
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      drawer.classList.remove('is-open');
      hamburger.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      hamburger.focus();
    }
  });

  /* ── Desktop dropdown keyboard support ── */
  document.querySelectorAll('.swh-nav__link.has-drop').forEach(function(trigger) {
    trigger.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        var item = trigger.closest('.swh-nav__item');
        var isOpen = item.classList.toggle('is-open');
        trigger.setAttribute('aria-expanded', isOpen);
      }
    });
  });
})();


/* ---- */


// ═══════════════════════════════════════════════════════════════════
// CONFIGURATION, UPDATE THESE
// ═══════════════════════════════════════════════════════════════════

// STEP 1: Create a Google Apps Script Web App and paste its URL here
// Instructions below in the setup guide
var SHEET_URL = 'https://script.google.com/macros/s/AKfycbyC-Rbo1_nX3ZOxZiqbUsWUgLTGef6ZFyRDzTxC_J4ntnD1latGVsTN0Rq6KEikAzc/exec';

var CORRECT_PW = 'SkyFi@567$$';

// ═══════════════════════════════════════════════════════════════════
// FORM LOGIC
// ═══════════════════════════════════════════════════════════════════

// Rating button selection (replaces grid table)
function setRating(name, val, btn) {
  // Clear all buttons for this name
  document.querySelectorAll('.fb-rate-btn[data-name="' + name + '"]').forEach(function(b) {
    b.classList.remove('selected');
  });
  // Select this one
  btn.classList.add('selected');
  // Set hidden input
  var hiddenEl = document.getElementById(name + '-val');
  if (hiddenEl) hiddenEl.value = val;
  // Mark row as answered
  var row = document.getElementById('row-' + name);
  if (row) row.classList.add('answered');
  // Update progress
  updateProgress();
}

// Radio / checkbox selection with visual feedback
document.querySelectorAll('.fb-option input').forEach(function(input) {
  input.addEventListener('change', function() {
    var name = this.name;
    document.querySelectorAll('input[name="' + name + '"]').forEach(function(i) {
      i.closest('.fb-option').classList.remove('selected');
    });
    this.closest('.fb-option').classList.add('selected');
    updateProgress();
  });
});

// Grid radios, update progress on change
document.querySelectorAll('.fb-grid-radio input').forEach(function(input) {
  input.addEventListener('change', updateProgress);
});

// Star rating
var starVals = {};
function setStar(group, val) {
  starVals[group] = val;
  var stars = document.querySelectorAll('#stars-' + group + ' .fb-star');
  stars.forEach(function(s, i) {
    s.classList.toggle('active', i < val);
  });
  var labels = { 1:'Not confident', 2:'Somewhat confident', 3:'Fairly confident', 4:'Confident', 5:'Very confident!' };
  var overallLabels = { 1:'Very poor', 2:'Poor', 3:'Average', 4:'Good', 5:'Excellent!' };
  var labelEl = document.getElementById(group + '-label');
  if (labelEl) labelEl.textContent = (group === 'f1' ? overallLabels : labels)[val] || '';
  var hiddenEl = document.getElementById(group + '-val');
  if (hiddenEl) hiddenEl.value = val;
  updateProgress();
}

function updateProgress() {
  var radioRequired = ['a1','a2','a3','e1'];
  var ratingRequired = ['b1','b2','b3','b4','b5','c1','c2','c3','c4','c5','d1','d2','d3','d4'];
  var done = 0;
  radioRequired.forEach(function(name) {
    if (document.querySelector('input[name="' + name + '"]:checked')) done++;
  });
  ratingRequired.forEach(function(name) {
    var el = document.getElementById(name + '-val');
    if (el && el.value) done++;
  });
  if (starVals['e2']) done++;
  if (starVals['f1']) done++;
  if (document.querySelector('input[name="f2"]:checked')) done++;
  var total = required.length + 3;
  var pct = Math.round((done / total) * 100);
  document.getElementById('fb-progress').style.width = pct + '%';
  document.getElementById('fb-progress-text').textContent = pct + '% complete' + (pct < 100 ? ', answer all questions to submit' : ', ready to submit!');
}

function getFormData() {
  var data = {};
  // Radio fields
  var radioNames = ['a1','a2','a3','e1','f2'];
  radioNames.forEach(function(name) {
    var el = document.querySelector('input[name="' + name + '"]:checked');
    data[name] = el ? el.value : '';
  });
  // Rating button fields (b1-b5, c1-c5, d1-d4), read from hidden inputs
  var ratingNames = ['b1','b2','b3','b4','b5','c1','c2','c3','c4','c5','d1','d2','d3','d4'];
  ratingNames.forEach(function(name) {
    var el = document.getElementById(name + '-val');
    data[name] = el ? el.value : '';
  });
  data['e2'] = document.getElementById('e2-val').value;
  data['f1'] = document.getElementById('f1-val').value;
  data['b_open'] = document.getElementById('b_open').value;
  data['c_open'] = document.getElementById('c_open').value;
  data['f3'] = document.getElementById('f3').value;
  data['f4'] = document.getElementById('f4').value;
  data['f5'] = document.getElementById('f5').value;
  data['timestamp'] = new Date().toISOString();
  return data;
}

function submitFeedback() {
  var btn = document.getElementById('fb-submit-btn');
  var data = getFormData();

  // Basic validation
  var allRequired = ['a1','a2','a3','b1','b2','b3','b4','b5','c1','c2','c3','c4','c5','d1','d2','d3','d4','e1','f2'];
  var missing = allRequired.filter(function(k) { return !data[k]; });
  if (missing.length > 0 || !data['e2'] || !data['f1']) {
    alert('Please answer all questions before submitting. Thank you!');
    return;
  }

  btn.disabled = true;
  btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 11-6.219-8.56"/></svg> Submitting…';

  // Send to Google Sheets via Apps Script
  fetch(SHEET_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .catch(function() {}) // no-cors always throws, that's OK
  .finally(function() {
    document.getElementById('fb-form').style.display = 'none';
    document.getElementById('fb-success').style.display = 'block';
    window.scrollTo({ top: document.getElementById('fb-success').offsetTop - 40, behavior: 'smooth' });
  });
}

// ═══════════════════════════════════════════════════════════════════
// DASHBOARD LOGIC
// ═══════════════════════════════════════════════════════════════════

function toggleDashboard() {
  var dash = document.getElementById('fb-dash-root');
  dash.classList.toggle('unlocked');
  if (dash.classList.contains('unlocked')) {
    setTimeout(function() { dash.scrollIntoView({ behavior: 'smooth' }); }, 100);
  }
}

function checkPassword() {
  var pw = document.getElementById('fb-pw').value;
  if (pw === CORRECT_PW) {
    document.getElementById('fb-lock').style.display = 'none';
    document.getElementById('fb-dash-content').style.display = 'block';
    loadDashboard();
  } else {
    document.getElementById('fb-pw-err').style.display = 'block';
    document.getElementById('fb-pw').value = '';
    document.getElementById('fb-pw').style.borderColor = '#f87171';
    setTimeout(function() {
      document.getElementById('fb-pw').style.borderColor = '';
      document.getElementById('fb-pw-err').style.display = 'none';
    }, 2500);
  }
}

function lockDashboard() {
  document.getElementById('fb-dash-content').style.display = 'none';
  document.getElementById('fb-lock').style.display = 'flex';
  document.getElementById('fb-pw').value = '';
  document.getElementById('fb-dash-root').classList.remove('unlocked');
}

// Chart instances
var charts = {};

function destroyChart(id) {
  if (charts[id]) { charts[id].destroy(); charts[id] = null; }
}

var SKY_COLORS = ['#95bf47','#008060','#002d2d','#7ea83a','#16a34a','#d97706'];
var LIGHT_COLORS = ['rgba(149,191,71,0.8)','rgba(0,128,96,0.8)','rgba(0,45,45,0.7)','rgba(126,168,58,0.8)','rgba(22,163,74,0.7)','rgba(217,119,6,0.7)'];

function avg(arr) {
  if (!arr.length) return 0;
  return arr.reduce(function(a,b){return a+b;},0)/arr.length;
}

function countOccurrences(arr, vals) {
  return vals.map(function(v){ return arr.filter(function(x){return x===v;}).length; });
}

function loadDashboard() {
  // Fetch from Google Sheet
  fetch(SHEET_URL + '?action=read')
    .then(function(r){ return r.json(); })
    .then(function(rows){
      renderDashboard(rows);
    })
    .catch(function(err){
      console.error('Dashboard fetch error:', err);
      document.getElementById('dash-meta').textContent = 'Could not load data. Check Sheet URL configuration.';
    });
}

function renderDashboard(rows) {
  if (!rows || !rows.length) {
    document.getElementById('dash-meta').textContent = 'No responses yet.';
    return;
  }

  document.getElementById('dash-meta').textContent = rows.length + ' total responses · Last updated: ' + new Date().toLocaleString('en-IN');
  document.getElementById('kpi-total').textContent = rows.length;

  // Overall rating
  var overallRatings = rows.map(function(r){ return parseInt(r.f1)||0; }).filter(Boolean);
  var avgOverall = avg(overallRatings).toFixed(1);
  document.getElementById('kpi-overall').textContent = avgOverall;

  // Would recommend
  var recommendYes = rows.filter(function(r){ return r.f2 === 'Definitely yes' || r.f2 === 'Probably yes'; }).length;
  document.getElementById('kpi-nps').textContent = Math.round(recommendYes/rows.length*100) + '%';

  // Confidence
  var conf = rows.map(function(r){ return parseInt(r.e2)||0; }).filter(Boolean);
  document.getElementById('kpi-confidence').textContent = avg(conf).toFixed(1);

  // Recent responses
  document.getElementById('kpi-recent').textContent = 'Latest batch data';

  // Chart 1, Overall Rating Distribution
  destroyChart('overall');
  var overallDist = [1,2,3,4,5].map(function(v){ return overallRatings.filter(function(r){return r===v;}).length; });
  charts['overall'] = new Chart(document.getElementById('chart-overall'), {
    type: 'bar',
    data: {
      labels: ['1 ★','2 ★','3 ★','4 ★','5 ★'],
      datasets: [{ label: 'Responses', data: overallDist, backgroundColor: ['#dc2626','#d97706','#eab308','#16a34a','#95bf47'], borderRadius: 6, borderSkipped: false }]
    },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } } }
  });

  // Chart 2, Campus
  destroyChart('campus');
  var kochi = rows.filter(function(r){ return r.a2 === 'Kochi'; }).length;
  var mahe = rows.filter(function(r){ return r.a2 === 'Mahe'; }).length;
  charts['campus'] = new Chart(document.getElementById('chart-campus'), {
    type: 'doughnut',
    data: {
      labels: ['Kochi','Mahe'],
      datasets: [{ data: [kochi, mahe], backgroundColor: ['#95bf47','#008060'], borderWidth: 0 }]
    },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } }
  });

  // Chart 3, Section averages
  destroyChart('sections');
  var trainingFields = ['b1','b2','b3','b4','b5'];
  var groomingFields = ['c1','c2','c3','c4','c5'];
  var campusFields = ['d1','d2','d3','d4'];
  function sectionAvg(fields) {
    var vals = [];
    rows.forEach(function(r){ fields.forEach(function(f){ if(parseInt(r[f])) vals.push(parseInt(r[f])); }); });
    return avg(vals).toFixed(2);
  }
  charts['sections'] = new Chart(document.getElementById('chart-sections'), {
    type: 'radar',
    data: {
      labels: ['Training Quality','Grooming & Uniform','Campus & Facilities','Placement Support','Interview Confidence'],
      datasets: [{
        label: 'Avg Score',
        data: [sectionAvg(trainingFields), sectionAvg(groomingFields), sectionAvg(campusFields),
               avg(rows.map(function(r){return ['Very Satisfied','Satisfied'].includes(r.e1)?4.5:['Neutral'].includes(r.e1)?3:2;})).toFixed(2),
               avg(conf).toFixed(2)],
        backgroundColor: 'rgba(149,191,71,0.15)',
        borderColor: '#95bf47',
        borderWidth: 2,
        pointBackgroundColor: '#95bf47'
      }]
    },
    options: { responsive: true, maintainAspectRatio: false, scales: { r: { beginAtZero: true, max: 5, ticks: { stepSize: 1 } } } }
  });

  // Chart 4, Programme
  destroyChart('programme');
  var progs = ['BBA Aviation','Diploma Cabin Crew','MBA Aviation','BBA Logistics','Diploma AAM','Diploma Hospitality'];
  var progCounts = progs.map(function(p){ return rows.filter(function(r){ return r.a3 === p; }).length; });
  charts['programme'] = new Chart(document.getElementById('chart-programme'), {
    type: 'bar',
    data: {
      labels: ['BBA Aviation','Cabin Crew','MBA','Logistics','AAM Diploma','Hospitality'],
      datasets: [{ label: 'Responses', data: progCounts, backgroundColor: SKY_COLORS, borderRadius: 6, borderSkipped: false }]
    },
    options: { responsive: true, maintainAspectRatio: false, indexAxis: 'y', plugins: { legend: { display: false } }, scales: { x: { beginAtZero: true } } }
  });

  // Chart 5, Recommend
  destroyChart('recommend');
  var recOpts = ['Definitely yes','Probably yes','Not sure','Probably not','Definitely not'];
  var recCounts = countOccurrences(rows.map(function(r){return r.f2;}), recOpts);
  charts['recommend'] = new Chart(document.getElementById('chart-recommend'), {
    type: 'doughnut',
    data: {
      labels: recOpts,
      datasets: [{ data: recCounts, backgroundColor: ['#16a34a','#4ade80','#eab308','#f97316','#dc2626'], borderWidth: 0 }]
    },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { font: { size: 10 } } } } }
  });

  // Chart 6, Placement satisfaction
  destroyChart('placement');
  var plOpts = ['Very Satisfied','Satisfied','Neutral','Dissatisfied','Very Dissatisfied'];
  var plCounts = countOccurrences(rows.map(function(r){return r.e1;}), plOpts);
  charts['placement'] = new Chart(document.getElementById('chart-placement'), {
    type: 'bar',
    data: {
      labels: ['Very Sat.','Satisfied','Neutral','Dissatisfied','Very Dis.'],
      datasets: [{ label: 'Count', data: plCounts, backgroundColor: ['#16a34a','#4ade80','#eab308','#f97316','#dc2626'], borderRadius: 6, borderSkipped: false }]
    },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
  });

  // Score table
  var allQs = [
    { name: 'b1', label: 'Quality of classroom teaching' },
    { name: 'b2', label: 'Trainer knowledge & expertise' },
    { name: 'b3', label: 'Content relevance to real jobs' },
    { name: 'b4', label: 'Practical / hands-on training' },
    { name: 'b5', label: 'English communication training' },
    { name: 'c1', label: 'Uniform quality & design' },
    { name: 'c2', label: 'Uniform comfort & fit' },
    { name: 'c3', label: 'Uniform professional appearance' },
    { name: 'c4', label: 'Grooming training sessions' },
    { name: 'c5', label: 'Personal presentation confidence' },
    { name: 'd1', label: 'Campus cleanliness' },
    { name: 'd2', label: 'Classroom comfort' },
    { name: 'd3', label: 'Study material availability' },
    { name: 'd4', label: 'Campus safety & security' },
  ];
  var tbody = document.getElementById('score-table-body');
  tbody.innerHTML = '';
  allQs.forEach(function(q) {
    var vals = rows.map(function(r){ return parseInt(r[q.name]); }).filter(Boolean);
    var a = avg(vals);
    var badge = a >= 4.2 ? 'good' : a >= 3.0 ? 'mid' : 'low';
    var badgeText = a >= 4.2 ? 'Strong' : a >= 3.0 ? 'Average' : 'Needs Work';
    var pct = ((a / 5) * 100).toFixed(0);
    var tr = document.createElement('tr');
    tr.innerHTML = '<td>' + q.label + '</td>' +
      '<td style="font-family:\'Sora\',sans-serif;font-weight:600;color:var(--navy);">' + (a.toFixed(1)||', ') + '</td>' +
      '<td><span class="fb-score-badge fb-score-badge--' + badge + '">' + badgeText + '</span></td>' +
      '<td><div class="fb-score-bar"><div class="fb-score-bar-fill" style="width:' + pct + '%"></div></div><div style="font-size:10px;color:var(--text-lt);margin-top:2px;">' + pct + '%</div></td>';
    tbody.appendChild(tr);
  });

  // Open responses
  function renderResponses(containerId, field) {
    var el = document.getElementById(containerId);
    var resps = rows.map(function(r){ return r[field]; }).filter(function(r){ return r && r.trim().length > 3; });
    if (!resps.length) { el.innerHTML = '<div style="color:var(--text-lt);font-size:13px;padding:12px;">No responses yet.</div>'; return; }
    el.innerHTML = resps.slice(-8).map(function(r){ return '<div class="fb-response-item">' + r + '</div>'; }).join('');
  }
  renderResponses('resp-best', 'f3');
  renderResponses('resp-change', 'f4');
}



/* ===== Re-wire inline handlers stripped during static conversion ===== */
(function(){
  document.addEventListener("click", function(e){
    var t = e.target;
    var rb = t.closest && t.closest(".fb-rate-btn");
    if (rb) { setRating(rb.getAttribute("data-name"), rb.getAttribute("data-val"), rb); return; }
    var st = t.closest && t.closest(".fb-star");
    if (st) { var c = st.closest("[id^=\"stars-\"]"); if(c){ var g=c.id.replace("stars-",""); var arr=[].slice.call(c.querySelectorAll(".fb-star")); setStar(g, arr.indexOf(st)+1); } return; }
  });
  function wire(sel, fn){ var el=document.querySelector(sel); if(el) el.addEventListener("click", fn); }
  wire("#fb-submit-btn", function(){ submitFeedback(); });
  wire(".fb-lock__btn", function(){ checkPassword(); });
  wire(".fb-dash-btn", function(){ lockDashboard(); });
  [].slice.call(document.querySelectorAll("button")).forEach(function(b){
    if (/Analytics Dashboard/i.test(b.textContent)) b.addEventListener("click", function(){ toggleDashboard(); });
  });
})();
