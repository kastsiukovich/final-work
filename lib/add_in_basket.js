
let counterBasketResult = document.getElementById('counter-basket-result');
// my cart
const MY_CART = document.getElementsByClassName('carts')[0];
const spanResult = document.querySelector('.quantity');
let subtotal = document.querySelector('.sum');
const productInTheCart = document.querySelectorAll('.cart1');
const CART = document.querySelector('.my-cart');

const CART_B = document.getElementsByClassName('my-cart')[0];
const getLocalStor = JSON.parse(localStorage.getItem('saveIdProducts'));


// const togglePreloader = () => {
//    const preloader = document.querySelector('.preloader');
//    document.body.classList.toggle('loaded');
// }

let idProductsInCart = [];

const renderIdProductsInCart = () => {
   if (localStorage.getItem('saveIdProducts') === null || localStorage.getItem('saveIdProducts')[1] === ']') {
      return idProductsInCart;
   } else {
      return idProductsInCart = getLocalStor;
   }

}
renderIdProductsInCart()

//  counter
let result = 0;

const rendetSaveResult = () => {
   if (localStorage.getItem('saveResult') !== null) {
      return result = localStorage.getItem('saveResult')
   }
   else {
      return result
   }

}
rendetSaveResult()

const rendetSubtotal = () => {
   if (localStorage.getItem('saveSubtotal') !== null) {
      return subtotal.innerText = localStorage.getItem('saveSubtotal')
   } else {
      return subtotal.innerText = 0;
   }
}
rendetSubtotal()



let startResult = () => {
   return counterBasketResult.innerText = result;
}
startResult(result)


// clearMyCart 

let quantity = document.querySelector('.quantity');
const clearMyCart = () => {
   quantity.innerText = result;
   if (counterBasketResult.innerText === '0') {
      MY_CART.innerHTML = '';
   } else if (counterBasketResult.innerText !== '0') {
      if ((localStorage.getItem('saveIdProducts')[1] === ']')) {
         MY_CART.innerHTML = '';
      } else {
         MY_CART.innerHTML = '';
      }
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

function subtotalDelete(e) {
   if (e.target.closest('.card-icon') !== null) {
      let getPrice = e.target.parentNode.parentNode.previousElementSibling.previousElementSibling.innerText;
      e.target.closest('.cart1').nextElementSibling.remove();
      e.target.closest('.cart1').remove('.cart1');

      let addToCartId = document.getElementById(`${e.target.parentNode.parentNode.previousElementSibling.previousElementSibling.id}`);

      addToCartId.nextElementSibling.classList.remove('in-the-cart');
      addToCartId.nextElementSibling.classList.add('none');
      addToCartId.classList.remove('none');
      addToCartId.classList.add('add-to-card');

      spanResult.innerText = --spanResult.innerText;
      --counterBasketResult.innerText;
      result = counterBasketResult.innerText;
      subtotal.innerText = subtotal.innerText - +getPrice;
      heightMyCart();
      let delEl = +addToCartId.id;
      const index = idProductsInCart.indexOf(delEl);
      if (index === -1) {
         idProductsInCart.push(delEl)
      } else {
         idProductsInCart.splice(index, 1)
      }
   }
   saveContentCartBasket()
}

// delete a card from the trash
MY_CART.addEventListener('click', subtotalDelete);
// btn add
document.addEventListener('click', function (event) {
   if (event.target.closest('.price') !== null && event.target.className === 'add-to-card') {
      counterBasketResult.innerText = `${++result}`;
      event.target.className = 'none';
      ;
      let price = event.target.closest('.price').firstElementChild.innerText;

      let idProduct = event.target.id;
      const index = idProductsInCart.indexOf(idProduct)
      if (index === -1) {
         idProductsInCart.push(+idProduct)
      } else {
         idProductsInCart.splice(index, 1)
      }

      spanResult.innerText = `${result}`

      MY_CART.innerHTML += `<div class="cart1">
                     <div class="cart1-add">
                     <p class="cart-p">1 <span>x</span></p>
                     </div>
                     <a href="#"><img class="cart-photo" src="${event.target.parentNode.parentNode.parentNode.firstElementChild.nextElementSibling.firstChild.src}" alt="cart-photo"></a>
                     <p class="descr">${event.target.parentNode.parentNode.parentNode.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerText}</p>
                     <p id="${idProduct}" style="display: none">${price}</p>
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
   let saveSubtotal = subtotal.innerText;

   localStorage.setItem('saveResult', saveResult);
   localStorage.setItem('saveIdProducts', JSON.stringify(idProductsInCart));

   localStorage.setItem('saveSubtotal', saveSubtotal)
}

// localStorage.clear()

// df!!!!!!!!!!!!!!!!!!
const displayBtn = () => {

   idProductsInCart.forEach(id => {
      let el1 = document.getElementById(`${id}`);
      let el2 = document.getElementById(`${id}`).nextElementSibling;
      el1.className = 'none';
      el2.className = 'in-the-cart';
   })
}
displayBtn()

const renderContentCart = async () => {
   // setTimeout(togglePreloader, 0);
   getLocalStor.forEach(id => {
      let idEl = document.getElementById(`${id}`);
      let price = idEl.previousElementSibling
      MY_CART.innerHTML += `
         <div class="cart1">
         <div class="cart1-add">
         <p class="cart-p">1 <span>x</span></p>
         </div>
         <a href="#"><img class="cart-photo" src="${price.parentElement.parentElement.parentElement.children[1].childNodes[0].src}" alt="cart-photo"></a>
         <p class="descr">${price.parentElement.parentElement.previousElementSibling.innerText}</p>
         <p id="${id}" style="display: none">${price.parentElement.firstElementChild.innerText}</p>
         <p data-card="${id}" class="price-x"  style="display: none"></p>
      
         <div class="card-icon">
            <p><img src="./images/my-cart-x.svg" alt="x"></p>
            <p><img src="./images/my-cart-l.svg" alt="l"></p>
         </div>
         </div>
         <hr>`
      MY_CART.style.cssText = 'height: 232px; overflow: scroll;';
      CART.style.cssText = 'height: 545px;'
   })
   heightMyCart()
   // setTimeout(togglePreloader, 0);
}
renderContentCart()
heightMyCart()





