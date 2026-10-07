// Header turns solid white once you scroll past the top; hamburger toggles the mobile menu.
(function () {
  var header = document.querySelector('.site-header');
  var burger = document.querySelector('.hamburger');

  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  burger.addEventListener('click', function () {
    var open = header.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });
  header.querySelectorAll('nav a').forEach(function (a) {
    a.addEventListener('click', function () { header.classList.remove('open'); });
  });
})();
