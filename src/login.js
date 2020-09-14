import BackAuth from './Back.js';


const email = document.getElementById('loginEmail');
const password = document.getElementById('password');
const submit = document.getElementById('loginButton');
const registerButton = document.getElementById('registerButton');
const username = document.getElementById('username');
username.style.display = 'none';
 

registerButton.addEventListener('click', () =>{
    username.style.display = 'block';
    username.innerHTML = '';
    email.innerHTML = '';
    password.innerHTML = '';
})

const Back = new BackAuth;

submit.addEventListener('click', () =>{
    if(username.style.display = 'block'){
        Back.register(username.innerHTML, email.innerHTML, password.innerHTML)
    }
    // Back.login(email.innerHTML, password.innerHTML)
    console.log(email.innerHTML, password.innerHTML)
})




