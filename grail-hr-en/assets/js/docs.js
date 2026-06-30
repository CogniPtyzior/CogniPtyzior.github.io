
(function(){
  const sidebar = document.querySelector('.sidebar');
  const toggle = document.querySelector('[data-menu-toggle]');
  if(toggle && sidebar){
    toggle.addEventListener('click', () => {
      const open = sidebar.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? 'Close' : 'Menu';
    });
    sidebar.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      sidebar.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = 'Menu';
    }));
  }
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.sidebar-nav a').forEach(a => {
    if(a.getAttribute('href') === current) a.classList.add('is-active');
  });
  document.querySelectorAll('pre').forEach(pre => {
    const wrap = document.createElement('div');
    wrap.className = 'code-block';
    pre.parentNode.insertBefore(wrap, pre); wrap.appendChild(pre);
    const btn = document.createElement('button'); btn.className = 'copy-btn'; btn.type = 'button'; btn.textContent = 'Copy';
    btn.addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(pre.innerText); btn.textContent = 'Copied'; setTimeout(() => btn.textContent = 'Copy', 1300); } catch(e) {}
    });
    wrap.appendChild(btn);
  });
  if('IntersectionObserver' in window){
    const io = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('is-visible'); io.unobserve(e.target); } }), {threshold:.08});
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  } else { document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible')); }
})();
