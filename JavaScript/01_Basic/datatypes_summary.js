// Primitive

// 7 types: String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.2 // datatype => number

const isLogIn = false
const outsideTemperature = null // datatype => object
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123'); // datatype => symbol

// console.log(id === anotherId);

const bigNumber = 2341324134934759452342323423423n // datatype => bigInt


// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ['Shaktiman', 'Naagraj', 'MrIndia']; // datatype => Function

const myObj = {
    name: "Nishant",
    age: 22,
    isWorking: false,
}   // datatype => Funtion

const myFunction = function() {
    console.log("Hello World");
} // datatype => ObjectFunction




/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

// Stack(Primitive datatype), Heap(Non-premitive datatype)

let myGitHubName = "NishantKumar14";
let anothername = myGitHubName;
anothername = "Nishant"

console.log(myGitHubName);
console.log(anothername)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne;
userTwo.email = "userTwo@google.com";

console.log(userOne.email);
console.log(userTwo.email);

