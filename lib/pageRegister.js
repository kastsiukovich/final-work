
let usNam = document.querySelector('#user-name');
let customerEmailInput = document.getElementById('text');
let customerEmailSpan = document.getElementsByClassName('span-email')[0];
customerEmailInput.addEventListener('input', checkEmail);

function checkEmail(e) {
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


// login
const generateToken = () => {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
};

const writeAccountData = (event) => {
    event.preventDefault();
    const userName = document.querySelector('#text');
    const userPassword = document.getElementById('psw');
    localStorage.setItem('u-name', userName.value);
    localStorage.setItem('u-password', userPassword.value);
    let currentAccounts = JSON.parse(
        localStorage.getItem('accounts'));

    const currentUser = {
        userEmail: userName.value,
        userPassword: userPassword.value
    }

    checkUser(currentAccounts, currentUser)

}


const checkUser = (allUsers, userData) => {
    const checkUser = allUsers.filter((user) => {
        return (
            user.userEmail === userData.userEmail &&
            user.userPassword === userData.userPassword
        )
    });
    if (checkUser.length === 0) {
        alert('Print another data');
        return false;
    } else {



        localStorage.setItem('user-token', generateToken());
        let getLS = JSON.parse(localStorage.getItem('accounts'));
        getLS.forEach((item) => {
            if (item.userEmail === userData.userEmail && item.userPassword === userData.userPassword) {
                console.log(usNam.innerText = item.userName)
                if (usNam.innerText !== 'lig in') {
                    localStorage.setItem('cur-user', usNam.innerText)
                }

            }
        })
        return true;
    }
}

let form = document.querySelectorAll('.register')[1];

btnCustomerLogin.addEventListener('click', function () {
    checkedCustomreLogin();
    if (document.querySelector('.invalid') !== null) {
        document.querySelector('.invalid').focus();
    } else {
        form.addEventListener('submit', writeAccountData);

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
elemInptut3.addEventListener('input', checkPassord)

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


// submit
const createAccountData = (event) => {
    event.preventDefault();
    const userEmail = document.querySelector('#email');
    const userPassword = document.querySelector('#password');
    const userName = document.querySelector('#name');
    if (!localStorage.getItem('accounts')) {
        localStorage.setItem('accounts', JSON.stringify([]));
    }
    let currentAccounts = JSON.parse(
        localStorage.getItem('accounts'));
    const userData = {
        userEmail: userEmail.value,
        userPassword: userPassword.value,
        userName: userName.value
    }
    const checkResult = checkAccount(currentAccounts, userData);
    if (checkResult) {
        currentAccounts.push(userData);
    }
    localStorage.setItem('accounts',
        JSON.stringify(currentAccounts))
}
const checkAccount = (allUsers, userData) => {
    const checkUser = allUsers.filter((user) => {
        return (
            user.userEmail === userData.userEmail ||
            user.userPassword === userData.userPassword
        )
    });

    if (checkUser.length !== 0) {
        alert('Enter another data');
        return false;
    } else {
        return true;
    }
}

let form1 = document.forms[1];

// form1.addEventListener('submit', createAccountData);
BTN_CREARE_ACCOUNT.addEventListener('click', function () {
    checkedCustomerName();
    checkedLoginInputN();
    checkedCustomerInput3();
    checkedCustomerInput4();
    if (document.querySelector('.invalid') !== null) {
        document.querySelector('.invalid').focus();
    } else {
        BTN_CREARE_ACCOUNT.type = 'submit';
        form1.addEventListener('submit', createAccountData);

        let modal = document.querySelector('#exampleModal')

        window.location = './register.html';

    }
})



