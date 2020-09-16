import {BackAuth} from './Back.js';

const email = document.getElementById('loginEmail');
const password = document.getElementById('password');
const registerButton = document.getElementById('regbtn');
const username = document.getElementById('username');

const Back = new BackAuth;


registerButton.addEventListener('click', () => {
    if(email.value && password.value && username.value){
        Back.register(username.value, email.value , password.value)
    }
})