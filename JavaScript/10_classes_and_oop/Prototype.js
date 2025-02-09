// let myName = 'Nishant     ';
// let myChannel = 'chai     ';
// console.log(myName.trueLength);


let myHeros = ['thor', 'spiderman'];

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.nishant = function() {
    console.log(`nishant is present in all objects`);
}

Array.prototype.heyNishant = function() {
    console.log(`Nishant says hello`);
}

// heroPower.nishant()
// myHeros.nishant()
// myHeros.heyNishant()
// heroPower.heyNishant()


// Inheritance

const user = {
    name: 'chai',
    email: 'chai@google.com'
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = 'ChaiAurCode     ';
String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUsername.trueLength()
'nishant'.trueLength();
'iceTea'.trueLength();
