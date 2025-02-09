class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username is ${this.username}`);
    }

    static createId() {
        return `123`
    }
}

const chai = new User('Chai');
// console.log(chai.createId())


class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const tea = new Teacher('Tea', 'tea@google.com', '123');
tea.logMe();