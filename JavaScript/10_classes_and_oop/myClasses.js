// After -> ES6

class classUser {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}

const chai = new classUser('Chai', 'chai@google.com', '123');
console.log(chai.changeUsername());
console.log(chai.encryptPassword());



// Behind the scene 
function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function() {
    return `${this.password}abc`
}

User.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`
}

const tea = new User('Tea', 'tea@gmail.com', '123');
console.log(tea.encryptPassword());
console.log(tea.changeUsername());
