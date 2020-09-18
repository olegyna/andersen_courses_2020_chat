import {DOMUtils} from './DOM.utils';

function isAuthor() {
    return Math.random() > 0.5;
}

export class MessagesComponent {
    constructor(messages, sender_id, chatId, onMessageCreate) {
        this.messagesList = messages || [];
        this.sender_id = sender_id;
        this.chatId = chatId;
        this.onMessageCreate = onMessageCreate;
    }

    createMessage(text, isAuthorForce = false) {
        const messageItem = DOMUtils.createListItem([
            'chat__item',
            isAuthorForce || isAuthor() ? 'author' : 'non-author'
        ], text);

        this.chatNode.append(messageItem);
    }

    render() {
        this.chatNode = DOMUtils.createUnorderedList(['chat__items']);
        this.chatMessagesContainer = DOMUtils.createDivBlock(['chat__messages'], [this.chatNode]);
        this.chatInput = DOMUtils.createInput('chatInput', 'Type a message', '', 'text', ['chat__message'], false);
        const btnImage = DOMUtils.createImage('./src/img/send.png', 'send', ['chat__img']);
        this.chatBtn = DOMUtils.createDivBlock(['chat__btn'], [btnImage]);
        const chatArea = DOMUtils.createDivBlock(['chat__area'], [this.chatInput, this.chatBtn]);
        const messagesSection = DOMUtils.createSection(['chat'], [this.chatMessagesContainer, chatArea]);

        this.messagesList.forEach((message) => {
            this.createMessage(message.text);
        });

        setTimeout(() => this.showLastMessage(), 0);

        this.chatInput.addEventListener('keypress', (event) => {
            if (this.chatId && event.key === 'Enter') {
                this.onMessageCreate(this.chatInput.value);
                this.createMessage(this.chatInput.value, this.sender_id, true);
                this.showLastMessage();
                this.chatInput.value = '';
            }
        });

        this.chatBtn.addEventListener('click', () => {
            if (!this.chatId) {
                return;
            }

            this.onMessageCreate(this.chatInput.value);
            this.createMessage(this.chatInput.value, this.sender_id, true);
            this.showLastMessage();
            this.chatInput.value = '';
        });

        return messagesSection;
    }

    showLastMessage() {
        this.chatMessagesContainer.scrollTop = this.chatMessagesContainer.scrollHeight;
    }
}
