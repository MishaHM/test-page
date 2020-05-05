let navBtn = document.getElementById('nav-toggler');
let headClose = document.getElementById('nav-toggler-close');
let head = document.getElementById('header');
let navBtnFoot = document.getElementById('footer-nav-toggler');
let footNav = document.getElementById('footer-nav');


navBtn.onclick = function () {
  event.preventDefault();
  head.classList.toggle('visible')
};

headClose.onclick = function () {
  event.preventDefault();
  head.classList.remove('visible')
};

navBtnFoot.onclick = function () {
  event.preventDefault();
  footNav.classList.toggle('footer-nav-show')
};
