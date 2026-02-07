// fetch('https://something.com').then().catch().finally()

const promiseone = new Promise(function (resolve, reject) {
    // Do a async task
    // DB calls , cryptography , network
    setTimeout(function () {
        console.log('async task is compelete');
        resolve()
    }, 1000)
})

promiseone.then(function () {
    console.log('promise consumed');
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('async task 2');
        resolve()
    }, 1000)
}).then(function () {
    console.log('async is resolved');
})

const promisethree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: 'abhinav', id: 232323, email: 'abhi23232323@gmail.com' })
    }, 1000)
})

promisethree.then(function (user) {
    console.log(user);
})


const promisefour = new Promise((resolved, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolved({ username: 'abhinav', password: '21212' })
        } else {
            reject('error:something went wrong')
        }
    }, 1000)
})

promisefour
    .then((user) => {
        console.log(user);
        return user.username
    })
    .then((username) => {
        console.log(username);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('either resolved or rejected');
    })



const promisefive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: 'javascript', password: '123' })
        } else { reject('error: js went wrong') }
    }, 1000)
})

async function consumepromisefive() {
    try {
        const response = await promisefive
        console.log(response);
    }
    catch (error) {
        console.log(error);
    }
}
consumepromisefive()


// async function consumepromisefive() {
//     const response = await promisefive
//     console.log(response);
// }
// consumepromisefive()


// async function getallusers() {
//     try {
//         const response = await fetch('https://randomuser.me/api/')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }
// getallusers()

fetch('https://randomuser.me/api/')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log("errror");
    })

