export class ApiService {
    constructor() {
        this.apiURL = 'https://5f5e06718b224700167c5464.mockapi.io/';
    }

    async register(username, email, password) {
        return await fetch(`${this.apiURL}/authentication`, {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                password,
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
    }

    async getUsers() {
        const response = await fetch(`${this.apiURL}/authentication`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        return await response.json();
    }

    async getChats() {
        const response = await fetch(`${this.apiURL}new-chats`);
        return await response.json();
    }

    async getMessages(chatId) {
        try {
            const response = await fetch(`${this.apiURL}new-messages`);
            return await response.json();
        } catch (error) {
            console.error('Ошибка', error);
        }
    }

    async createMessage(userId, chatId, text) {
        try {
            await fetch(`${this.apiURL}new-messages`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    userId,
                    chatId,
                    text,
                })
            });
        } catch (error) {
            console.error('Ошибка', error);
        }
    }
}
