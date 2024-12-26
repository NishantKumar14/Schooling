const name = "Nishant"
const repoCount = 10

// console.log(name + repoCount + " Value");  //  Old method 

// console.log(`Hello, My name is ${name} and my repo count is ${repoCount}`);     // New method -> String interpolation

const gameName = new String('Nishant')

// console.log(gameName[0]);
// console.log(gameName.__proto__);  // Method of getting object


// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4);
// console.log(newString);

const anotherString = gameName.slice(-7, 4);
// console.log(anotherString);

const newStringOne = "      Nishant     ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "http://nishant.com/nishant%20kumar"
console.log(url.replace('%20', '-'));
console.log(url.includes('nishant'));

