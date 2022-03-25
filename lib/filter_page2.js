
const cotalog = document.querySelector('.cotalog');
const input = document.forms[0].children[0];
const btnSearch = document.forms[0].children[1];


// cotalog
const DATA_URL = 'http://localhost:3000/goods';

const togglePreloader = () => {
   document.body.classList.toggle('loaded');
}

const getData3 = () => {
   togglePreloader();
   fetch(DATA_URL).then(
      response => {
         return response.json();
      }
   )
      .then(
         data => {
            data.forEach((item, index) => {
               input.addEventListener('input', function (e) {
                  if (item.description.toLowerCase().includes(input.value.toLowerCase()) && input.value.trim() != '') {
                     cotalog.children[1].children[index + 1].style.display = 'block';
                  }
                  else if (cotalog.children[1].children[index + 1].style.display = 'block' && !item.description.toLowerCase().includes(input.value.toLowerCase())) {
                     cotalog.children[1].children[index + 1].style.display = 'none';
                  }
                  else if (input.value.trim() === '') {
                     cotalog.children[1].children[index + 1].style.display = 'block';
                  }
               })

            })
         }
      )
   setTimeout(togglePreloader(),500)
}
getData3()
