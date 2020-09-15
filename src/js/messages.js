class Messages {
  constructor(messages) {
    this.messagesList = messages || [];
    this.sender_id = 1;
    this.receiver_id = 5;
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
      console.log(message);
      this.createMessage(message.message, message.sender_id);
    });

    this.showLastMessage();

    this.chatInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        apiService.addMessage(1, 3, this.chatInput.value);
        this.createMessage(this.chatInput.value, this.sender_id);
        this.showLastMessage();
        this.chatInput.value = '';
      }
    });

    this.chatBtn.addEventListener('click', () => {
      apiService.addMessage(1, 3, this.chatInput.value);
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
  const messages = await apiService.getMessages();
  const messagesComponent = new Messages(messages);
  messagesComponent.render();
};
