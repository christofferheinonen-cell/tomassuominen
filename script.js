(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* ---------- Spotlight on the stage ---------- */
  const stage = document.querySelector('[data-stage]');
  const lit = stage && stage.querySelector('.marquee__lit');

  if (stage && lit) {
    const marquee = lit.parentElement;
    // Current and target spotlight position, in px relative to the stage.
    const pos = { x: 0, y: 0, r: 0 };
    const target = { x: 0, y: 0, r: 0 };

    const restingSpot = () => {
      const s = stage.getBoundingClientRect();
      const m = marquee.getBoundingClientRect();
      return {
        x: m.left - s.left + m.width / 2,
        y: m.top - s.top + m.height / 2,
        r: Math.max(m.width, m.height) * 0.26,
      };
    };

    const paint = () => {
      const s = stage.getBoundingClientRect();
      const m = marquee.getBoundingClientRect();
      stage.style.setProperty('--x', `${pos.x}px`);
      stage.style.setProperty('--y', `${pos.y}px`);
      lit.style.setProperty('--mx', `${pos.x - (m.left - s.left)}px`);
      lit.style.setProperty('--my', `${pos.y - (m.top - s.top)}px`);
      lit.style.setProperty('--r', `${pos.r}px`);
    };

    const rest = restingSpot();

    if (reduceMotion) {
      Object.assign(pos, rest, { r: rest.r * 3 });
      paint();
      stage.classList.add('is-lit');
    } else {
      // Lights up: the spot sweeps in from stage left and opens over the name.
      Object.assign(pos, { x: rest.x * 0.25, y: rest.y * 0.6, r: 0 });
      Object.assign(target, rest);
      paint();

      let raf = 0;
      const tick = () => {
        const k = 0.06;
        pos.x += (target.x - pos.x) * k;
        pos.y += (target.y - pos.y) * k;
        pos.r += (target.r - pos.r) * k;
        paint();
        const settled = Math.abs(target.x - pos.x) < 0.5 && Math.abs(target.y - pos.y) < 0.5 && Math.abs(target.r - pos.r) < 0.5;
        raf = settled ? 0 : requestAnimationFrame(tick);
      };
      const run = () => { if (!raf) raf = requestAnimationFrame(tick); };

      requestAnimationFrame(() => { stage.classList.add('is-lit'); run(); });

      if (finePointer) {
        stage.addEventListener('pointermove', (e) => {
          const s = stage.getBoundingClientRect();
          target.x = e.clientX - s.left;
          target.y = e.clientY - s.top;
          target.r = restingSpot().r * 0.7;
          run();
        });
        stage.addEventListener('pointerleave', () => { Object.assign(target, restingSpot()); run(); });
      }

      window.addEventListener('resize', () => { Object.assign(target, restingSpot()); run(); });
    }
  }

  /* ---------- Nav background after the hero ---------- */
  const nav = document.querySelector('[data-nav]');
  if (nav) {
    const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Client logo loop ---------- */
  // Duplicate the list once so the track can scroll by half its width and loop without a seam.
  const track = document.querySelector('[data-logo-track]');
  if (track) {
    [...track.children].forEach((item) => {
      const clone = item.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      clone.querySelector('img')?.setAttribute('alt', '');
      track.appendChild(clone);
    });
  }

  /* ---------- Voice waveform ---------- */
  const wave = document.querySelector('[data-wave]');
  if (wave) {
    const bars = 56;
    let seed = 7;
    const rand = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
    for (let i = 0; i < bars; i++) {
      // A speech-like envelope: louder in the middle of phrases, quieter at the ends.
      const envelope = 0.35 + 0.65 * Math.abs(Math.sin((i / bars) * Math.PI * 2.4));
      const bar = document.createElement('span');
      bar.style.setProperty('--h', Math.round(18 + 82 * envelope * (0.45 + 0.55 * rand())));
      bar.style.setProperty('--d', `${(-rand() * 1.4).toFixed(2)}s`);
      wave.appendChild(bar);
    }
  }

  /* ---------- Intro highlights ---------- */
  const introText = document.querySelector('.intro__text');
  if (introText) {
    if (reduceMotion || !('IntersectionObserver' in window)) {
      introText.classList.add('is-lit');
    } else {
      const hio = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) { introText.classList.add('is-lit'); hio.disconnect(); }
      }, { threshold: 0.4 });
      hio.observe(introText);
    }
  }

  /* ---------- Scroll reveal ---------- */
  if (!reduceMotion && 'IntersectionObserver' in window) {
    const items = document.querySelectorAll('.intro__copy, .voice, .section-head, .svc, .step, .qa, .booking__head, .booking__body');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('is-in'); io.unobserve(entry.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    items.forEach((el) => { el.classList.add('reveal'); io.observe(el); });
  }

  /* ---------- Booking dialog ---------- */
  const dialog = document.getElementById('booking-dialog');
  const form = dialog && dialog.querySelector('[data-booking-form]');

  if (dialog && form && typeof dialog.showModal === 'function') {
    const steps = [...form.querySelectorAll('[data-step]')];
    const progress = form.querySelector('[data-progress]');
    const bar = form.querySelector('[data-bar]');
    const backBtn = form.querySelector('[data-back]');
    const nextBtn = form.querySelector('[data-next]');
    const submitBtn = form.querySelector('[data-submit]');
    const foot = form.querySelector('[data-foot]');
    const done = form.querySelector('[data-done]');
    const status = form.querySelector('[data-status]');
    const dateInput = form.querySelector('#bk-date');
    const dateOpen = form.querySelector('[data-date-open]');
    // City landing pages set <body data-city="…">: prefill the city and tag the enquiry with its source.
    const pageCity = document.body.dataset.city || '';
    const cityInput = form.querySelector('#bk-city');
    let current = 0;
    let opener = null;

    const setStatus = (msg, isError) => {
      status.textContent = msg;
      status.classList.toggle('is-error', Boolean(isError));
    };

    const showStep = (i) => {
      current = i;
      steps.forEach((step, n) => { step.hidden = n !== i; });
      progress.textContent = `Vaihe ${i + 1}/${steps.length}`;
      bar.style.width = `${((i + 1) / steps.length) * 100}%`;
      backBtn.hidden = i === 0;
      nextBtn.hidden = i === steps.length - 1;
      submitBtn.hidden = i !== steps.length - 1;
      setStatus('');
    };

    const reset = () => {
      form.reset();
      form.querySelectorAll('[aria-invalid]').forEach((el) => el.removeAttribute('aria-invalid'));
      form.querySelectorAll('.has-error').forEach((el) => el.classList.remove('has-error'));
      dateInput.disabled = false;
      done.hidden = true;
      foot.hidden = false;
      showStep(0);
    };

    const open = (service, trigger) => {
      if (!done.hidden) reset();
      if (service) {
        const radio = form.querySelector(`input[name="Palvelu"][value="${service}"]`);
        if (radio) { radio.checked = true; showStep(1); }
      }
      if (pageCity && !cityInput.value) cityInput.value = pageCity;
      opener = trigger;
      dialog.showModal();
      document.documentElement.classList.add('has-dialog');
      const first = steps[current].querySelector('input, select, textarea');
      if (first) first.focus();
    };

    dialog.addEventListener('close', () => {
      document.documentElement.classList.remove('has-dialog');
      if (opener) opener.focus();
    });
    // Close when the backdrop (outside the panel) is clicked.
    dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
    form.querySelectorAll('[data-close]').forEach((btn) => btn.addEventListener('click', () => dialog.close()));

    document.querySelectorAll('[data-book]').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        open(link.dataset.service, link);
      });
    });

    dateOpen.addEventListener('change', () => {
      dateInput.disabled = dateOpen.checked;
      if (dateOpen.checked) { dateInput.value = ''; markField(dateInput, true); }
    });

    function markField(field, ok) {
      const wrap = field.closest('.field');
      field.setAttribute('aria-invalid', String(!ok));
      if (wrap) wrap.classList.toggle('has-error', !ok);
    }

    // Validate the visible step; focus the first problem.
    const validateStep = (i) => {
      const step = steps[i];
      let firstBad = null;

      const radios = step.querySelectorAll('input[type="radio"][required]');
      if (radios.length) {
        const ok = [...radios].some((r) => r.checked);
        step.querySelector('[data-error-for]')?.classList.toggle('is-shown', !ok);
        if (!ok) firstBad = radios[0];
      }

      step.querySelectorAll('input:not([type="radio"]):not([type="checkbox"])[required], select[required], textarea[required]').forEach((field) => {
        const ok = field.disabled || field.checkValidity();
        markField(field, ok);
        if (!ok && !firstBad) firstBad = field;
      });

      if (firstBad) firstBad.focus();
      return !firstBad;
    };

    // Clear an error as soon as the field is fixed.
    form.addEventListener('input', (e) => {
      const t = e.target;
      if (t.type === 'radio') form.querySelector('[data-error-for="Palvelu"]')?.classList.remove('is-shown');
      else if (t.getAttribute('aria-invalid') === 'true' && t.checkValidity()) markField(t, true);
    });

    nextBtn.addEventListener('click', () => {
      if (!validateStep(current)) return;
      showStep(current + 1);
      steps[current].querySelector('input, select, textarea')?.focus();
    });
    backBtn.addEventListener('click', () => showStep(current - 1));

    // Enter in a text field moves forward instead of submitting early.
    form.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && e.target.tagName === 'INPUT' && current < steps.length - 1) {
        e.preventDefault();
        nextBtn.click();
      }
    });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!validateStep(current)) return;

      const endpoint = form.dataset.endpoint;
      if (!endpoint) {
        setStatus('Lomaketta ei ole vielä kytketty sähköpostiin.', true);
        return;
      }

      const data = new FormData(form);
      const service = data.get('Palvelu');
      const who = data.get('Yritys') || data.get('Nimi');
      form.querySelector('[data-subject]').value = `Keikkatiedustelu: ${service} – ${who}${pageCity ? ` (${pageCity}-sivu)` : ''}`;
      if (pageCity) data.set('Lähde', `${pageCity}-sivu`);
      data.set('_subject', form.querySelector('[data-subject]').value);
      if (dateOpen.checked) data.set('Päivämäärä', 'Ei vielä varma');
      // Leave empty optional answers out of the email (settings starting with _ stay).
      [...data.keys()].forEach((key) => { if (!key.startsWith('_') && data.get(key) === '') data.delete(key); });

      submitBtn.disabled = true;
      setStatus('Lähetetään…');
      try {
        const res = await fetch(endpoint, { method: 'POST', headers: { Accept: 'application/json' }, body: data });
        // FormSubmit can answer 200 with success "false" (e.g. before the address is activated).
        const body = await res.json().catch(() => ({}));
        if (!res.ok || String(body.success) === 'false') throw new Error(body.message || String(res.status));
        form.querySelector('[data-done-email]').textContent = data.get('email');
        steps.forEach((step) => { step.hidden = true; });
        foot.hidden = true;
        done.hidden = false;
        progress.textContent = 'Valmis';
        bar.style.width = '100%';
        done.focus();
      } catch {
        setStatus('Lähetys epäonnistui. Tarkista yhteys ja yritä uudelleen.', true);
      } finally {
        submitBtn.disabled = false;
      }
    });

    showStep(0);
  }

  /* ---------- Cookie consent ---------- */
  // The site sets no cookies and loads no tracking, so no banner is needed and none is shown.
  // To add analytics or an ad pixel, list it here. The banner then appears, and the service
  // loads only after the visitor accepts it; "Vain välttämättömät" is as easy as accepting.
  // Update the cookie section of the privacy policy (tools/legal.mjs) at the same time.
  //
  //   { id: 'analytics', name: 'Kävijätilastot', description: 'Kertoo, miten sivustoa käytetään.', load() { /* add the script tag */ } }
  const OPTIONAL_SERVICES = [];
  const CONSENT_KEY = 'ts-consent';
  const CONSENT_VERSION = 1;   // raise when the list of services changes, so visitors are asked again

  const readConsent = () => {
    try {
      const saved = JSON.parse(localStorage.getItem(CONSENT_KEY));
      return saved && saved.version === CONSENT_VERSION ? saved.choices : null;
    } catch { return null; }
  };
  const loaded = new Set();
  const applyConsent = (choices) => {
    OPTIONAL_SERVICES.forEach((service) => {
      if (choices[service.id] && !loaded.has(service.id)) { loaded.add(service.id); service.load(); }
    });
  };
  const saveConsent = (choices) => {
    try { localStorage.setItem(CONSENT_KEY, JSON.stringify({ version: CONSENT_VERSION, choices, at: new Date().toISOString() })); } catch { /* private mode: ask again next time */ }
    applyConsent(choices);
  };

  if (OPTIONAL_SERVICES.length) {
    const policyHref = document.querySelector('a[href$="tietosuoja/"]')?.getAttribute('href') || 'tietosuoja/';
    const banner = document.createElement('section');
    banner.className = 'consent';
    banner.setAttribute('aria-label', 'Evästeasetukset');
    banner.hidden = true;
    banner.innerHTML = `
      <div class="consent__inner">
        <p class="consent__title">Evästeet</p>
        <p class="consent__text">Käytämme valinnaisia evästeitä vain suostumuksellasi: ${OPTIONAL_SERVICES.map((sv) => sv.name.toLowerCase()).join(', ')}. Sivusto toimii myös ilman niitä. <a href="${policyHref}">Tietosuojaseloste</a></p>
        <div class="consent__choices" hidden>
          <label class="consent__choice"><input type="checkbox" checked disabled><span><strong>Välttämättömät</strong> Sivuston toiminta ja tämä valinta. Aina päällä.</span></label>
          ${OPTIONAL_SERVICES.map((sv) => `<label class="consent__choice"><input type="checkbox" data-service-id="${sv.id}"><span><strong>${sv.name}</strong> ${sv.description}</span></label>`).join('')}
        </div>
        <div class="consent__actions">
          <button class="btn btn--ghost btn--sm" type="button" data-consent="necessary">Vain välttämättömät</button>
          <button class="btn btn--ghost btn--sm" type="button" data-consent="choose">Valitse</button>
          <button class="btn btn--ghost btn--sm" type="button" data-consent="save" hidden>Tallenna valinnat</button>
          <button class="btn btn--light btn--sm" type="button" data-consent="all">Hyväksy kaikki</button>
        </div>
      </div>`;
    document.body.appendChild(banner);

    const choicesBox = banner.querySelector('.consent__choices');
    const boxes = [...banner.querySelectorAll('[data-service-id]')];
    const btn = (name) => banner.querySelector(`[data-consent="${name}"]`);
    const show = (current) => {
      boxes.forEach((box) => { box.checked = Boolean(current && current[box.dataset.serviceId]); });
      banner.hidden = false;
    };
    const finish = (choices) => {
      saveConsent(choices);
      banner.hidden = true;
      choicesBox.hidden = true;
      btn('choose').hidden = false;
      btn('save').hidden = true;
    };
    const all = (value) => Object.fromEntries(OPTIONAL_SERVICES.map((sv) => [sv.id, value]));

    btn('all').addEventListener('click', () => finish(all(true)));
    btn('necessary').addEventListener('click', () => finish(all(false)));
    btn('choose').addEventListener('click', () => {
      choicesBox.hidden = false;
      btn('choose').hidden = true;
      btn('save').hidden = false;
      boxes[0]?.focus();
    });
    btn('save').addEventListener('click', () => finish(Object.fromEntries(boxes.map((box) => [box.dataset.serviceId, box.checked]))));

    // Footer link to change the choice later.
    document.querySelectorAll('[data-consent-link]').forEach((li) => { li.hidden = false; });
    document.querySelectorAll('[data-consent-open]').forEach((b) => b.addEventListener('click', () => show(readConsent())));

    const saved = readConsent();
    if (saved) applyConsent(saved);
    else show(null);
  }

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
