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
    const items = document.querySelectorAll('.intro__copy, .voice, .section-head, .svc, .step, .qa, .booking__head, .form');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('is-in'); io.unobserve(entry.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    items.forEach((el) => { el.classList.add('reveal'); io.observe(el); });
  }

  /* ---------- Service buttons preselect the form ---------- */
  const select = document.getElementById('f-service');
  document.querySelectorAll('[data-service]').forEach((link) => {
    link.addEventListener('click', () => { if (select) select.value = link.dataset.service; });
  });

  /* ---------- Booking form ---------- */
  const form = document.querySelector('[data-booking-form]');
  if (form) {
    const status = form.querySelector('.form__status');
    const setStatus = (msg, isError) => {
      status.textContent = msg;
      status.classList.toggle('is-error', Boolean(isError));
    };

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      let firstInvalid = null;
      form.querySelectorAll('[required]').forEach((field) => {
        const ok = field.checkValidity();
        field.setAttribute('aria-invalid', String(!ok));
        if (!ok && !firstInvalid) firstInvalid = field;
      });
      if (firstInvalid) {
        setStatus('Täytä nimi, toimiva sähköpostiosoite ja kuvaus tapahtumasta.', true);
        firstInvalid.focus();
        return;
      }

      const endpoint = form.dataset.endpoint;
      if (!endpoint) {
        setStatus('Lomaketta ei ole vielä kytketty. Ota yhteyttä sähköpostitse.', true);
        return;
      }

      const button = form.querySelector('button[type="submit"]');
      button.disabled = true;
      setStatus('Lähetetään…');
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: new FormData(form),
        });
        if (!res.ok) throw new Error(String(res.status));
        form.reset();
        setStatus('Tiedustelu lähetetty. Tomas vastaa sähköpostiisi.');
      } catch {
        setStatus('Lähetys epäonnistui. Yritä uudelleen tai ota yhteyttä sähköpostitse.', true);
      } finally {
        button.disabled = false;
      }
    });
  }

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
