let scrollUp = document.getElementById('scroll-up');

scrollUp.onclick = function () {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.onscroll = function () {
  if (this.pageYOffset >= 100) {
    scrollUp.style.display = 'block';
  } else {
    scrollUp.style.display = 'none';
  }
};
