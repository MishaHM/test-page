let navBtn = document.querySelector('.mobile-nav__toggler');
let mobileToggler = document.querySelector('.mobile-nav__toggler');
let headClose = document.querySelector('.header__close');
let header = document.querySelector('.header');
let headerOverlay = document.querySelector('.header-overlay');
let searchLink = document.getElementById('searchLink');
let searchClose = document.querySelector('.search__close');
let searchBlock = document.querySelector('.search');


function headerOnOff () {
  header.classList.toggle('visible')
};

function MobileTogglerChange () {
  mobileToggler.classList.toggle('visible')
};

function searchBlockOn () {
  searchBlock.classList.add('search--show')
};

function searchBlockOff () {
  searchBlock.classList.remove('search--show')
};

navBtn.onclick = function () {
  event.preventDefault();
  headerOnOff ()
  MobileTogglerChange ()
  headerOverlay.style.display = 'block';
};

headClose.onclick = function () {
  event.preventDefault();
  headerOnOff ()
  MobileTogglerChange ()
  headerOverlay.style.display = 'none';
};

headerOverlay.onclick = function () {
  headerOverlay.style.display = 'none';
  headerOnOff ()
  MobileTogglerChange ()
  searchBlockOff ()
};

let searchOverlay = document.querySelector('.search-overlay');

searchLink.onclick = function () {
  event.preventDefault();
  searchBlockOn ()
  searchOverlay.style.display = 'block';
};

searchClose.onclick = function () {
  event.preventDefault();
  searchBlockOff ()
  searchOverlay.style.display = 'none';
};

searchOverlay.onclick = function () {
  searchBlockOff ()
  searchOverlay.style.display = 'none';
};

let navBtnFoot = document.querySelector('.footer-inner__nav-toggler');
let navFoot = document.querySelector('.nav--footer');

function navBtnFootChange () {
  document.querySelector('.footer-inner__nav-arrow').classList.toggle('footer-inner__nav-arrow--change')
};

function navFootOnOff() {
  navFoot.classList.toggle('nav--footer--show')
};

navBtnFoot.onclick = function () {
  event.preventDefault();
  navBtnFootChange ()
  navFootOnOff ()
};
