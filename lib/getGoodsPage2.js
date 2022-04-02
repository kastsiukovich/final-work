
const DATA_URL = 'http://localhost:3000/goods';

const togglePreloader = () => {
   document.body.classList.toggle('loaded');
}

const arrPage2 = [];

const getData2 = () => {
   togglePreloader();
   fetch(DATA_URL).then(
      response => {
         console.log(response);
         return response.json();
      }
   )
      .then(

         data => {
            const CONTENT = document.querySelector('.content');
            const SEARCH_RESULT = document.querySelector('.search-results');
            CONTENT.innerHTML = `
               <div class="search-results">

               <a class="button one" href="index.html">
               <div><span>CUSTOM PCS</span> (24)</div>
               <img src="./images/catalog-content-search-results.svg" alt="search-results">
               </a>
               <a class="button" href="index.html">
               <div><span>HP/COMPAQ PCS</span> (24)</div>
               <img src="./images/catalog-content-search-results.svg" alt="search-results">
               </a>
               <a class="button clear-center" href="index.html"><span>Clear All</span></a>
               </div>
            `;
            data.forEach(item => {
               let descr = item.description;
               const points = (data, i) => {
                  if (descr.length <= 70) {
                     return descr
                  } else {
                     return descr.substr(0, 70) + '...';
                  }
               }


               arrPage2.push(item.id)
               if (document.querySelector('.content').children.length <= 20) {
                  CONTENT.innerHTML += `
                  <div class="wow card animate__animated animate__slideInUp" data-wow-delay="0s">
                       <div class=" item">
                       <img src="${item.src_availability}">
                       <p>${item.availability}</p>
                   </div>
                   <a href="index-3.html"><img class="product" src="${item.src}" alt="catalog-img-1"
                           title="catalog-img-1">
                   </a>
                   <a class="stars-reviews" href="index-3.html">
                       <ul class="stars">
                           <li><img class="star" src="./images/star-8.svg" alt="star-8">
                           </li>
                           <li><img class="star" src="./images/star-8.svg" alt="star-8">
                           </li>
                           <li><img class="star" src="./images/star-8.svg" alt="star-8">
                           </li>
                           <li><img class="star" src="./images/star-8.svg" alt="star-8">
                           </li>
                           <li><img class="star" src="./images/star-10.svg" alt="star-10">
                           </li>
                       </ul>
                       <p>Reviews (4)</p>
                   </a>
                   <h4>
                   ${points(descr)}
                   </h4>
                   <div class="price-p">
                       <p class="price-crossed-out">
                           $<span> ${item.old_cost}</span>
                       </p>
                       <p class="price">
                           $<span>${item.cost}</span>
                           <button id="${item.id}" data-card="${item.id}" type="button" class="add-to-card">Add to cart</button>
                           <button name="in-the-cart" type="button" class="none">In the cart</button>
                       </p>
                   </div>
                  </div>
                  `
               }
            })


            CONTENT.innerHTML += `
            <div class="pages">
                    <a class="shadow" href="#"><img src="./images/catalog-content-pages-left.svg" title="" alt=""></a>
                    <a href="#">1</a>
                    <a class="activ" href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">...</a>
                    <a href="#">15</a>
                    <a class="shadow" href="#"><img src="./images/catalog-content-pages-right.svg"
                            title="content-pages-right" alt="content-pages-right"></a>
                </div>

                <p class="information information-gradient">
                    MSI has unveiled the Prestige Series line of business-class and gaming notebooks. Tuned for color
                    accuracy, the Prestige Series also leverages True Color Technology, which allows users to adjust the
                    display profile to best fit their computing needs.<br><br>

                    There are six different screen profiles, which are tuned for gaming, reducing eye fatigue, sRGB
                    color accuracy, increasing clarity for words and lines, reducing harmful blue light, and optimizing
                    contrast for watching movies.
                    Given the various display profiles and discrete graphics chip, the Prestige Series notebooks can be
                    used for various design work as well as for office tasks given that the screen can be adjusted for
                    better clarity, color accuracy, or for eye strain reduction. Users working with video or 3D
                    rendering will appreciate the "movie mode" for which contrast is increased.<br><br>

                    Home users or students can benefit from the "anti-blue" and the "office mode" options, both of which
                    are designed to reduce eye strain. This is helpful when working on the computer for extended periods
                    of time. Additionally, in their down time, students can also use the "gamer mode" to increase the
                    screen brightness.
                </p>
                <div class="button-more">
                <a class="button-more" href="index-3.html">More</a>
               </div>

            `
         }

      ).catch(err => {
         console.log(err);
      })
   setTimeout(togglePreloader, 500);
   renderContentCart()
   getSwiper()
}
getData2()


