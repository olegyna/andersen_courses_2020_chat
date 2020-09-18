import {DOMUtils} from './DOM.utils';


export class LoginFormComponent {
    constructor(onSubmit, onRegister) {
        this.onSubmit = onSubmit;
        this.onRegister = onRegister;
    }

    render() {
        this.emailLabel = DOMUtils.createLabel('loginEmail', 'Username');
        this.emailInput = DOMUtils.createInput('loginEmail', 'Enter Email', 'email');
        this.passwordLabel = DOMUtils.createLabel('password', 'Password');
        this.passwordInput = DOMUtils.createInput('password', 'Enter Password', 'psw', 'password');
        this.registerButton = DOMUtils.createButton('registerButton', 'Sign up', ['registerBtn']);
        this.loginButton = DOMUtils.createButton('loginButton', 'Sign in', ['registerBtn']);

        this.loginButton.addEventListener('click', () =>
            this.onSubmit(this.emailInput.value, this.passwordInput.value)
        );
        this.registerButton.addEventListener('click', () => this.onRegister());

        return DOMUtils.createDivBlock(
            ['wrapper'],
            [
                this.emailLabel,
                this.emailInput,
                this.passwordLabel,
                this.passwordInput,
                this.registerButton,
                this.loginButton
            ]
        );
    }

    clearInputValues() {
        this.emailInput.value = '';
        this.passwordInput.value = '';
    }

    setErrorMode() {
        this.passwordInput.style.border = '1px solid red';
        this.passwordInput.placeholder = 'try enter again';
        this.emailInput.style.border = '1px solid red';
        this.emailInput.placeholder = 'wrong email or password';
    }
}
