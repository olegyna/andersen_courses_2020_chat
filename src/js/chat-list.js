import {DOMUtils} from './DOM.utils';

export class ChatListComponent {
    constructor(chats, onChatClick) {
        this.chats = chats;
        this.onChatClick = onChatClick;
    }

    render() {
        const chatListItemComponents = this.chats
            .map((chatData) => new ChatListItemComponent(chatData, this.onChatClick))
            .map(chatListItemComponent => chatListItemComponent.render());
        return DOMUtils.createDivBlock(['chat-list-container'], chatListItemComponents)
    }
}

class ChatListItemComponent {
    constructor(chatData, onClick) {
        this.chatData = chatData;
        this.onClick = onClick;
    }

    render() {
        const recipient = DOMUtils.createDivBlock(
            ['chat-list-item_recipient'],
            [document.createTextNode(this.chatData.recipient)]
        );
        const date = DOMUtils.createDivBlock(
            ['chat-list-item_date'],
            [document.createTextNode(new Date(this.chatData.date).toDateString())]
        );
        const lastMessage = DOMUtils.createDivBlock(
            ['chat-list-item_last-message'],
            [document.createTextNode(this.chatData.isOnline ? 'Online' : 'Offline')]
        );
        const itemContainer = DOMUtils.createDivBlock(['chat-list-item'], [recipient, date, lastMessage]);
        itemContainer.addEventListener('click', () => this.onClick(this.chatData.id));
        return itemContainer;
    }
}
