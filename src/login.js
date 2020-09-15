import {BackAuth} from './Back.js';


const email = document.getElementById('loginEmail');
const password = document.getElementById('password');
const submit = document.getElementById('loginButton');
const registerButton = document.getElementById('registerButton');

registerButton.addEventListener('click', () =>{
    document.location = './register.html';
})

const Back = new BackAuth;

submit.addEventListener('click', () =>{
    Back.login(email.value, password.value)
    .then(res =>{
        if(!res.ok){
            return Promise.reject('error')
        }
})
})
