let elem = document.querySelector('.products-main');
let msnry = new Masonry( elem, {
  columnWidth: '.products-main__block',
  itemSelector: '.products-main__block',
  percentPosition: true,
});
