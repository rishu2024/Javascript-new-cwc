const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username},welcome to website`);
        console.log(this)

    }
}
// this. yeha pe current context ko bta raha

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "abhinav"
//     console.log(this.username);
// }
// chai()

// this. object ke ander hi kaam kar raha ha functions ke ander nahi

// const chai = function () {
//     let username = "abhinav"
//     console.log(this.username);
// }
// chai()

// function hata ke parenthesis ke aage => lgana ha bnn gya arrow function 

// const chai = () => {
//     let username = "abhinav"
//     console.log(this.username);
// }
// chai()

// const chai = () => {
//     let username = "abhinav"
//     console.log(this);
// }
// chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4));

// const addTwo = (num1,num2) => num1 + num2 
// const addTwo = (num1,num2) => (num1 + num2)

// const addTwo = (num1,num2) => ({username: "abhinav"})
// console.log(addTwo(3,4));
// object ko return krne ke liye usse () me rapp krna hi padhega
// this is implecite
// {} me rapp kara to return keywords likhna padhega
// () me rapp kara to return keywords nahi likhna padhega

const myArray = [2,5,3,7,8]
myArray.forEach(() => {})
// myArray.forEach(() => ())
