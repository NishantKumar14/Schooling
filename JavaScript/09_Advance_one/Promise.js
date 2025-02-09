const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls, crytography, network
    setTimeout(() => {
        console.log('Async task is complete');
        resolve();
    }, 1000);
});

promiseOne.then(function () {
    console.log('Promise consumed');
});

new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Async task 2');
        resolve();
    }, 1000);
}).then(function () {
    console.log('Async 2 resolved');
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({username: 'chai', email: 'chai@chaiaurcode.com'});
    }, 1000);
})

promiseThree.then((user) => {
    console.log(user);
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({username: 'nishant', password: '123'});
        } else {
            reject('ERROR: Something went wrong');
        }
    }, 1000);
});

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(()=> {
    console.log('The promise is either resolve or rejected');
})


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({
                username: 'javascript',
                password: '123'
            });
        } else {
            reject('Error: JS went wrong');
        }
    }, 1000);
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()



// async function getAllUsers() {
//     try {
//         const resoponse = await fetch('https://jsonplaceholder.typicode.com/users');
//         // console.log(resoponse); 
//         const data = await resoponse.json();
//         console.log(data);
//     } catch (error) {
//         console.log('Error: ', error);
//     }
// }
// getAllUsers()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})

