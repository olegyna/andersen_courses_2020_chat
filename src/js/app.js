import {LoginFormComponent} from './login';
import {ChatListComponent} from './chat-list';
import {MessagesComponent} from './messages';
import {RegisterComponent} from './register';

export class App {
    constructor(apiService) {
        this.apiService = apiService;
        this.mainContainer = document.querySelector('.main');
        this.loginComponent = null;
        this.registerComponent = null;
        this.chatListComponent = null;
        this.messagesComponentHTML = null;
    }

    async onLoginSubmit(email, password) {
        const data = await this.apiService.getUsers();
        const userInfo = data.find(user => {
            return user.email === email && user.password === password;
        });

        if (userInfo) {
            const { id } = userInfo;
            const chats = await this.apiService.getChats();
            this.chatListComponent = new ChatListComponent(chats, this.onChatClick.bind(this, id));
            this.mainContainer.innerHTML = null;
            this.mainContainer.appendChild(this.chatListComponent.render());
            this.loginComponent = null;
        } else {
            this.loginComponent.clearInputValues();
            this.loginComponent.setErrorMode();
        }
    }

    onRegistrationClick() {
        this.registerComponent = new RegisterComponent(this.onAccountCreate.bind(this), this.onGoBack.bind(this));
        this.mainContainer.innerHTML = null;
        this.loginComponent = null
        this.mainContainer.appendChild(this.registerComponent.render());
    }

    async onChatClick(userId, chatId) {
        const messages = await this.apiService.getMessages(chatId);
        if (this.messagesComponentHTML) {
            this.mainContainer.removeChild(this.messagesComponentHTML);
        }

        const messagesComponent = new MessagesComponent(
            messages,
            userId,
            this.onMessageCreate.bind(this, userId, chatId)
        );
        this.messagesComponentHTML = messagesComponent.render();
        this.mainContainer.appendChild(this.messagesComponentHTML);
    }

    async onMessageCreate(userId, chatId, text) {
        await this.apiService.createMessage(userId, chatId, text);
    }

    onGoBack() {
        this.mainContainer.innerHTML = null;
        this.loginComponent = new LoginFormComponent(
            this.onLoginSubmit.bind(this),
            this.onRegistrationClick.bind(this)
        );
        this.mainContainer.appendChild(this.loginComponent.render());
    }

    async onAccountCreate(username, email, password) {
        await this.apiService.register(username, email, password);
        this.mainContainer.innerHTML = null;
        this.loginComponent = new LoginFormComponent(
            this.onLoginSubmit.bind(this),
            this.onRegistrationClick.bind(this)
        );
        this.mainContainer.appendChild(this.loginComponent.render());
    }

    run() {
        this.loginComponent = new LoginFormComponent(
            this.onLoginSubmit.bind(this),
            this.onRegistrationClick.bind(this)
        );
        this.mainContainer.appendChild(this.loginComponent.render());
    }
}
