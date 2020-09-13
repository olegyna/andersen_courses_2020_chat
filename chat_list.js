window.onload = async function init() {
    const chats = await apiService.getChats();
    const chatListComponent = new ChatListComponent(chats);
    chatListComponent.render();
};

class ChatListComponent {
    constructor(chats) {
        this.container = document.querySelector('.container');
        this.chatListItemComponents = chats.map((chatData) => new ChatListItemComponent(chatData));
    }

    render() {
        this.container.append(
            ...this.chatListItemComponents.map((chatListItemComponent) => chatListItemComponent.render())
        );
    }
}

class ChatListItemComponent {
    constructor(chatData) {
        this.chatData = chatData;
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
            [document.createTextNode(this.chatData.lastMessage)]
        );
        return DOMUtils.createDivBlock(['chat-list-item'], [recipient, date, lastMessage]);
    }
}
