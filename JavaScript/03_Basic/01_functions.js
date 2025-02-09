
function sayMyName() {
    console.log("N");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("n");
    console.log("t");  
}

// sayMyName();

// function sumTwoNumber(number1, number2) {
//     console.log(number1 + number2);
// }

function sumTwoNumber(number1, number2) {
    return number1 + number2
}

const result = sumTwoNumber(3, 4);
// console.log("Result: ",result);


function loginUserMessage(username) {
    if (username === undefined) {
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in.`
}

// console.log(loginUserMessage("nishant"));
// console.log(loginUserMessage())

function calculateCartPrice(...num1) {
    return num1;
}

// console.log(calculateCartPrice(200, 400, 500))


const user = {
    username: 'nishant',
    prices: 199,
}

function handleObject (anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}.`)
}

// handleObject(user);

handleObject({
    username: "Sam",
    price: 399
})


const myNewArray = [100, 200, 300, 400]

function returnSecondValue (getArray) {
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray))

console.log(returnSecondValue([5500, 664, 5763, 545]))