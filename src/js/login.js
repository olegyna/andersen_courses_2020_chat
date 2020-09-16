import {BackAuth} from './Back.js'


const email = document.getElementById('loginEmail');
const password = document.getElementById('password');
const submit = document.getElementById('loginButton');
const registerButton = document.getElementById('registerButton');

registerButton.addEventListener('click', () =>{
    document.location = './register.html';
})

const Back = new BackAuth;

submit.addEventListener('click', async () =>{
    const data = await Back.login()
    const userInfo = data.find(user => {
        return user.email === email.value && user.password === password.value;
    })
    if(userInfo){
        const {id, username} = userInfo;
        localStorage.setItem('user', JSON.stringify({id, username}));
        document.location = './index.html';
    }
    else{
        email.value = '';
        password.value = '';
        password.style.border = '1px solid red';
        email.style.border = '1px solid red';
        email.placeholder = 'wrong email or password';
        password.placeholder = 'try enter again';
    }
})
