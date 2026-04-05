const user = {
    username: "abhinav",
    logincount: 8,
    signedin: true,
    getuserdetails: function () {
        // console.log('got user details from databases');
        // console.log(`username: ${this.username}`);
        console.log(this);
    }
}
console.log(user.username);
console.log(user.getuserdetails());
console.log(this);



const promiseone = new Promise()
const dateone = new Date()

const user2 = function user(username, logincount, isloggedin) {
    this.username = username
    this.logincount = logincount
    this.isloggedin = isloggedin

    this.greeting = function () {
        console.log(`welcome ${this.username}`);

    }
    // return this (return by default hota hi ha)
}
const userone = new user2("abhinav", 12, true)
const usertwo = new user2("abhi", 11, false)
console.log(userone.constructor);
// console.log(usertwo);

// jab bhi hum new keywords use krte ha to sabse phle empty object create hota ha



