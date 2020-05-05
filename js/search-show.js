let searchLink = document.getElementById('search-link');
let searchClose = document.getElementById('search-toggler-close');
let searchBlock = document.getElementById('search-block');

searchLink.onclick = function () {
  event.preventDefault();
  searchBlock.classList.add('search_show')
};


searchClose.onclick = function () {
  event.preventDefault();
  searchBlock.classList.remove('search_show')
};
