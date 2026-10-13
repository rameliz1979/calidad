/* JavaScript nativo, sin servicios externos ni dependencias en ejecución. */
(() => {
  'use strict';
  const { records, categories, questions } = window.QUALITY_DATA;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const escapeHTML = (value) => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const normalize = value => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const byId = new Map(records.map(record => [record.id, record]));
  const storageKey = 'calidadlab:guardados:v1';
  const readingKey = 'calidadlab:lectura:v1';
  const readingScales = [1, 1.15, 1.3];
  const mobileNavigation = window.matchMedia('(max-width: 1199px)');
  let readingIndex = 0;
  try {
    const preference = JSON.parse(localStorage.getItem(readingKey) || '0');
    if (Number.isInteger(preference) && preference >= 0 && preference < readingScales.length) readingIndex = preference;
  } catch { /* La lectura sigue funcionando cuando el almacenamiento está bloqueado. */ }
  const routes = { inicio: 'Panorama general', explorador: 'Explorar catálogo', diferencias: 'Modelos vs. estándares', historia: 'Línea de tiempo', evaluacion: 'Ponte a prueba', fuentes: 'Fuentes y referencias', guardados: 'Mis guardados' };
  const paths = {
    layers: '<path d="m12 3 9 5-9 5-9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="m16 8-3 5-5 3 3-5Z"/>',
    compare: '<path d="M8 3v18M16 3v18M3 7h18M3 17h18"/>',
    history: '<path d="M3 11a9 9 0 1 1 2.5 7M3 4v7h7M12 7v6l4 2"/>',
    sparkles: '<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5Z"/><path d="M20 2v4M18 4h4"/>',
    book: '<path d="M5 3h14v18H6a3 3 0 0 1 0-6h13M5 3a2 2 0 0 0-2 2v13M8 7h7M8 10h5"/>',
    'book-open': '<path d="M12 5C9 3 5 3 2 4v15c3-1 7-1 10 1 3-2 7-2 10-1V4c-3-1-7-1-10 1Zm0 0v15"/>',
    bookmark: '<path d="M6 3h12v18l-6-4-6 4Z"/>',
    bulb: '<path d="M9 18h6M9 21h6M8 14a6 6 0 1 1 8 0c-1 1-1 2-1 2H9s0-1-1-2ZM10 8h4"/>',
    search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
    graduation: '<path d="m2 9 10-5 10 5-10 5-10-5Zm4 2v6c4 3 8 3 12 0v-6M22 9v7"/>',
    'arrow-right': '<path d="M4 12h16m-6-6 6 6-6 6"/>',
    'check-circle': '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
    workflow: '<rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><path d="M9 6h6a3 3 0 0 1 3 3v6M6 9v6a3 3 0 0 0 3 3h6"/>',
    box: '<path d="m12 3 9 5v9l-9 5-9-5V8l9-5Zm0 10 9-5M12 13 3 8m9 5v9M7.5 5.5l9 5"/>',
    users: '<circle cx="9" cy="8" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 5a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 4v2"/>',
    globe: '<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v5M17 3v5M3 11h18M7 15h3"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7h.01"/>',
    reset: '<path d="M3 11a9 9 0 1 1 2.5 7M3 4v7h7"/>',
    'file-check': '<path d="M14 2H5v20h14V7l-5-5Zm0 0v6h5M8 15l3 3 5-6"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    x: '<path d="m6 6 12 12M18 6 6 18"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    maximize: '<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/>',
    minimize: '<path d="M3 8h5V3m8 0v5h5M8 21v-5H3m13 5v-5h5"/>'
  };
  const icon = name => `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.book}</svg>`;
  const fillIcons = (root = document) => $$('[data-icon]', root).forEach(el => { el.innerHTML = icon(el.dataset.icon); });
  let saved = new Set();
  try {
    const stored = JSON.parse(localStorage.getItem(storageKey) || '[]');
    if (Array.isArray(stored)) saved = new Set(stored.filter(id => typeof id === 'string' && byId.has(id)));
  } catch { /* Storage may be unavailable or contain an older invalid value. */ }
  const state = { route: 'inicio', category: 'todos', type: 'todos', query: '', sort: 'recommended', comparison: new Set(), quizIndex: 0, answers: [], quizFinished: false };
  let toastTimer;
  let lastDialogTrigger = null;

  function notify(message) {
    const el = $('#toast');
    clearTimeout(toastTimer);
    el.textContent = message;
    el.hidden = false;
    toastTimer = setTimeout(() => { el.hidden = true; }, 3800);
  }

  function applyReadingSize() {
    const scale = readingScales[readingIndex];
    document.documentElement.style.setProperty('--reading-scale', scale);
    $('#reading-size-value').textContent = `${Math.round(scale * 100)} %`;
    $('#decrease-text').disabled = readingIndex === 0;
    $('#increase-text').disabled = readingIndex === readingScales.length - 1;
  }

  function changeReadingSize(direction) {
    readingIndex = Math.max(0, Math.min(readingScales.length - 1, readingIndex + direction));
    applyReadingSize();
    try { localStorage.setItem(readingKey, JSON.stringify(readingIndex)); } catch { /* Preferencia conservada durante la sesión. */ }
  }

  function syncFullscreen() {
    const active = Boolean(document.fullscreenElement);
    const button = $('#fullscreen-toggle');
    button.setAttribute('aria-pressed', active);
    button.setAttribute('aria-label', active ? 'Salir de pantalla completa' : 'Activar pantalla completa');
    button.title = active ? 'Salir de pantalla completa' : 'Pantalla completa';
    button.innerHTML = `${icon(active ? 'minimize' : 'maximize')}<span class="fullscreen-label">${active ? 'Salir de pantalla completa' : 'Pantalla completa'}</span>`;
  }

  async function toggleFullscreen() {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
    } catch { notify('Este navegador no permitió activar la pantalla completa. Puedes usar su opción de pantalla completa.'); }
    syncFullscreen();
  }

  function categoryBadge(key) { return `<span class="badge ${key}"><i class="category-dot ${key}"></i>${categories[key].name}</span>`; }
  function sourceLinks(record) { return record.sources.map(source => `<a href="${escapeHTML(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(source.label)} <span aria-hidden="true">↗</span><span class="sr-only"> (se abre en una pestaña nueva)</span></a>`).join(''); }

  function card(record) {
    const { id, name, type, year } = record;
    return `<article class="reference-card" data-record="${id}">
      <div class="card-meta"><div>${categoryBadge(record.categories[0])}<span class="card-type">${type}</span></div><button class="icon-button save-button" data-save="${id}" aria-label="${saved.has(id) ? 'Quitar de guardados' : 'Guardar'} ${escapeHTML(name)}" aria-pressed="${saved.has(id)}">${icon('bookmark')}</button></div>
      <h3><button data-open="${id}">${escapeHTML(name)}</button></h3><p class="card-fullname">${escapeHTML(record.fullName)}</p>
      <p class="card-description">${escapeHTML(record.description)}</p>
      <p class="card-origin">${icon('calendar')}<span><span class="year">${year}</span> · ${escapeHTML(record.creator)}</span></p>
      <div class="card-actions"><button data-open="${id}" class="text-link" aria-label="Ver ficha de ${escapeHTML(name)}">Explorar ficha ${icon('arrow-right')}</button><label class="compare-check"><input type="checkbox" data-compare="${id}" ${state.comparison.has(id) ? 'checked' : ''} aria-label="Comparar ${escapeHTML(name)}">Comparar</label></div>
    </article>`;
  }

  function renderHome() {
    $('#approach-grid').innerHTML = Object.entries(categories).map(([key, category], index) => `<button class="approach-card ${key}" data-explore="${key}"><div class="approach-top"><span class="approach-icon">${icon(category.icon)}</span><span class="step-number">0${index + 1}</span></div><h3>Calidad ${key === 'uso' ? 'en uso' : 'del ' + key}</h3><div class="approach-question">${category.question}</div><p>${category.description}</p><div class="approach-footer"><span>${records.filter(r => r.categories.includes(key)).length} referencias para descubrir</span>${icon('arrow-right')}</div></button>`).join('');
    $('#featured-grid').innerHTML = ['cmmi', 'iso25010', 'iso25019'].map(id => card(byId.get(id))).join('');
  }

  function filteredRecords() {
    const words = normalize(state.query).trim().split(/\s+/).filter(Boolean);
    let result = records.filter(record => {
      const haystack = normalize([record.name, record.fullName, record.creator, record.year, record.type, record.description, record.dateNote, record.note, ...record.categories.map(key => categories[key].name), ...record.dimensions].join(' '));
      return (state.category === 'todos' || record.categories.includes(state.category)) && (state.type === 'todos' || record.type === state.type) && words.every(word => haystack.includes(word));
    });
    if (state.sort === 'name') result.sort((a, b) => a.name.localeCompare(b.name, 'es'));
    if (state.sort === 'oldest') result.sort((a, b) => a.year - b.year);
    if (state.sort === 'newest') result.sort((a, b) => b.year - a.year);
    return result;
  }

  function renderCatalog() {
    const result = filteredRecords();
    $('#catalog-grid').innerHTML = result.map(card).join('');
    $('#result-count').textContent = `${result.length} de ${records.length} referencias${state.category === 'todos' ? '' : ' · Enfoque de ' + categories[state.category].name.toLowerCase()}`;
    $('#catalog-empty').hidden = result.length !== 0;
    $$('#category-filters button').forEach(button => {
      const active = button.dataset.category === state.category;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', active);
    });
    $('#catalog-search').value = state.query;
    $('#type-filter').value = state.type;
    $('#sort-filter').value = state.sort;
  }

  function resetFilters() {
    Object.assign(state, { category: 'todos', type: 'todos', query: '', sort: 'recommended' });
    renderCatalog();
  }

  function renderSaved() {
    const selected = records.filter(record => saved.has(record.id));
    $('#saved-grid').innerHTML = selected.map(card).join('');
    $('#saved-empty').hidden = selected.length > 0;
    $('#saved-count').textContent = selected.length;
  }

  function toggleSaved(id) {
    if (!byId.has(id)) return;
    saved.has(id) ? saved.delete(id) : saved.add(id);
    let persisted = true;
    try { localStorage.setItem(storageKey, JSON.stringify([...saved])); } catch { persisted = false; }
    $$(`[data-save="${id}"]`).forEach(button => {
      button.setAttribute('aria-pressed', saved.has(id));
      button.setAttribute('aria-label', `${saved.has(id) ? 'Quitar de guardados' : 'Guardar'} ${byId.get(id).name}`);
      if (button.classList.contains('detail-save')) button.innerHTML = `${icon('bookmark')} ${saved.has(id) ? 'Guardado' : 'Guardar referencia'}`;
    });
    renderSaved();
    notify(persisted ? (saved.has(id) ? 'Referencia guardada para repasar después.' : 'Referencia eliminada de tus guardados.') : 'El navegador no permite guardar: el cambio se conserva durante esta sesión.');
  }

  function syncComparison() {
    const size = state.comparison.size;
    $('#compare-tray').hidden = size === 0;
    document.body.classList.toggle('has-comparison', size > 0);
    $('#compare-count').textContent = `${size} de 3 seleccionados`;
    $('#open-comparison').disabled = size < 2;
    $$('[data-compare]').forEach(input => { input.checked = state.comparison.has(input.dataset.compare); });
  }

  function toggleComparison(input) {
    const id = input.dataset.compare;
    if (!byId.has(id)) return;
    if (input.checked && state.comparison.size >= 3) {
      input.checked = false;
      notify('Puedes comparar hasta 3 referencias. Retira una para elegir otra.');
      return;
    }
    input.checked ? state.comparison.add(id) : state.comparison.delete(id);
    syncComparison();
  }

  function showDialog(dialog) {
    closeMenu();
    lastDialogTrigger = document.activeElement;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    dialog.scrollTop = 0;
    $('[data-close-dialog]', dialog).focus();
  }

  function openDetail(id) {
    const r = byId.get(id);
    if (!r) return;
    $('#detail-body').innerHTML = `<div class="detail-header"><div class="flex flex-wrap items-center gap-2">${r.categories.map(categoryBadge).join('')}<span class="card-type">${r.type}</span></div><h2 id="detail-title">${escapeHTML(r.name)}</h2><p class="detail-fullname">${escapeHTML(r.fullName)}</p></div>
      <p class="detail-description">${escapeHTML(r.description)}</p>
      <dl class="detail-facts"><div><dt>Año de origen</dt><dd><strong>${r.year}</strong> · ${escapeHTML(r.origin)}</dd></div><div><dt>Autor u organismo creador</dt><dd>${escapeHTML(r.creator)}</dd></div></dl>
      <div class="detail-section"><h3>El año, en su contexto</h3><p>${escapeHTML(r.dateNote)}</p></div>
      <div class="detail-section"><h3>¿Qué propone?</h3>${r.dimensionNote ? `<p>${escapeHTML(r.dimensionNote)}</p>` : ''}<ul>${r.dimensions.map(d => `<li>${escapeHTML(d)}</li>`).join('')}</ul></div>
      <div class="detail-section detail-example"><h3>Un ejemplo para entenderlo</h3><p>${escapeHTML(r.application)}</p></div>
      <p class="detail-note"><strong>Para tener en cuenta.</strong> ${escapeHTML(r.note)}</p>
      <div class="detail-sources"><h3>Consulta las fuentes</h3>${sourceLinks(r)}</div>
      <div class="detail-actions"><button class="button button-secondary detail-save save-button" data-save="${r.id}" aria-pressed="${saved.has(r.id)}" aria-label="${saved.has(r.id) ? 'Quitar de guardados' : 'Guardar'} ${escapeHTML(r.name)}">${icon('bookmark')} ${saved.has(r.id) ? 'Guardado' : 'Guardar referencia'}</button><label class="compare-check"><input type="checkbox" data-compare="${r.id}" ${state.comparison.has(r.id) ? 'checked' : ''} aria-label="Comparar ${escapeHTML(r.name)}">Añadir a la comparación</label></div>`;
    showDialog($('#detail-dialog'));
  }

  function openComparison() {
    if (state.comparison.size < 2) return;
    const selected = [...state.comparison].map(id => byId.get(id));
    const rows = [
      ['Naturaleza', r => r.type], ['Enfoque', r => r.categories.map(key => categories[key].name).join(' · ')],
      ['Año de origen', r => String(r.year)], ['Creado por', r => r.creator], ['Propósito', r => r.description],
      ['Aspectos clave', r => r.dimensions.join('; ')], ['Ejemplo de aplicación', r => r.application], ['Contexto histórico', r => r.dateNote]
    ];
    $('#comparison-body').innerHTML = `<h2 id="comparison-title">Míralos lado a lado.</h2><p>Compara su propósito y alcance para entender cómo se complementan.</p><div class="table-panel"><div class="table-scroll" role="region" aria-label="Comparación de referencias seleccionadas" tabindex="0"><table><caption class="sr-only">Comparación de ${selected.map(r => escapeHTML(r.name)).join(', ')}</caption><thead><tr><th scope="col">Característica</th>${selected.map(r => `<th scope="col">${escapeHTML(r.name)}</th>`).join('')}</tr></thead><tbody>${rows.map(([label, value]) => `<tr><th scope="row">${label}</th>${selected.map(r => `<td>${escapeHTML(value(r))}</td>`).join('')}</tr>`).join('')}<tr><th scope="row">Fuentes</th>${selected.map(r => `<td><div class="detail-sources">${sourceLinks(r)}</div></td>`).join('')}</tr></tbody></table></div></div>`;
    showDialog($('#comparison-dialog'));
  }

  function renderTimeline() {
    const category = $('#timeline-filter').value;
    const sorted = records.filter(r => category === 'todos' || r.categories.includes(category)).sort((a, b) => a.year - b.year);
    const years = [...new Set(sorted.map(r => r.year))];
    $('#timeline').innerHTML = years.map(year => `<div class="timeline-group"><h2 class="timeline-year">${year}</h2><div class="timeline-entries">${sorted.filter(r => r.year === year).map(r => `<button class="timeline-entry" data-open="${r.id}" aria-label="Ver ${escapeHTML(r.name)}, ${r.year}"><div><h3>${escapeHTML(r.name)}</h3><p>${escapeHTML(r.creator)}</p></div><div class="flex items-center gap-3">${categoryBadge(r.categories[0])}${icon('arrow-right')}</div></button>`).join('')}</div></div>`).join('');
  }

  function renderSources() {
    $('#sources-list').innerHTML = [...records].sort((a, b) => a.name.localeCompare(b.name, 'es')).map(r => `<article class="source-item"><h2>${escapeHTML(r.name)}</h2><p>${r.year} · ${escapeHTML(r.creator)}</p>${sourceLinks(r)}</article>`).join('');
  }

  function renderQuiz() {
    const panel = $('#quiz-panel');
    if (state.quizFinished) {
      const score = state.answers.filter((answer, index) => answer === questions[index].answer).length;
      panel.innerHTML = `<div class="quiz-result"><div class="score-ring" aria-label="${score} de ${questions.length} respuestas correctas">${score}/${questions.length}</div><h2>${score === questions.length ? '¡Las ideas están conectadas!' : 'Cada intento construye conocimiento.'}</h2><p>${score === questions.length ? 'Distingues enfoques, conceptos e historia. Sigue explorando para profundizar.' : 'Ya tienes un punto de partida. Revisa las referencias y vuelve a intentarlo.'}</p><button class="button button-primary" data-action="restart-quiz">Volver a practicar ${icon('reset')}</button><div class="quiz-review"><strong>Tu recorrido</strong>${questions.map((q, index) => `<button data-open="${q.related}"><span>${state.answers[index] === q.answer ? '✓' : '↗'} Pregunta ${index + 1} · ${escapeHTML(byId.get(q.related).name)}</span><span>${state.answers[index] === q.answer ? 'Correcta' : 'Repasar'}</span></button>`).join('')}</div></div>`;
      return;
    }
    const index = state.quizIndex;
    const q = questions[index];
    const answered = state.answers[index] !== undefined;
    panel.innerHTML = `<div class="quiz-progress-heading"><span>PREGUNTA ${index + 1} DE ${questions.length}</span><span>Una idea a la vez</span></div><div class="quiz-progress" aria-hidden="true">${questions.map((_, i) => `<span class="${i < index ? 'done' : i === index ? 'current' : ''}"></span>`).join('')}</div><h2 id="question-title" tabindex="-1">${escapeHTML(q.question)}</h2><div class="quiz-options" role="group" aria-labelledby="question-title">${q.options.map((option, i) => `<button data-answer="${i}" class="quiz-option ${answered && i === q.answer ? 'correct' : answered && i === state.answers[index] ? 'incorrect' : ''}" ${answered ? 'disabled' : ''}><span>${answered && i === q.answer ? '✓' : answered && i === state.answers[index] ? '×' : String.fromCharCode(65 + i)}</span>${escapeHTML(option)}</button>`).join('')}</div>${answered ? `<div class="quiz-feedback" role="status"><strong>${state.answers[index] === q.answer ? '¡Correcto!' : 'Una pista para la próxima.'}</strong>${escapeHTML(q.explanation)}<br><button class="text-link" data-open="${q.related}">Consultar la referencia ${icon('arrow-right')}</button></div><button class="button button-primary quiz-next" data-action="next-question">${index === questions.length - 1 ? 'Ver mi resultado' : 'Siguiente pregunta'} ${icon('arrow-right')}</button>` : '<p class="quiz-hint">Selecciona una respuesta para descubrir la explicación.</p>'}`;
  }

  function route() {
    const hash = location.hash.slice(1);
    state.route = Object.hasOwn(routes, hash) ? hash : 'inicio';
    $$('[data-view]').forEach(section => { section.hidden = section.dataset.view !== state.route; });
    $$('.nav-link').forEach(link => {
      const active = link.getAttribute('href') === '#' + state.route;
      link.classList.toggle('active', active);
      active ? link.setAttribute('aria-current', 'page') : link.removeAttribute('aria-current');
    });
    $('#breadcrumb').textContent = routes[state.route];
    document.title = `${routes[state.route]} · CalidadLab`;
    if (state.route === 'explorador') renderCatalog();
    if (state.route === 'guardados') renderSaved();
    closeMenu();
    $('#main').focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  function navigate(destination) {
    if (location.hash === '#' + destination) route();
    else location.hash = destination;
  }

  function focusSearch() {
    resetFilters();
    navigate('explorador');
    setTimeout(() => { $('#catalog-search').focus(); }, 30);
  }

  function closeMenu() {
    $('#sidebar').classList.remove('open');
    $('#sidebar-backdrop').hidden = true;
    $('#menu-toggle').setAttribute('aria-expanded', 'false');
    $('#menu-toggle').setAttribute('aria-label', 'Abrir menú');
    $('#sidebar').inert = mobileNavigation.matches;
  }

  function openMenu() {
    $('#sidebar').inert = false;
    $('#sidebar').classList.add('open');
    $('#sidebar-backdrop').hidden = false;
    $('#menu-toggle').setAttribute('aria-expanded', 'true');
    $('#menu-toggle').setAttribute('aria-label', 'Cerrar menú');
    $('.nav-link', $('#sidebar')).focus();
  }

  document.addEventListener('click', event => {
    const target = event.target.closest('button, a');
    if (!target) return;
    if (target.dataset.open) openDetail(target.dataset.open);
    if (target.dataset.save) toggleSaved(target.dataset.save);
    if (target.hasAttribute('data-close-dialog')) target.closest('dialog').close();
    if (target.dataset.explore) { resetFilters(); state.category = target.dataset.explore; navigate('explorador'); }
    if (target.dataset.category) { state.category = target.dataset.category; renderCatalog(); }
    if (target.dataset.answer !== undefined && state.answers[state.quizIndex] === undefined && !state.quizFinished) {
      state.answers[state.quizIndex] = Number(target.dataset.answer);
      renderQuiz();
      $('.quiz-next').focus();
    }
    if (target.dataset.action === 'reset-filters') resetFilters();
    if (target.dataset.action === 'next-question') {
      if (state.answers[state.quizIndex] === undefined) return;
      state.quizIndex < questions.length - 1 ? state.quizIndex++ : state.quizFinished = true;
      renderQuiz();
      const focusTarget = $('#question-title') || $('[data-action="restart-quiz"]');
      focusTarget.focus();
    }
    if (target.dataset.action === 'restart-quiz') {
      state.quizIndex = 0; state.answers = []; state.quizFinished = false;
      renderQuiz(); $('#question-title').focus();
    }
  });
  document.addEventListener('change', event => { if (event.target.matches('[data-compare]')) toggleComparison(event.target); });
  $('#catalog-search').addEventListener('input', event => { state.query = event.target.value; renderCatalog(); });
  $('#type-filter').addEventListener('change', event => { state.type = event.target.value; renderCatalog(); });
  $('#sort-filter').addEventListener('change', event => { state.sort = event.target.value; renderCatalog(); });
  $('#reset-filters').addEventListener('click', resetFilters);
  $('#global-search').addEventListener('click', focusSearch);
  $('#decrease-text').addEventListener('click', () => changeReadingSize(-1));
  $('#increase-text').addEventListener('click', () => changeReadingSize(1));
  $('#fullscreen-toggle').addEventListener('click', toggleFullscreen);
  document.addEventListener('fullscreenchange', syncFullscreen);
  $('#timeline-filter').addEventListener('change', renderTimeline);
  $('#clear-compare').addEventListener('click', () => { state.comparison.clear(); syncComparison(); });
  $('#open-comparison').addEventListener('click', openComparison);
  $('#menu-toggle').addEventListener('click', () => $('#sidebar').classList.contains('open') ? closeMenu() : openMenu());
  $('#sidebar-backdrop').addEventListener('click', closeMenu);
  mobileNavigation.addEventListener('change', closeMenu);
  window.addEventListener('hashchange', route);
  $$('dialog').forEach(dialog => {
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    });
    dialog.addEventListener('close', () => {
      document.body.style.overflow = '';
      if (lastDialogTrigger?.isConnected) lastDialogTrigger.focus();
    });
  });
  document.addEventListener('keydown', event => {
    const dialogOpen = $$('dialog[open]').length > 0;
    const editing = /INPUT|TEXTAREA|SELECT/.test(event.target.tagName) || event.target.isContentEditable;
    if (!dialogOpen && ((event.key.toLowerCase() === 'k' && (event.ctrlKey || event.metaKey)) || (event.key === '/' && !editing))) {
      event.preventDefault(); focusSearch();
    }
    if ($('#sidebar').classList.contains('open')) {
      if (event.key === 'Escape') { closeMenu(); $('#menu-toggle').focus(); }
      if (event.key === 'Tab') {
        const focusable = $$('a, button', $('#sidebar'));
        const first = focusable[0], last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    }
  });
  // Keep bookmarks in sync if the same guide is open in another tab.
  window.addEventListener('storage', event => {
    if (event.key !== storageKey && event.key !== null) return;
    try {
      const values = JSON.parse(event.newValue || '[]');
      saved = new Set(Array.isArray(values) ? values.filter(id => byId.has(id)) : []);
      renderHome(); renderCatalog(); renderSaved();
    } catch { /* A malformed external value must not interrupt reading. */ }
  });

  fillIcons();
  applyReadingSize();
  $('#fullscreen-toggle').disabled = !document.fullscreenEnabled;
  syncFullscreen();
  $$('[data-total]').forEach(el => { el.textContent = records.length; });
  renderHome(); renderCatalog(); renderSaved(); renderTimeline(); renderSources(); renderQuiz(); route();
})();
