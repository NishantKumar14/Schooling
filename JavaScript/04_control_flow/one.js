// if

const isUserLoggedIn = true;
const temperature = 41;

// if (temperature === 41) {
//     console.log("Temperature is less than 50");
// } else console.log("Temperature is greater than 50");       //  Implicit scope

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200;

// if (score) {
//     let power = 'fly';
//     console.log(`User power: ${power}`);
// }
// console.log(`Users power: ${power}`);


// const balance = 1000;

// if (balance < 500) {
//     console.log(`Balance is less than is ${balance}`);
// } else if (balance < 750) {
//     console.log(`Balance is less than ${balance}`);
// } else {
//     console.log("Balance is less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;

const userLoggedInFromGoogle = false;
const userLoggedInFromEmail = true;

if (userLoggedIn && debitCard) {
    console.log("Allow to buy courses");
}

if (userLoggedInFromGoogle || userLoggedInFromEmail) {
    console.log("Allow to login the website");
}
