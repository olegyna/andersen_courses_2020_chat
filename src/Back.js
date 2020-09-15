class BackAuth {
    constructor(){
        this.apiURL = `https://5f5e06718b224700167c5464.mockapi.io/authentication`;
    }

    async register(username, email, password){
        return await fetch(this.apiURL, {
            method:'POST',
            body:JSON.stringify({
                username,
                email,
                password,
            }),
            headers:{
                'Content-Type': 'application/json'
            },
        })
    }

    async login(email, password){
        return await fetch(this.apiURL, {
            method: 'GET',
            body: JSON.stringify({
                email,
                password,
            }),
            headers:{
                'Content-Type': 'application/json'
            },
        })
    }
}

export {BackAuth};