// var a = 300


let a = 300

if (true) {
    let a = 39
    const b = 40
    // console.log(a);
}

// console.log(a);
// console.log(b);


function one() {
    const username = "Nishant";
    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one();

if (true) {
    const username = "Nishant"
    if (username === "Nishant") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++     Interesting     ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

// console.log(addone(5))      // Hoisting
function addone(num) {     // simple function
    return num + 1
}


const addTwo = function(num) {     // expression
    return num + 2
}
addTwo(5) // Here we not able to hold value in this function because we are using expression function 
