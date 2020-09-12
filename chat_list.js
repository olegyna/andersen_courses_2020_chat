window.onload = function init() {
    const chatListComponent = new ChatListComponent();
    chatListComponent.render();
};

class ChatListComponent {
    constructor() {
        this.container = document.querySelector('.container');
        this.chatListItemComponents = CHAT_LIST.map((chatData) => new ChatListItemComponent(chatData));
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
            [document.createTextNode(this.chatData.name)]
        );
        const date = DOMUtils.createDivBlock(['chat-list-item_date'], [document.createTextNode(this.chatData.date)]);
        const lastMessage = DOMUtils.createDivBlock(
            ['chat-list-item_last-message'],
            [document.createTextNode(this.chatData.lastMessage)]
        );
        return DOMUtils.createDivBlock(['chat-list-item'], [recipient, date, lastMessage]);
    }
}


const CHAT_LIST = [{
    name: 'Sanli Rujput',
    date: new Date(2020, 9, 11).toDateString(),
    lastMessage: 'Text of the last message'
}, {
    name: 'Jose Bertolino',
    date: new Date(2020, 9, 10).toDateString(),
    lastMessage: 'All good'
}, {
    name: 'Mary Sampir',
    date: new Date(2020, 9, 9).toDateString(),
    lastMessage: 'Text of the last message'
}, {
    name: 'Liza Sokolovskaya',
    date: new Date(2020, 9, 8).toDateString(),
    lastMessage: 'Text of the last message'
}, {
    name: 'Mark Messi',
    date: new Date(2020, 9, 8).toDateString(),
    lastMessage: 'Text of the last message'
}, {
    name: 'Victor Avdeenko',
    date: new Date(2020, 9, 7).toDateString(),
    lastMessage: 'Text of thelast message'
}, {
    name: 'Simona Matus',
    date: new Date(2020, 9, 5).toDateString(),
    lastMessage: 'Text of the last message'
}, {
    name: 'Ann Feducovich',
    date: new Date(2020, 9, 3).toDateString(),
    lastMessage: 'Text of the last message'
}, {
    name: 'Alex Simpson',
    date: new Date(2020, 9, 1).toDateString(),
    lastMessage: 'Text of the last message'
}, {
    name: 'Vladimir Pacevich',
    date: new Date(2020, 9, 1).toDateString(),
    lastMessage: 'Text of the last message'
},];
