class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get email() {
        return this._email.toUpperCase();
    }

    set email(value) {
        this._email = value;
    }

    get password() {
        return `${this._password}chaiaurjavascript`;
    }

    set password(value) {
        this._password = value;
    }
}

const nishant = new User('nishant@nishant.ai', 'abc');
console.log(nishant.email);
console.log(nishant.password);