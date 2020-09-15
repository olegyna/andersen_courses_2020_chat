import {BackAuth} from './Back.js';

const email = document.getElementById('loginEmail');
const password = document.getElementById('password');
const registerButton = document.getElementById('regbtn');
const username = document.getElementById('username');
console.log(username);
const Back = new BackAuth;


registerButton.addEventListener('click', () => {
    Back.register(username.value, email.value , password.value)
})