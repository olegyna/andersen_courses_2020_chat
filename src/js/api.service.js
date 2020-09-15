class ApiService {
    constructor() {
        this.apiURL = 'https://5f5e06718b224700167c5464.mockapi.io/';
    }

    async getChats() {
        const response = await fetch(`${this.apiURL}chats`);
        return await response.json();
    }

    async getMessages() {
        try {
            const response = await fetch(`${this.apiURL}chats`);
            return await response.json();
          } catch (error) {
            console.error('Ошибка', error);
          }
    }

    async addMessage(sender_id, receiver_id, text) {
        let response = await fetch(`${this.apiURL}chats`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                "receiver_id": receiver_id,
                "sender_id": sender_id,
                "message": text,
                "date": Date.now()
              })
          });
    }
}

const apiService = new ApiService();