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
customerEmailInput.addEventListener('input', checkEmail)

function checkEmail(e) {
    // console.log(e.target.nextElementSibling)
    if (e.target.value.length <= 5 || e.target.value.includes('#') || e.target.value.includes('!') || e.target.value.includes('&') || e.target.value.includes('?') || e.target.value.includes(',') || !e.target.value.includes('@')) {
        e.target.style.border = '1px solid red';
        e.target.nextElementSibling.innerHTML = 'The email address must not contain: #, !, ?, ",", & and must contain: @. The length of the email must be more than 5 characters';
        e.target.nextElementSibling.style.cssText = 'color: red; font-size: 12px';
    } else if (!e.target.value.includes('@') || e.target.value.includes('#') || e.target.value.includes('!') || e.target.value.includes('&') || e.target.value.includes('?') || e.target.value.includes(',')) {
        e.target.style.border = '1px solid red';
        e.target.nextElementSibling.innerHTML = 'The email address must not contain: #, !, ?, ",", & and must contain: @. The length of the email must be more than 5 characters';
        e.target.nextElementSibling.style.cssText = 'color: red; font-size: 12px';
    }
    else if (e.target.value.length > 5 || e.target.value.includes('@') || !e.target.value.includes('#') || !e.target.value.includes('!') || !e.target.value.includes('&') || !e.target.value.includes('?') || !e.target.value.includes(',')) {
        e.target.style.border = 'none';
        e.target.nextElementSibling.style.display = 'none';
    }
}

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

customerPasswordlInput.addEventListener('input', checkPassord)

function checkPassord(e) {
    if (e.target.value.length <= 4) {
        e.target.style.border = '1px solid red';
        e.target.nextElementSibling.innerHTML = 'The password must consist of at least 5 characters';
        e.target.nextElementSibling.style.cssText = 'color: red; font-size: 12px';
    } else if (e.target.value.length > 4) {
        e.target.style.border = 'none';
        e.target.nextElementSibling.style.display = 'none';

    }
}
function checkedCustomerInput2() {
    if (customerPasswordlInput.value.trim() === '' || customerPasswordlInput.value.length <= 4) {
        customerPasswordlInput.classList.add('invalid');
        customerPasswordSpan.innerHTML = "You didn't enter your password";
        customerPasswordSpan.style.cssText = 'color: red; font-size: 12px';

    } else if (!customerPasswordlInput.value.trim() === '' || customerPasswordlInput.value.length >= 4) {
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
        window.location = './index.html';
        // customerPasswordlInput.value = '';

        // btnCustomerLogin.type = 'submit';


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
recovetyPassvordInput.addEventListener('input', checkEmail)

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
        // document.getElementsByTagName('ol')[0].scrollIntoView();
        window.scrollTo(0, 0)
    }
})

// create an account
const BTN_CREARE_ACCOUNT = document.querySelector('.btn-reg-right');
const elemInput0 = document.forms[1].elements[0];
elemInput0.addEventListener('input', checkName)
function checkName(e) {
    if (e.target.value.length <= 1) {
        e.target.style.border = '1px solid red';
        e.target.nextElementSibling.innerHTML = 'The password must consist of at least 2 characters';
        e.target.nextElementSibling.style.cssText = 'color: red; font-size: 12px';
    } else if (e.target.value.length > 1) {
        e.target.style.border = 'none';
        e.target.nextElementSibling.style.display = 'none';

    }
}
function checkedCustomerName() {
    if (elemInput0.value.trim() === '' || elemInput0.value.length <= 1) {
        elemInput0.classList.add('invalid');
        elemInput0.nextElementSibling.innerHTML = "You didn't enter your password";
        elemInput0.nextElementSibling.style.cssText = 'color: red; font-size: 12px';

    } else if (!elemInput0.value.trim() === '' || elemInput0.value.length > 1) {
        elemInput0.classList.remove('invalid');
        elemInput0.nextElementSibling.innerHTML = '';
    }
}
elemInput0.addEventListener('blur', checkedCustomerName)


const elemInput1 = document.forms[1].elements[1];
elemInput1.addEventListener('input', checkEmail);

function checkedLoginInputN() {
    if (elemInput1.value.trim() === '') {
        elemInput1.classList.add('invalid');
        elemInput1.nextElementSibling.innerHTML = 'You have not entered the data';
        elemInput1.nextElementSibling.style.cssText = 'color: red; font-size: 12px';

    } else if (elemInput1.value.length <= 5 || elemInput1.value.includes('#') || elemInput1.value.includes('!') || elemInput1.value.includes('&') || elemInput1.value.includes('?') || elemInput1.value.includes(',') || !elemInput1.value.includes('@')) {
        elemInput1.classList.add('invalid');
        elemInput1.nextElementSibling.innerHTML = 'The email address must not contain: #, !, ?, ",", & and must contain: @. The length of the email must be more than 5 characters';
    } else if (elemInput1.value.length > 5 || !elemInput1.value.includes('#') || !elemInput1.value.includes('!') || !elemInput1.value.includes('&') || !elemInput1.value.includes('?') || !elemInput1.value.includes(',') || elemInput1.value.includes('@')) {
        elemInput1.classList.remove('invalid');
        elemInput1.nextElementSibling.innerHTML = ''
    }
}
elemInput1.addEventListener('blur', checkedLoginInputN);

const elemInptut2 = document.forms[1].elements[2];
elemInptut2.addEventListener('input', checkPassord);

function checkedCustomerInput3() {
    if (elemInptut2.value.trim() === '' || elemInptut2.value.length <= 4) {
        elemInptut2.classList.add('invalid');
        elemInptut2.nextElementSibling.innerHTML = "You didn't enter your password";
        elemInptut2.nextElementSibling.style.cssText = 'color: red; font-size: 12px';
    } else if (!elemInptut2.value.trim() === '' || elemInptut2.value.length > 4) {
        elemInptut2.classList.remove('invalid');
        elemInptut2.nextElementSibling.innerHTML = '';
    }
}
elemInptut2.addEventListener('blur', checkedCustomerInput3);

const elemInptut3 = document.forms[1].elements[3];
elemInptut3.addEventListener('input', checkPassord);
function checkedCustomerInput4() {
    if (elemInptut3.value.trim() === '' || elemInptut3.value.length <= 4) {
        elemInptut3.classList.add('invalid');
        elemInptut3.nextElementSibling.innerHTML = "You didn't enter your password";
        elemInptut3.nextElementSibling.style.cssText = 'color: red; font-size: 12px';
    } else if (!elemInptut3.value.trim() === '' || elemInptut3.value.length > 4) {
        elemInptut3.classList.remove('invalid');
        elemInptut3.nextElementSibling.innerHTML = '';
    }
}
elemInptut3.addEventListener('blur', checkedCustomerInput4);

const BTN_CREATE_ACC = document.querySelectorAll('.btn-reg-right')[0];
BTN_CREATE_ACC.addEventListener('click', function () {
    checkedCustomerName();
    checkedLoginInputN();
    checkedCustomerInput3();
    checkedCustomerInput4();
    if (document.querySelector('.invalid') !== null) {
        document.querySelector('.invalid').focus();
    } else {
        window.location = './index.html';
    }
})