// if
// const isUserLoggedIn = true
// const temperature = 41

// if (temperature === 40) {
//     console.log("less than 50");
// }
// else{
//     console.log("temerature is greater than 50");
// }
// console.log("Exacute");

// some operators
// <,>, <=, >=, ==, !=, ===, !==
// var keywords completely global ha uska scope wagera se koi lena dena nahi hai

// const score = 200
// if (score>100) {
//    const power = "fly"
//    console.log(`User power: ${power}`);  
// }
// console.log(`User power: ${power}`);

// implcite scope
// const balance = 1000
// if (balance>500) console.log("test");

// this is not a good practice
// if (balance>500) console.log("test"), console.log('test2');

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 750");
// } else {
//     console.log("less than 1200");
// }


const UserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if (UserLoggedIn && debitCard && 2==3) {
    console.log("allow to buy course");  
}
if (loggedInFromEmail||loggedInFromGoogle) {
    console.log("user logged in ");
}


