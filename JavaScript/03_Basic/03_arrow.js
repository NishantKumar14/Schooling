// this -> current context of variable

const user = {
    username: "Nishant",
    price: 99,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website.`)
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "Nishant"
//     console.log(this.username)
// }
// chai()


// const chai = function() {
//     let username = "Nishant"
//     console.log(this.username);
// }

const chai = () => {
    let username = "Nishant"
    console.log(this);
}
// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2                          // Explicit return 
// }

// const addTwo = (num1, num2) => num1 + num2      // Implicit return

// const addTwo = (num1, num2) => ( num1 + num2 )     // Parenthesis do not require return keyword

const addTwo = (num1, num2) => ({username: "Nishant"})  // returning object

console.log(addTwo(3, 4));

