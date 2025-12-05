// const useremail = "abhinav@.ai"

// if (useremail) {
//     console.log("got user email");
// } else{
//     console.log("don't have user mail");
// }

// const useremail = []

// if (useremail) {
//     console.log("got user email");
// } else{
//     console.log("don't have user mail");
// }

// string ke ander koi value hoga woo truthy value hoga

// falsy value
// false, 0 , -0 , BigInt, "", null , undefined , NAN

// truthy value
// "0", 'false' , " " , [] , {} , function(){} -> it is empty function

// if (useremail.length === 0) {
//     console.log("array is empty");
// }


// const emptyobj = {}
// if (Object.keys(emptyobj).length === 0) {
//     console.log("object is empty");
// }


// nullish coalescing operator (??): null undefined

// let val1;
// val1 = 10 ?? "rahul"
// // val1 = null ?? 10
// // val1 = undefined ?? 15
// val2 = null ?? 10 ?? 10
// console.log(val1);

// Rule: left side agar null ya undefined ho → tab right side return karega; warna left side return karega  


// Terniary operator

// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")
// Syntax: condition ? valueIfTrue : valueIfFalse 