const DATA_URL = 'http://localhost:3000/goods';

const togglePreloader = () => {
    const preloader = document.querySelector('.preloader');
    document.body.classList.toggle('loaded');
}


const getData = () => {
    togglePreloader();
    fetch(DATA_URL).then(
        response => {
            return response.json();
        }
    )
        .then(
            data => {
                let list = document.querySelectorAll('.swiper-wrapper')[0];
                let list1 = document.querySelectorAll('.swiper-wrapper')[1];
                let list2 = document.querySelectorAll('.swiper-wrapper')[2];
                let list3 = document.querySelectorAll('.swiper-wrapper')[3];
                let list4 = document.querySelectorAll('.swiper-wrapper')[4];
                list.innerHTML = '';
                list1.innerHTML = '';
                list1.innerHTML = `
                    <div class="wow card-2 custome-builds-3 swiper-slide animate__animated animate__fadeInLeftBig"
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
                list2.innerHTML = `
                    <div class="wow card-2 custome-builds-4 swiper-slide animate__animated animate__fadeInLeftBig"
                    data-wow-delay=".8s">
                    <div>
                    <p>MSI</p>
                    <p>Laptops</p>
                    </div>
                    <a href="index-2.html" class="see-all">
                    See All Products
                    </a>
                    </div>

                `
                list3.innerHTML = '';
                list3.innerHTML = `
                    <div class="wow card-2 custome-builds-5 swiper-slide animate__animated animate__fadeInLeftBig"
                    data-wow-delay=".8s">
                    <div>
                        Desktops
                    </div>
                    <a href="index-2.html" class="see-all">
                        See All Products
                    </a>
                    </div>
                    `
                list4.innerHTML = '';
                list4.innerHTML = `
                    <div class="wow card-2 custome-builds-6 swiper-slide animate__animated animate__fadeInLeftBig"
                    data-wow-delay=".8s">
                    <div>
                        <p>Gaming</p>
                        <p>Monitors</p>
                    </div>
                    <a href="index-2.html" class="see-all">
                        See All Products
                    </a>
                    </div>
                    `


                for (let i in data) {
                    let descr = data[i].description;
                    const points = (data, i) => {
                        if (descr.length <= 70) {
                            return descr
                        } else {
                            return descr.substr(0, 70) + '...';
                        }
                    }

                    if (list.childElementCount < 6 && data[i].availability === 'check availability' && data[i].name === 'new products') {
                        list.innerHTML += `
                        <div class="wow card swiper-slide animate__animated animate__fadeInLeftBig" data-wow-delay=".4s">
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
                        ${points(descr)}
                        
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
                    } else if (list.childElementCount < 6 && data[i].availability === 'in stock' && data[i].name === 'new products') {
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
                                ${points(descr)}
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



                    if (list1.childElementCount < 6 && data[i].availability === 'check availability' && data[i].name === 'builds') {
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
                        ${points(descr)}
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
                    else if (list1.childElementCount < 6 && data[i].availability === 'in stock' && data[i].name === 'builds') {
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
                        ${points(descr)}
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

                    if (list2.childElementCount < 6 && data[i].availability === 'check availability' && data[i].name === 'laptops') {
                        list2.innerHTML += `<div class="wow card swiper-slide animate__animated animate__fadeInLeftBig" data-wow-delay=".4s">
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
                        ${points(descr)}
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
                    } else if (list2.childElementCount < 6 && data[i].availability === 'in stock' && data[i].name === 'laptops') {
                        list2.innerHTML += `<div class="wow card swiper-slide animate__animated animate__fadeInLeftBig"
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
                                ${points(descr)}
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
                    if (list3.childElementCount < 6 && data[i].availability === 'check availability' && data[i].name === 'desctops') {
                        list3.innerHTML += ` <div class="wow card swiper-slide animate__animated animate__fadeInLeftBig"
                        data-wow-delay=".4s">
                        <div class="item two">
                            <img src="${data[i].src_availability}">
                            <p>${data[i].availability}</p>
                        </div>
                        <a href="index-3.html"><img class="product" src="${data[i].src}"
                                alt="desctops-image-6" title="desctops-image-6">
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
                    else if (list3.childElementCount < 6 && data[i].availability === 'in stock' && data[i].name === 'desctops') {
                        list3.innerHTML += ` <div class="wow card swiper-slide animate__animated animate__fadeInLeftBig"
                        data-wow-delay=".4s">
                        <div class="item">
                            <img src="${data[i].src_availability}">
                            <p>${data[i].availability}</p>
                        </div>
                        <a href="index-3.html"><img class="product" src="${data[i].src}"
                                alt="desctops-image-6" title="desctops-image-6">
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
                    if (list4.childElementCount < 6 && data[i].availability === 'check availability' && data[i].name === 'monitors') {
                        list4.innerHTML += ` <div class="wow card swiper-slide animate__animated animate__fadeInLeftBig"
                        data-wow-delay=".4s">
                        <div class="item two">
                            <img src="${data[i].src_availability}">
                            <p>${data[i].availability}</p>
                        </div>
                        <a href="index-3.html"><img class="product" src="${data[i].src}"
                                alt="gaming-manitors-3" title="gaming-manitors-3">
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
                    else if (list4.childElementCount < 6 && data[i].availability === 'in stock' && data[i].name === 'monitors') {
                        list4.innerHTML += ` <div class="wow card swiper-slide animate__animated animate__fadeInLeftBig"
                            data-wow-delay=".4s">
                            <div class="item">
                                <img src="${data[i].src_availability}">
                                <p>${data[i].availability}</p>
                            </div>
                            <a href="index-3.html"><img class="product" src="${data[i].src}"
                                    alt="gaming-manitors-3" title="gaming-manitors-3">
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
        ).catch(err => {
            console.log(err);
        })
    setTimeout(togglePreloader, 500);

    getSwiper()
}
getData()
