
let btnAddToCard = document.getElementsByClassName('add-to-card');
const counterBasketResult = document.getElementById('counter-basket-result');

// counter
function conter(){
   counterBasketResult.innerHTML = '0';
   counterBasketResult.style.cssText = 'background-color: #0156ff; padding: 5px 7px; border-radius: 15px; color: white; font-size: 10px; position: absolute; top: 24px; right: 62px'

}''
conter()
document.addEventListener('click', function (event) {
   console.log(event.target.closest('.price'))
   if (event.target.closest('.price') !== null) {
      // event.target.style.color = "red"
      

   }
})