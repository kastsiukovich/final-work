let counterBasketResult = document.getElementById('counter-basket-result');
// my cart
const MY_CART = document.getElementsByClassName('carts')[0];
const spanResult = document.querySelector('.quantity');
let subtotal = document.querySelector('.sum');
const productInTheCart = document.querySelectorAll('.cart1');

// counter
let result = 0;
let counter = function () {
   return counterBasketResult.innerText = result;
}
counter()
// clearMyCart
let quantity = document.querySelector('.quantity');
const clearMyCart = () => {
   MY_CART.innerHTML = '';
   quantity.innerText = 0;
   subtotal.innerText = 0;
   const CART = document.querySelector('.my-cart');
   if(document.querySelector('.carts').childNodes.length <= 3){
      CART.style.cssText = 'height: 300px'
   }
}
clearMyCart();
// subtotal
function subtotalСalculation(event) {
   subtotal.innerText = `${Number(subtotal.innerText) + Number(event.target.closest('.price').firstElementChild.innerText)}`;
}
function subtotalDelete(e) {
   if (e.target.closest('.card-icon') !== null) {
      let getPrice = document.querySelector('#price').innerText;
      e.target.closest('.cart1').remove('.cart1');
      e.target.closest('.cart1').nextElementSibling
      spanResult.innerText = --spanResult.innerText;
      --counterBasketResult.innerText;
      result = counterBasketResult.innerText;
      subtotal.innerText = subtotal.innerText - +getPrice;
   }
}

// delete a card from the trash
MY_CART.addEventListener('click', subtotalDelete)
// btn add
document.addEventListener('click', function (event) {
   if (event.target.closest('.price') !== null && event.target.className === 'add-to-card') {
      counterBasketResult.innerText = `${++result}`;
      event.target.className = 'none';
      ;
      let price = event.target.closest('.price').firstElementChild.innerText;
      spanResult.innerText = `${result}`
      MY_CART.innerHTML += `<div class="cart1">
                     <div class="cart1-add">
                     <p class="cart-p">1 <span>x</span></p>
                     
               </div>
               <a href="#"><img class="cart-photo" src="${event.target.parentNode.parentNode.parentNode.firstElementChild.nextElementSibling.firstChild.src}" alt="cart-photo"></a>
               <p class="descr">${event.target.parentNode.parentNode.parentNode.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerText}</p>
               <p id="price" style="display: none">${price}</p>
               <div class="card-icon">
                  <p><img src="./images/my-cart-x.svg" alt="x"></p>
                  <p><img src="./images/my-cart-l.svg" alt="l"></p>
               </div>
               </div>
               <hr>`
      subtotalСalculation(event);
      event.target.nextElementSibling.className = 'in-the-cart';
      const CART = document.querySelector('.my-cart')
      if(document.querySelector('.carts').childNodes.length <= 3){
         CART.style.cssText = 'height: 300px';
      }else if(document.querySelector('.carts').childNodes.length <= 5){
         CART.style.cssText = 'height: 500px';
      }
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

// go to cart
document.addEventListener('click', function (e) {
   if (e.target.className == 'in-the-cart') {
      window.location = './index.html'
   }
})
