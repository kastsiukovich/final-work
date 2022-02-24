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

// ............................................page register
// register
// email
let customerEmailInput = document.getElementById('text');
let customerEmailSpan = document.getElementsByClassName('span-email')[0];

customerEmailInput.addEventListener('input', function () {
    if (customerEmailInput.value.length <= 5 || customerEmailInput.value.includes('#') || customerEmailInput.value.includes('!') || customerEmailInput.value.includes('&') || customerEmailInput.value.includes('?') || customerEmailInput.value.includes(',') || !customerEmailInput.value.includes('@')) {
        customerEmailInput.style.border = '1px solid red';
        customerEmailSpan.innerHTML = 'The email address must not contain: #, !, ?, ",", & and must contain: @. The length of the email must be more than 5 characters';
        customerEmailSpan.style.cssText = 'color: red; font-size: 12px';
    } else if (!customerEmailInput.value.includes('@') || customerEmailInput.value.includes('#') || customerEmailInput.value.includes('!') || customerEmailInput.value.includes('&') || customerEmailInput.value.includes('?') || customerEmailInput.value.includes(',')) {
        customerEmailInput.style.border = '1px solid red';
        customerEmailSpan.innerHTML = 'The email address must not contain: #, !, ?, ",", & and must contain: @. The length of the email must be more than 5 characters';
        customerEmailSpan.style.cssText = 'color: red; font-size: 12px';
    }
    else if (customerEmailInput.value.length > 5 || customerEmailInput.value.includes('@') || !customerEmailInput.value.includes('#') || !customerEmailInput.value.includes('!') || !customerEmailInput.value.includes('&') || !customerEmailInput.value.includes('?') || !customerEmailInput.value.includes(',')) {
        customerEmailInput.style.border = 'none';
        customerEmailSpan.style.display = 'none';
    }
})
function checkedLoginInput() {
    if (customerEmailInput.value.trim() === '') {
        customerEmailInput.classList.add('invalid');
        customerEmailSpan.innerHTML = 'You have not entered the data';
        customerEmailSpan.style.cssText = 'color: red; font-size: 12px';

    } else if (customerEmailInput.value.length <= 5 || customerEmailInput.value.includes('#') || customerEmailInput.value.includes('!') || customerEmailInput.value.includes('&') || customerEmailInput.value.includes('?') || customerEmailInput.value.includes(',') || !customerEmailInput.value.includes('@')) {
        customerEmailInput.classList.add('invalid');
        customerEmailSpan.innerHTML = 'The email address must not contain: #, !, ?, ",", & and must contain: @. The length of the email must be more than 5 characters';
    } else if (customerEmailInput.value.length > 5 || !customerEmailInput.value.includes('#') || !customerEmailInput.value.includes('!') || !customerEmailInput.value.includes('&') || !customerEmailInput.value.includes('?') || !customerEmailInput.value.includes(',') || customerEmailInput.value.includes('@')) {
        customerEmailInput.classList.remove('invalid');
        customerEmailSpan.innerHTML = ''
    }
}
customerEmailInput.addEventListener('blur', checkedLoginInput);


// password
let customerPasswordlInput = document.getElementById('psw');
let customerPasswordSpan = document.getElementsByClassName('span-password')[0];

customerPasswordlInput.addEventListener('input', function () {
    if (customerPasswordlInput.value.length <= 4) {
        customerPasswordlInput.style.border = '1px solid red';
        customerPasswordSpan.innerHTML = 'The password must consist of at least 5 characters';
        customerPasswordSpan.style.cssText = 'color: red; font-size: 12px';
    } else if (customerPasswordlInput.value.length > 4) {
        customerPasswordlInput.style.border = 'none';
        customerPasswordSpan.style.display = 'none';

    }
})
function checkedCustomerInput2() {
    if (customerPasswordlInput.value.trim() === '' && customerPasswordlInput.value.length <= 4) {
        customerPasswordlInput.classList.add('invalid');
        customerPasswordSpan.innerHTML = "You didn't enter your password";
        customerPasswordSpan.style.cssText = 'color: red; font-size: 12px';

    } else if (!customerPasswordlInput.value.trim() === '' && customerPasswordlInput.value.length >= 4) {
        customerPasswordlInput.classList.remove('invalid');
        customerPasswordSpan.innerHTML = '';
    }
}
customerPasswordlInput.addEventListener('blur', checkedCustomerInput2);

// customer botton-submit
let btnCustomerLogin = document.getElementsByClassName('sign-in-btn')[0];

function checkedCustomreLogin() {
    checkedLoginInput();
    checkedCustomerInput2();
}

btnCustomerLogin.addEventListener('click', function () {
    checkedCustomreLogin();
    if (document.querySelector('.invalid') !== null) {
        document.querySelector('.invalid').focus();
    } else {
        // window.location = './index.html';
        btnCustomerLogin.type = 'submit';


        // window.location = '../index.html'
        // window.location = 'file:///C:/Users/User/Desktop/HTML,%20CSS/final%20work%20+%20js/index.html';
        // window.location.href = '../index.html'
        // window.location.href = 'file:///C:/Users/User/Desktop/HTML,%20CSS/final%20work%20+%20js/index.html';
        // window.location.assign('file:///C:/Users/User/Desktop/HTML,%20CSS/final%20work%20+%20js/index.html');
    }

});

// Fargot your password
let forgotPassw = document.getElementsByClassName('forgot-passw')[0];
let formPageReg1 = document.forms['form-page-reg-1'];
let formRegistrCustomer = document.forms['form-page-reg-pass-recovery'];
let formPageReg2 = document.forms['form-page-reg-2'];
let recovetyPassvordInput = document.forms['form-page-reg-pass-recovery'].elements[0];
let recoveryPasswordSpan = document.getElementsByClassName('span-recovery')[0];

// Password Recovery. Enter your email
forgotPassw.addEventListener('click', function () {
    if (formRegistrCustomer.classList.contains('none')) {
        formRegistrCustomer.classList.remove('none');
        formRegistrCustomer.classList.add('register');
        formPageReg1.classList.remove('register');
        formPageReg1.classList.add('none');
        formPageReg2.classList.remove('create-account');
        formPageReg2.classList.add('none');
    }
    // window.scrollTo(1000, 0);
    document.getElementsByTagName('ol')[0].scrollIntoView();
})

// sign-in-btn

recovetyPassvordInput.addEventListener('input', function () {
    if (recovetyPassvordInput.value.trim() === '') {
        recovetyPassvordInput.classList.add('invalid');
        recoveryPasswordSpan.innerHTML = 'You have not entered the data';
        recoveryPasswordSpan.style.cssText = 'color: red; font-size: 12px';

    } else if (recovetyPassvordInput.value.length <= 5 || recovetyPassvordInput.value.includes('#') || recovetyPassvordInput.value.includes('!') || recovetyPassvordInput.value.includes('&') || recovetyPassvordInput.value.includes('?') || recovetyPassvordInput.value.includes(',') || !recovetyPassvordInput.value.includes('@')) {
        recovetyPassvordInput.style.border = '1px solid red';
        recoveryPasswordSpan.innerHTML = 'The email address must not contain: #, !, ?, ",", & and must contain: @. The length of the email must be more than 5 characters';
        recoveryPasswordSpan.style.cssText = 'color: red; font-size: 12px';
    } else if (recovetyPassvordInput.value.length > 5 || !recovetyPassvordInput.value.includes('#') || !recovetyPassvordInput.value.includes('!') || !recovetyPassvordInput.value.includes('&') || !recovetyPassvordInput.value.includes('?') || !recovetyPassvordInput.value.includes(',') || recovetyPassvordInput.value.includes('@')) {
        recovetyPassvordInput.style.border = 'none';
        recoveryPasswordSpan.style.display = 'none';
    }
})
function checkedLoginInput2() {
    if (recovetyPassvordInput.value.trim() === '') {
        recovetyPassvordInput.classList.add('invalid');
        recoveryPasswordSpan.innerHTML = 'You have not entered the data';
        recoveryPasswordSpan.style.cssText = 'color: red; font-size: 12px';

    } else if (recovetyPassvordInput.value.length <= 5 || recovetyPassvordInput.value.includes('#') || recovetyPassvordInput.value.includes('!') || recovetyPassvordInput.value.includes('&') || recovetyPassvordInput.value.includes('?') || recovetyPassvordInput.value.includes(',') || !recovetyPassvordInput.value.includes('@')) {
        recovetyPassvordInput.classList.add('invalid');
        recoveryPasswordSpan.innerHTML = 'The email address must not contain: #, !, ?, ",", & and must contain: @. The length of the email must be more than 5 characters';
    } else if (recovetyPassvordInput.value.length > 5 || !recovetyPassvordInput.value.includes('#') || !recovetyPassvordInput.value.includes('!') || !recovetyPassvordInput.value.includes('&') || !recovetyPassvordInput.value.includes('?') || !recovetyPassvordInput.value.includes(',') || recovetyPassvordInput.value.includes('@')) {
        recovetyPassvordInput.classList.remove('invalid');
        recoveryPasswordSpan.innerHTML = ''
    }
}
recovetyPassvordInput.addEventListener('blur', checkedLoginInput2);

// gtn resume
const btnResume = document.getElementsByClassName('sign-in-btn')[1];
const instructionsOnPasswordRecovery = document.getElementById('instructions');

btnResume.addEventListener('click', function () {
    checkedLoginInput2();
    if (document.querySelector('.invalid') !== null) {
        document.querySelector('.invalid').focus();
    } else {
        formRegistrCustomer.classList.remove('register');
        formRegistrCustomer.classList.add('none');
        instructionsOnPasswordRecovery.classList.remove('none');
        instructionsOnPasswordRecovery.classList.add('create-account');
        document.getElementsByTagName('ol')[0].scrollIntoView();
        // window.location = './index.html';
        btnCustomerLogin.type = 'submit';
    }
})


// create-account
// have-ac