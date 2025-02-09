// Object.create -> singleton => When we create object through constructor in js it creates singleton.

//Object literals

const mySym = Symbol("key1");

const jsUser = {
    name: "Nishant",
    "full name": "Nishant Kumar",
    [mySym]: "mykey1",                     // In object if we have to console key and value of symbol -> so used in array otherwise it gives string
    age: 19,
    location: "Muzaffarpur",
    email: "nishant@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);


jsUser.email = "nishant@chatgpt.com";
// Object.freeze(jsUser);
// jsUser.email = "nishant@microsoft.com";

// console.log(jsUser)

jsUser.greeting = function () {
    console.log("Hello, JS user.");
}

jsUser.greetingTwo = function () {
    console.log(`Hello, JS user ${this.name}`);
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())
