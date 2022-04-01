

const displayUser = () => {
   if (usNam.innerText === '') {
      usNam.innerText = 'log in'
   }

   if (localStorage.getItem('cur-user')) {
      let getLS = localStorage.getItem('cur-user');

      usNam.innerText = getLS;
      usNam.style.cssText = 'cursor: pointer'
   }
}

displayUser()

usNam.addEventListener('click', () => {
   usNam.innerHTML = `<button type="button" class="btn btn-primary go-out" >
   Go out
 </button>`
})

const btnGoOut = document.getElementsByClassName('go-out')[0];

btnGoOut.addEventListener('click', (e) => {
   console.log(e.target)
   usNam.innerText = '';
   console.log(usNam.innerText);
   localStorage.setItem('cur-user', usNam.innerText);
   console.log(localStorage.getItem('cur-user'))
})
