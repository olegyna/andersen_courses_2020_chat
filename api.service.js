class ApiService {
    constructor() {
        this.apiURL = 'https://5f5e06718b224700167c5464.mockapi.io/';
    }

    async getChats() {
        const response = await fetch(`${this.apiURL}chats`);
        return await response.json();
    }
}

const apiService = new ApiService();
