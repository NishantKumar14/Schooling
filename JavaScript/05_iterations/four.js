const myObject = {
    js: 'javascript',
    cpp: 'C++',
    py: 'Python', 
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} file extension for ${myObject[key]}`);
}


const programming = ['js', 'py', 'rb', 'java', 'cpp'];

for (const key in programming) {
    // console.log(programming[key])
}

// const map = new Map();
// map.set('IN', "India");
// map.set('USA', "United States of America");
// map.set('Fr', "France");

// for (const key in map) {             // map is not iterable like this method
//     console.log(key)
// }
