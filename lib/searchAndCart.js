var burger = document.querySelector('.burger-menu');
var menuList = document.querySelector('.menu');
var closeBtn = document.querySelector('#close');
//описываем функционал
burger.onclick = function () {
    menuList.classList.add('show');
}
closeBtn.onclick = function () {
    menuList.classList.remove('show');
}
// Search
var openSearch = document.querySelector('.gg-search');
var mySearch = document.querySelector('.my-search');
var closeX = document.querySelector('#x');
var topCenter = document.querySelector('.top-2-center');

openSearch.onclick = function () {
    mySearch.classList.add("show");
    openSearch.classList.add('hide');
    topCenter.classList.add('hide');

}
closeX.onclick = function () {
    mySearch.classList.remove('show');
    openSearch.classList.remove('hide');
    topCenter.classList.remove('hide');

}

var openTime = document.querySelector('.time');
var myTime = document.querySelector('.time-open');

openTime.onclick = function () {
    myTime.classList.toggle('show');

}

//Cart
var openCart = document.querySelector('.group');
var myCart = document.querySelector('.my-cart');

openCart.onclick = function () {
    myCart.classList.toggle('show');
    
}

