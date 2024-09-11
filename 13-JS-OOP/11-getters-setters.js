class Account {
    constructor(username, password) {
        this.username = this.setUsername(username) || this.getUsername(username);
        this.password = this.setPassword(password);
    }

    setUsername(username) {
        if(username != '') this.username = username;
        else throw new Error('Username cannot be empty!!!')
    }

    getUsername() {
        return this.username;
    }

    setPassword(password) {
        if(password.length >= 8) this.password = password;
        else throw new Error('Password should have 8 charachters at least!!!')
    }
}

const myAccount = new Account('TechGlobal', 'Test1234');

console.log(myAccount.username); // TechGlobal
console.log(myAccount.password); // Test1234

// UPDATING PASSWORD
myAccount.password = 'ABCD98670';
console.log(myAccount.password); // ABCD