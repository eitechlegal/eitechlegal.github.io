// Shared mobile navigation toggle
(function () {
  var btn = document.getElementById('mobileMenuBtn');
  var menu = document.querySelector('.navbar .nav-menu');
  if (!btn || !menu) return;
  btn.setAttribute('aria-label', 'Open menu');
  btn.setAttribute('aria-expanded', 'false');
  function setOpen(open) {
    menu.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.textContent = open ? '✕' : '☰';
  }
  btn.addEventListener('click', function () { setOpen(!menu.classList.contains('open')); });
  menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setOpen(false); }); });
  window.addEventListener('resize', function () { if (window.innerWidth > 768) setOpen(false); });
})();
