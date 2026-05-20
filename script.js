    /* ─── Navbar scroll ─── */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  /* ─── Mobile menu ─── */
  function toggleNav() {
    const links = document.getElementById('navLinks');
    links.classList.toggle('open');
  }
  // Close menu on link click
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
      document.getElementById('navLinks').classList.remove('open');
    });
  });

  /* ─── Intersection Observer — Reveal on scroll ─── */
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));

  /* ─── Bar chart reveal ─── */
  const barRows = document.querySelectorAll('.bar-row');
  const barIO = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        barIO.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  barRows.forEach(el => barIO.observe(el));

  /* ─── Smooth parallax on hero orbs ─── */
  window.addEventListener('scroll', () => {
    const sy = window.scrollY;
    const orbs = document.querySelectorAll('.hero-orb');
    orbs.forEach((orb, i) => {
      const speed = (i + 1) * 0.18;
      orb.style.transform = `translateY(${sy * speed}px)`;
    });
    // Parallax on hero primate
    const primate = document.querySelector('.hero-primate');
    if (primate) primate.style.transform = `translateY(${sy * 0.15}px)`;
  });