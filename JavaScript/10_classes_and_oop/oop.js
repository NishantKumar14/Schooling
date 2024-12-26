// Object literals
const user = {
    username: 'Nishant',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        // console.log('Get user details from database');
        // console.log(`Username: ${this.username}`);
        // console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


// Constructor function
function User(username, loginCount, isLoggedIn) {
    this.username = username,
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn

    this.greeting = function() {
        console.log(`Welcome ${this.username}`)
    }

    return this;
}

const userOne = new User('Nishant', 12, true);
const userTwo = new User('ChaiAurCode', 11, false);
console.log(userOne);
console.log(userTwo);


/*
    new keyword 
    1. Create new objects -> Which is new instances
    2. new call the constructor function
    3. all this keyword inject/add into new keyword
    4. Then we get all the object instances that were made
*/