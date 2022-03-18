const DATA_URL = 'http://localhost:3000/goods';
const getData = () => {
   fetch(DATA_URL).then(
      response => {
         console.log(response);
         return response.json();
      }
   )
      .then(
         data => {
            console.log(data)
            let list = document.querySelectorAll('.swiper-wrapper')[0];
            let list1 = document.querySelectorAll('.swiper-wrapper')[1];
            let list2 = document.querySelectorAll('.swiper-wrapper')[2];
            let list3 = document.querySelectorAll('.swiper-wrapper')[3];
            let list4 = document.querySelectorAll('.swiper-wrapper')[4];
            list.innerHTML = '';
            list1.innerHTML = '';
            list1.innerHTML = `<div class="wow card-2 custome-builds-3 swiper-slide animate__animated animate__fadeInLeftBig"
            data-wow-delay=".8s">
            <div>
                <p>Custome</p>
                <p>Builds</p>
            </div>
            <a href="index-2.html" class="see-all">
                See All Products
            </a>

        </div>`
            list2.innerHTML = '';
            list3.innerHTML = '';
            list4.innerHTML = '';

            for (let i in data){
                
               if(list.childElementCount<6 && data[i].availability ==='check availability' && data[i].name === 'new products'){
                list.innerHTML += `<div class="wow card swiper-slide animate__animated animate__fadeInLeftBig" data-wow-delay=".4s">
                <div class="item two">
                    <img src="${data[i].src_availability}">
                    <p>${data[i].availability}</p>
                </div>
                <a href="index-3.html"><img class="product" src="${data[i].src}"
                        alt="new-products-image-2" title="new-products-image-2">
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
                ${data[i].description}
                </h4>
                <div class="price-p">
                    <p class="price-crossed-out">
                        $<span>${data[i].old_cost}</span>
                    </p>
                    <p class="price">
                        $<span>${data[i].cost}</span>
                        <button id="${data[i].id}" data-card="${data[i].id}" type="button" class="add-to-card">Add to cart</button>
                        <button name="in-the-cart" type="button" class="none">In the cart</button>
                    </p>
                    </div>
                     </div>`
                } else if(document.querySelectorAll('.swiper-wrapper')[0].childElementCount<6 && data[i].availability === 'in stock' && data[i].name === 'new products'){
                    list.innerHTML += `<div class="wow card swiper-slide animate__animated animate__fadeInLeftBig"
                    data-wow-delay=".8s">
                    <div class="item"> 
                        <img src="${data[i].src_availability}" alt="group-132">
                        <p>${data[i].availability}</p>
                    </div>
                    <a href="index-3.html"><img class="product" src="${data[i].src}"
                            alt="new-products-image-1" title="new-products-image-1">
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
                        ${data[i].description}
                    </h4>
                    <div class="price-p">
                        <p class="price-crossed-out">
                            $<span>${data[i].old_cost}</span>
                        </p>
                        <p class="price">
                            $<span>${data[i].cost}</span>
                            <button id="${data[i].id}" data-card="${data[i].id}" type="button" class="add-to-card">Add to cart</button>
                            <button name="in-the-cart" type="button" class="none">In the cart</button>
                        </p>
                    </div>
                </div>`
            }
            
            // "name": "builds",
            console.log(data[i].id)
            
            if(list1.childElementCount<6 && data[i].availability ==='check availability' && data[i].name === 'builds'){
                list1.innerHTML += ` <div class="wow card swiper-slide animate__animated animate__fadeInLeftBig"
                data-wow-delay=".4s">
                <div class="item two">
                    <img src="${data[i].src_availability}">
                    <p>${data[i].availability}</p>
                </div>
                <a href="index-3.html"><img class="product" src="${data[i].src}"
                        alt="custome-builds-2" title="custome-builds-2">
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
                ${data[i].description}
                </h4>
                <div class="price-p">
                    <p class="price-crossed-out">
                        $<span>${data[i].old_cost}</span>
                    </p>
                    <p class="price">
                        $<span>${data[i].cost}</span>
                        <button id="${data[i].id}" data-card="${data[i].id}" type="button" class="add-to-card">Add to cart</button>
                        <button name="in-the-cart" type="button" class="none">In the cart</button>
                    </p>
                </div>
            </div>`
            }
            else if(list1.childElementCount<6 && data[i].availability ==='in stock' && data[i].name === 'builds'){
                list1.innerHTML += ` <div class="wow card swiper-slide animate__animated animate__fadeInLeftBig"
                data-wow-delay=".4s">
                <div class="item">
                    <img src="${data[i].src_availability}">
                    <p>${data[i].availability}</p>
                </div>
                <a href="index-3.html"><img class="product" src="${data[i].src}"
                        alt="custome-builds-2" title="custome-builds-2">
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
                ${data[i].description}
                </h4>
                <div class="price-p">
                    <p class="price-crossed-out">
                        $<span>${data[i].old_cost}</span>
                    </p>
                    <p class="price">
                        $<span>${data[i].cost}</span>
                        <button id="${data[i].id}" data-card="${data[i].id}" type="button" class="add-to-card">Add to cart</button>
                        <button name="in-the-cart" type="button" class="none">In the cart</button>
                    </p>
                </div>
            </div>`
            }
            }
         }
      )
}
getData()

const togglePreloader = () => {
   document.body.classList.toggle('loaded');
}


// window.onload = function () {
//    // document.body.classList.add('loaded_hiding');
//    window.setTimeout(function () {
//      document.body.classList.toggle('loaded'); 
//    //   document.body.classList.remove('loaded_hiding');
//    }, 500);
//  }
 
//  togglePreloader()
//  togglePreloader()  


// const getGoods = async (url) => {
//    try {
//       const res = await fetch(url)
//       return res.json();
//    } catch (err) {
//       throw new Error(`!!!!!!!!! ${err} !!!!!!!!!!!!`)
//    }
// }
// const getGoodsInfo = () => {
//    const result = await getGoods(`${URL}`)
//    console.log(result)
//    return result
// }
// getGoodsInfo()