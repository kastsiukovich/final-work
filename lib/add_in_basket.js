let counterBasketResult = document.getElementById('counter-basket-result');
// my cart
const MY_CART = document.getElementsByClassName('carts')[0];
const spanResult = document.querySelector('.quantity');
let subtotal = document.querySelector('.sum');
const productInTheCart = document.querySelectorAll('.cart1');
const CART = document.querySelector('.my-cart');

const CART_B = document.getElementsByClassName('my-cart')[0];


const saveJson = () => {
   let saveResult = counterBasketResult.innerText;
   let saveContentCart = CART_B.innerHTML;


   localStorage.setItem('saveResult', saveResult);
   localStorage.setItem('saveContentCart', saveContentCart);
  
}



const renderJson = () => {
   counterBasketResult.innerText = localStorage.getItem('saveResult')
   // console.log(localStorage.getItem('saveResult'))

   let cartCont = CART_B.innerHTML;
   cartCont = localStorage.getItem('saveContentCart')

}
// renderContentCardBasket()











// counter
let result = 0;

let counter = function () {
   return counterBasketResult.innerText = result;

}
counter()

// clearMyCart 

let quantity = document.querySelector('.quantity');
const clearMyCart = () => {
   quantity.innerText = 0;
   subtotal.innerText = 0;
   if (counterBasketResult.innerText === '0') {
      MY_CART.innerHTML = '';
   }
   heightMyCart();
}
clearMyCart();

// autoHeightMyCart
function heightMyCart() {
   switch (true) {
      case document.querySelector('.carts').childNodes.length === 0 || document.querySelector('.carts').childNodes.length <= 3:
         CART.style.cssText = 'height: 300px';
         document.querySelector('.carts').style.cssText = 'height: auto; '
         break;
      case document.querySelector('.carts').childNodes.length <= 5:
         CART.style.cssText = 'height: 405px';
         document.querySelector('.carts').style.cssText = 'height: auto; '
         break;
      case document.querySelector('.carts').childNodes.length <= 7:
         CART.style.cssText = 'height: 545px';
         document.querySelector('.carts').style.cssText = 'height: 232px; overflow: scroll; '
         break;
   }
}


// subtotal
function subtotalСalculation(event) {
   subtotal.innerText = `${Number(subtotal.innerText) + Number(event.target.closest('.price').firstElementChild.innerText)}`;
}

// console.log(document.querySelector('.in-the-cart'));
function subtotalDelete(e) {
   if (e.target.closest('.card-icon') !== null) {
      let addToCartId = document.getElementById(`${e.target.parentNode.parentNode.previousElementSibling.dataset.card}`);
      addToCartId.nextElementSibling.classList.remove('in-the-cart');
      addToCartId.nextElementSibling.classList.add('none');
      addToCartId.classList.remove('none');
      addToCartId.classList.add('add-to-card');
      let getPrice = document.querySelector('#price').innerText;
      e.target.closest('.cart1').nextElementSibling.remove();
      e.target.closest('.cart1').remove('.cart1');
      spanResult.innerText = --spanResult.innerText;
      --counterBasketResult.innerText;
      result = counterBasketResult.innerText;
      subtotal.innerText = subtotal.innerText - +getPrice;
      heightMyCart();
   }
   // saveTasks()
   saveContentCartBasket()
}

// delete a card from the trash
MY_CART.addEventListener('click', subtotalDelete);
// btn add
document.addEventListener('click', function (event) {

   // console.log(event.target.dataset.card);
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
                     <p data-card="${event.target.dataset.card}" class="price-x"  style="display: none"></p>
                    
                     <div class="card-icon">
                        <p><img src="./images/my-cart-x.svg" alt="x"></p>
                        <p><img src="./images/my-cart-l.svg" alt="l"></p>
                     </div>
                     </div>
                     <hr>`

      subtotalСalculation(event);

      event.target.nextElementSibling.className = 'in-the-cart';
   }
   heightMyCart();
   saveContentCartBasket()
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


// localStorage

const saveContentCartBasket = () => {
   let saveResult = counterBasketResult.innerText;
   let saveContentCart = CART_B.innerHTML;

   // console.log(saveContentCart)
   localStorage.setItem('saveResult', saveResult);
   localStorage.setItem('saveContentCart', saveContentCart);
   // localStorage.setItem('subtotal', subtotal.innerText)
   // localStorage.setItem('quantity', quantity)
   // }
}

// localStorage.clear()

const renderContentCardBasket = () => {
   counterBasketResult.innerText = localStorage.getItem('saveResult')
   // console.log(localStorage.getItem('saveResult'))

   let cartCont = CART_B.innerHTML;
   cartCont = localStorage.getItem('saveContentCart')

   // subtotal.innerText = localStorage.getItem('subtotal');
   // console.log(subtotal.innerText)

}
renderContentCardBasket()

