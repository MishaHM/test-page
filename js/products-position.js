let prodBlock = document.getElementById('products-block');

let prod1 = document.getElementById('prod1');
let prod2 = document.getElementById('prod2');
let prod3 = document.getElementById('prod3');
let prod4 = document.getElementById('prod4');
let prod5 = document.getElementById('prod5');
let prod6 = document.getElementById('prod6');
let prod7 = document.getElementById('prod7');
let prod8 = document.getElementById('prod8');
let prod9 = document.getElementById('prod9');


prod1.style.top = 0 + 'px';
prod2.style.top = prod1.offsetHeight+ 'px';
prod3.style.top = prod2.offsetTop + prod2.offsetHeight + 'px';
prod4.style.top = prod3.offsetTop + prod3.offsetHeight + 'px';
prod5.style.top = prod4.offsetTop + prod4.offsetHeight + 'px';
prod6.style.top = prod5.offsetTop + prod5.offsetHeight + 'px';
prod7.style.top = prod6.offsetTop + prod6.offsetHeight + 'px';
prod8.style.top = prod7.offsetTop + prod7.offsetHeight + 'px';
prod9.style.top = prod8.offsetTop + prod8.offsetHeight + 'px';



prodBlock.style.height = prod9.offsetTop + prod9.offsetHeight + 'px';
console.log(prod1.offsetHeight);
