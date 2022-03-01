let counterBasketResult = document.getElementById('counter-basket-result');

// my cart
const MY_CART = document.getElementsByClassName('carts')[0];
const subtotal = document.querySelector('.subtotal').firstElementChild.firstElementChild;
const productInTheCart = document.querySelectorAll('.cart1');

// counter
let result = 0;
let counter = function () {
   return counterBasketResult.innerText = result;
}
counter()

// clearMyCart
const clearMyCart = () => {
   MY_CART.innerHTML = '';
   subtotal.innerText = '$0.0'
}
clearMyCart();

// btn add
document.addEventListener('click', function (event) {
   if (event.target.closest('.price') !== null && event.target.className === 'add-to-card') {
      counterBasketResult.innerText = `${++result}`;
      event.target.className = 'none';
      ;
      console.log(event.target.parentNode.parentNode.parentNode.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerText);
      const spanResult = document.querySelector('.quantity');
      spanResult.innerText = `${result}`
      MY_CART.innerHTML += `<div class="cart1">
               <p class="cart-p">1 <span>x</span></p>
               <a href="#"><img class="cart-photo" src="${event.target.parentNode.parentNode.parentNode.firstElementChild.nextElementSibling.firstChild.src}" alt="cart-photo"></a>
               <p class="descr">${event.target.parentNode.parentNode.parentNode.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerText}</p>
               <div class="card-icon">
                  <a href="#"><img src="./images/my-cart-x.svg" alt="x"></a>
                  <a href="#"><img src="./images/my-cart-l.svg" alt="l"></a>
               </div>
         </div>
         <hr>`
      event.target.nextElementSibling.className = 'in-the-cart';
   }
})
// inTheCart
const btnInTheCart = document;
btnInTheCart.addEventListener('click', function (e) {
   if (e.target.className === 'in-the-cart') {
      // втавить нужный URL
      window.location = './index.html';
   }
})
4
// go to cart
document.addEventListener('click', function (e) {
   if (e.target.className == 'in-the-cart') {
      window.location = './index.html'
   }
})