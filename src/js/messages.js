class Messages {
  constructor(messages, sender_id, receiver_id) {
    this.messagesList = messages || [];
    this.sender_id = sender_id;
    this.receiver_id = receiver_id;
    this.chatNode = document.querySelector('.chat__items');
    this.chatInput = document.querySelector('.chat__message');
    this.chatBtn = document.querySelector('.chat__btn');
  }

  createMessage(text, sender_id) {
    const messageItem = document.createElement('li');
    messageItem.classList.add('chat__item');
    if (sender_id == this.sender_id) {
      messageItem.classList.toggle('author');
    }
    messageItem.innerText = text;
    this.chatNode.append(messageItem);
  }

  render() {
    this.messagesList.forEach((message) => {
      this.createMessage(message.message, message.sender_id);
    });

    this.showLastMessage();

    this.chatInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        apiService.addMessage(this.sender_id, this.receiver_id, this.chatInput.value);
        this.createMessage(this.chatInput.value, this.sender_id);
        this.showLastMessage();
        this.chatInput.value = '';
      }
    });

    this.chatBtn.addEventListener('click', () => {
      apiService.addMessage(this.sender_id, this.receiver_id, this.chatInput.value);
      this.createMessage(this.chatInput.value, this.sender_id);
      this.showLastMessage();
      this.chatInput.value = '';
    });
  }

  showLastMessage() {
    const block = document.querySelector('.chat__messages');
    block.scrollTop = block.scrollHeight;
  }
}

window.onload = async function init() {
  const sender = JSON.parse(localStorage.getItem('user')).id;
  const receiver = 1;
  const messages = await apiService.getMessages();
  const messagesComponent = new Messages(messages, sender, receiver);
  messagesComponent.render();
};
