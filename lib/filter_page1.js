
// const cotalog = document.querySelector('.cotalog');
const input = document.forms[0].children[0];
const btnSearch = document.forms[0].children[1];



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
                  console.log(item, index)
                  let firstCont = document.querySelector('.swiper-wrapper');

                  let thereCont = document.querySelectorAll('.swiper-wrapper')[1]

                  let fourCont = document.querySelectorAll('.swiper-wrapper')[2];

                  const fiveCont = document.querySelectorAll('.swiper-wrapper')[3];

                  const sixCont = document.querySelectorAll('.swiper-wrapper')[4];

                  if (item.description.toLowerCase().includes(input.value.toLowerCase()) && input.value.trim() != '') {
                     firstCont.children[index].style.display = 'block';
                  }
                  else if (firstCont.children[index].style.display = 'block' && !item.description.toLowerCase().includes(input.value.toLowerCase())) {

                     firstCont.children[index].style.display = 'none';

                  }
                  else if (input.value.trim() === '') {
                     firstCont.children[index].style.display = 'block';
                  }
                  if (item.description.toLowerCase().includes(input.value.toLowerCase()) && input.value.trim() != '') {
                     thereCont.children[index].style.display = 'block';
                  }
                  else if (thereCont.children[index].style.display = 'block' && !item.description.toLowerCase().includes(input.value.toLowerCase())) {
                     thereCont.children[index].style.display = 'none';
                  }
                  else if (input.value.trim() === '') {
                     thereCont.children[index].style.display = 'block';
                  }
                  if (item.description.toLowerCase().includes(input.value.toLowerCase()) && input.value.trim() != '') {
                     fourCont.children[index].style.display = 'block';
                  }
                  else if (fourCont.children[index].style.display = 'block' && !item.description.toLowerCase().includes(input.value.toLowerCase())) {
                     fourCont.children[index].style.display = 'none';
                  }
                  else if (input.value.trim() === '') {
                     fourCont.children[index].style.display = 'block';
                  }
                  if (item.description.toLowerCase().includes(input.value.toLowerCase()) && input.value.trim() != '') {
                     fiveCont.children[index].style.display = 'block';
                  }
                  else if (fiveCont.children[index].style.display = 'block' && !item.description.toLowerCase().includes(input.value.toLowerCase())) {
                     fiveCont.children[index].style.display = 'none';
                  }
                  else if (input.value.trim() === '') {
                     fiveCont.children[index].style.display = 'block';
                  }
                  if (item.description.toLowerCase().includes(input.value.toLowerCase()) && input.value.trim() != '') {
                     sixCont.children[index].style.display = 'block';
                  }
                  else if (sixCont.children[index].style.display = 'block' && !item.description.toLowerCase().includes(input.value.toLowerCase())) {
                     sixCont.children[index].style.display = 'none';
                  }
                  else if (input.value.trim() === '') {
                     sixCont.children[index].style.display = 'block';
                  }
               })

            })
         }
      )
   setTimeout(togglePreloader(), 500)
}
getData3()
