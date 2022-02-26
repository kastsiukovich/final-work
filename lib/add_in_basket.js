
let btnAddToCard = document.getElementsByClassName('add-to-card');
let counterBasketResult = document.getElementById('counter-basket-result');

// counter
let result = 0;
let counter = function () {
   return counterBasketResult.innerText = result;
}
counter()
// btn add
document.addEventListener('click', function (event) {
   if (event.target.closest('.price') !== null && event.target.className === 'add-to-card') {
      counterBasketResult.innerText = `${++result}`;
      event.target.className = 'none';
      event.target.nextElementSibling.className = 'in-the-cart';
   }
})

let btnInTheCart = document.querySelectorAll('.in-the-cart')[0];
btnInTheCart.addEventListener('click', function (e) {
   console.log(e.target.classList)
   // if (e.target.className === 'in-the-cart') {
   //    window.location = './index.html';
   // }
})


