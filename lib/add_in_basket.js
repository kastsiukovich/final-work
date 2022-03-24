// let cart = {
//    "goods": [
//      {
//        "id": 1,
//        "name": "new products",
//        "src": "./images/new-products-image-1.png",
//        "description": "Samsung Galaxy Tab A7 10.4 Wi-Fi 32GB Silver",
//        "old_cost": "700",
//        "cost": "650",
//        "quantity": "10",
//        "availability": "in stock",
//        "src_availability": "./images/group-132.svg",
//        "count": 3,
//      },
//      "goods": 
//       {
//         "id": 2,
//         "name": "new products",
//         "src": "./images/new-products-image-1.png",
//         "description": "Samsung Galaxy Tab A7 10.4 Wi-Fi 32GB Silver",
//         "old_cost": "700",
//         "cost": "650",
//         "quantity": "10",
//         "availability": "in stock",
//         "src_availability": "./images/group-132.svg",
//         "count": 3,
//       }
//    ]
// }


// // уменьтшение товара 
// // удаление товара

// document.onclick = event =>{
//    console.log(event.target.classList)
//    if(event.target.classList.contains('plus')){
//       plusFunction(event.target.dataset.id);
//    }
//    if(event.target.classList.contains('minus')){
//       minusFunction(event.target.dataset.id)
// }
// //увеличение товара
// const plusFunction = id =>{
//    cart[id]['count']++
//    renderCart();
// }
// //уменьшение товара
// const minusFunction = id =>{
//    if(cart[id]['count']-1 == 0){
//       deleteFunction(id)
//       return true;
//    }
//    cart[id]['count']--
//    renderCart();
// }
// // удаление товара
// const deleteFunction = id =>{
//    delete cart[id]
//    renderCart();
// }

// const renderCart = () =>{
//    console.log(cart)
// }
// renderCart()











let counterBasketResult = document.getElementById('counter-basket-result');
// my cart
const MY_CART = document.getElementsByClassName('carts')[0];
const spanResult = document.querySelector('.quantity');
let subtotal = document.querySelector('.sum');
const productInTheCart = document.querySelectorAll('.cart1');
const CART = document.querySelector('.my-cart');

const CART_B = document.getElementsByClassName('my-cart')[0];
const getLocalStor = JSON.parse(localStorage.getItem('saveIdProducts'));

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
// subtotal.innerText = 0;
const rendetSaveResult = () => {
   // console.log(localStorage.getItem('saveResult'))
   if (localStorage.getItem('saveResult') !== null) {
      // renderContentCardBasket()
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
   // console.log(counterBasketResult.innerText)
   return counterBasketResult.innerText = result;
}
startResult(result)


// clearMyCart 

let quantity = document.querySelector('.quantity');
const clearMyCart = () => {
   quantity.innerText = result;
   // console.log((localStorage.getItem('saveIdProducts')[1] === ']'))
   if (counterBasketResult.innerText === '0') {
      MY_CART.innerHTML = '';
      console.log('hi!')
   } else if (counterBasketResult.innerText !== '0') {
      if ((localStorage.getItem('saveIdProducts')[1] === ']')) {
         MY_CART.innerHTML = '';
         console.log('if')
      } else {
         MY_CART.innerHTML = '';
         console.log('else')
         // вставь отрисовку корзины
         // renderContentCarCart()
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


      // console.log(addToCartId.id)
      let delEl = +addToCartId.id;
      const index = idProductsInCart.indexOf(delEl);
      console.log(index)
      if (index === -1) {
         idProductsInCart.push(delEl)
      } else {
         idProductsInCart.splice(index, 1)
      }

      // idProductsInCart.
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
      // console.log(price)
      let idProduct = event.target.id;
      // console.log(idProduct)

      const index = idProductsInCart.indexOf(idProduct)
      if (index === -1) {
         idProductsInCart.push(+idProduct)
      } else {
         idProductsInCart.splice(index, 1)
      }
      // idProductsInCart.push(+idProduct);

      console.log(idProductsInCart)
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
   let saveSubtotal = subtotal.innerText;
   // console.log(saveResult)

   localStorage.setItem('saveResult', saveResult);
   localStorage.setItem('saveIdProducts', JSON.stringify(idProductsInCart));
   console.log(idProductsInCart)
   // if (localStorage.getItem('saveIdProducts') !== null) {
   //    const getArrSaveIdProducts = JSON.parse(localStorage.getItem('saveIdProducts'));
   //    getArrSaveIdProducts.forEach((item, index) => {
   //       idProductsInCart.forEach(i => {
   //          if (item === i) {
   //             // idProductsInCart.splice((i, 0, item) => {
   //             console.log(item, index)
   //          }
   //       })
   //       console.log(idProductsInCart)

   //    }
   //    )
   // }
   localStorage.setItem('saveSubtotal', saveSubtotal)
}
// console.log(idProductsInCart.forEach(i => console.log(i)))
// localStorage.clear()


const renderContentCart = () => {

   // let priceFin = 0;

   getLocalStor.forEach(id => {
      // let el = document.getElementById(`${id}`).nextElementSibling;
      // el.className = 'in-the-cart';
      // el.className = 'block';
      // el.style.cssText = 'display: block';

      // let idE2 = document.querySelector(`#${id}`);
      let idEl = document.getElementById(`${id}`);
      let price = idEl.previousElementSibling
      // priceFin = price;
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
   })
   heightMyCart()

}
renderContentCart()
// renderContentCardBasket()
// document.addEventListener("load", renderContentCarCart);
// window.onload
// heightMyCart();
















// // const saveContentCartBasket = () => {
// //    let saveResult = counterBasketResult.innerText;
// //    let saveContentCart = CART_B.innerHTML;

// //    // console.log(saveContentCart)
// //    localStorage.setItem('saveResult', saveResult);
// //    localStorage.setItem('saveContentCart', saveContentCart);
// //    // localStorage.setItem('subtotal', subtotal.innerText)
// //    // localStorage.setItem('quantity', quantity)
// //    // }
// // }

// // // localStorage.clear()

// // const renderContentCardBasket = () => {
// //    counterBasketResult.innerText = localStorage.getItem('saveResult')
// //    // console.log(localStorage.getItem('saveResult'))

// //    let cartCont = CART_B.innerHTML;
// //    cartCont = localStorage.getItem('saveContentCart')

// //    // subtotal.innerText = localStorage.getItem('subtotal');
// //    // console.log(subtotal.innerText)

// // }
// // renderContentCardBasket()

