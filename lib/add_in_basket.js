let counterBasketResult = document.getElementById('counter-basket-result');

// my cart
const MY_CART = document.getElementsByClassName('carts')[0];
const spanResult = document.querySelector('.quantity');
let subtotal = document.querySelector('.sum');
const productInTheCart = document.querySelectorAll('.cart1');
const CART = document.querySelector('.my-cart');


// counter
let result = 0;
let counter = function () {
   return counterBasketResult.innerText = result;
}
counter()
// clearMyCart

let quantity = document.querySelector('.quantity');
const clearMyCart = () => {
   // console.log(counterBasketResult.innerText === '' || +counterBasketResult.innerText === 0)
   if (counterBasketResult.innerText === '' || +counterBasketResult.innerText === 0) {
      MY_CART.innerHTML = '';
      quantity.innerText = 0;
      subtotal.innerText = 0;
      // counterBasketResult.innerText = 0;

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
         // document.querySelector('.subtotal').style.cssText = 'height: 142px';
         document.querySelector('.carts').style.cssText = 'height: 232px; overflow: scroll; '
         break;
   }
}
// a basket preventDefault
// function prevDefault(){
//    const counterBasket = document.querySelector('.counter-basket');
// }

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
   // saveTasks()
   // getSaveTasks()
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

// let saveTask = document.querySelector('.save-task');
// let ul = document.getElementsByTagName('ul')[0];
// let locStr = [result, +spanResult.innerText, MY_CART, +subtotal.innerText];
const saveContentCartBasket = () => {
   // result.innerText = localStorage.getItem('result')

   let saveResult = counterBasketResult.innerText;
   let saveContentCart = CART.innerHTML;
   // console.log(typeof +saveResult)
   if (+saveResult != 0) {
      localStorage.setItem('saveResult', saveResult);
      localStorage.setItem('saveContentCart', saveContentCart);
   }

   // console.log(result, +spanResult.innerText, MY_CART
   // , +subtotal.innerText)

   // let cartInnerH = CART.innerHTML;
   // console.log(locStr)
   // let ulResult = ul.innerHTML;
   // localStorage.setItem('cartProducts', cartInnerH);
   // let newPResult = newP.innerHTML;
}
// saveTasks()
// saveTask.addEventListener('click', saveTasks);

// localStorage.clear()
const rederContentCardBasket = () => {
   counterBasketResult.innerText = localStorage.getItem('saveResult')

   let cartCont = CART.innerHTML;
   cartCont = localStorage.getItem('saveContentCart')
   // result.innerText = localStorage.getItem('result')
   // let cartInnerH = CART.innerHTML;
   // cartInnerH = localStorage.getItem('cartProducts');
   // console.log(cartInnerH);
   // console.log(result)
}
// rederContentCardBasket()
// getSaveTasks()
rederContentCardBasket()

// let clearTask = document.querySelector('.clear-task');

// let counter = localStorage.getItem('current-counter') || 0;
// let currentCounter = document.querySelector('.counter');
// // добавить +1
// const changeCouner = () => {

//     counter++;
//     currentCounter.innerHTML += `<p> Item №${counter} </p>`;
//     localStorage.setItem('current-counter', counter);
// }

// document.querySelector('.change-count').addEventListener('click', changeCouner)
// // сохранить контент
// const saveContent = () => {
//     let content = currentCounter.innerHTML;
//     localStorage.setItem('list-items', content);
// }

// document.querySelector('#save-content').addEventListener('click', saveContent);


const clearTasks = () => {
   ul.innerHTML = '';
   document.getElementsByClassName('newP')[0].innerText = `Выполнено задач: 0. Активные задачи: 0`
   localStorage.clear();
}
// clearTask.addEventListener('click', clearTasks)
