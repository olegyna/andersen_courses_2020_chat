import {DOMUtils} from './DOM.utils';

export class RegisterComponent {
    constructor(onRegisterClick, onLoginNavigation) {
        this.onRegisterClick = onRegisterClick;
        this.onLoginNavigation = onLoginNavigation;
    }

    render() {
        const header = DOMUtils.createHeader(1, 'Register');
        const paragraph = DOMUtils.createParagraph('Please fill in this form to create an account.');
        const hr = DOMUtils.createHR();
        const usernameLabel = DOMUtils.createLabel('username', 'Username');
        this.usernameInput = DOMUtils.createInput('username', 'Enter Username', 'username');
        const emailLabel = DOMUtils.createLabel('email', 'Email');
        this.emailInput = DOMUtils.createInput('email', 'Enter Email', 'email');
        const passwordLabel = DOMUtils.createLabel('psw', 'Password');
        this.passwordInput = DOMUtils.createInput('psw', 'Enter Password', 'psw', 'password');
        const submitBtn = DOMUtils.createButton('regbtn', 'Register', ['registerbtn']);
        submitBtn.addEventListener('click', () => {
            if (this.emailInput.value && this.passwordInput.value && this.usernameInput.value) {
                this.onRegisterClick(this.usernameInput.value, this.emailInput.value, this.passwordInput.value);
            }
        });
        const alreadyRegisteredLink = DOMUtils.createLink('', 'Sign in');
        alreadyRegisteredLink.addEventListener('click', () => {
            this.onLoginNavigation();
        })
        const footerParagraph = DOMUtils.createParagraph('Already have an account? ', [alreadyRegisteredLink]);
        return DOMUtils.createDivBlock(
            ['wrapper', 'wrapperReg'],
            [
                header,
                paragraph,
                hr,
                usernameLabel,
                this.usernameInput,
                emailLabel,
                this.emailInput,
                passwordLabel,
                this.passwordInput,
                hr,
                submitBtn,
                footerParagraph
            ]
        );
    }
}
