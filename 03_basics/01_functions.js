
function sayMyName(){
console.log("a");
console.log("b");
console.log("h");
console.log("i");
console.log("n");
console.log("a");
console.log("v");
}
// collection of code jiska hum ek package bna de usko hi function bolte ha

// sayMyName()
function addTwoNumbers(number1,number2){
    return number1 + number2
//    console.log( number1 + number2);
// let result = number1 + number2
// console.log("abhinav");

return result
console.log();
}
// ek baar hum function me return kar diye uske baad koi kaam nahi krege function
addTwoNumbers()
addTwoNumbers(3,4)
// yeha pe number1 , number2 parameter ha aur 3,4 arguments ha

const result = addTwoNumbers(3,5)
// console.log("result:",result);

function loginUserMessage(username = "abhi"){
    if (username=== undefined) 
        // (!username)
        {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in `
}
console.log(
loginUserMessage("abhinav"));
console.log(
loginUserMessage("abhinav"));




