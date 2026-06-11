(function () {
  const sidebar = document.querySelector('.sidebar');
  const toggle = document.querySelector('.nav-toggle');
  if (toggle && sidebar) {
    toggle.addEventListener('click', () => {
      const open = sidebar.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }
  const topButton = document.querySelector('.to-top');
  if (topButton) {
    const update = () => topButton.classList.toggle('visible', window.scrollY > 500);
    window.addEventListener('scroll', update, { passive: true });
    topButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    update();
  }
})();
