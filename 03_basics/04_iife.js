// Immediately Invoked Function Expressions (IIFE)

// function chai(){
//     console.log("DB connected");  
// }
// chai()


(function chai(){
    // yeh named IIFE hai
    console.log("DB connected");  
})();
// ; jaruri ha cote ko end krne ke liye nahi to error aa skta ha
// here we using IIFE
// () first parenthesis me hum function ki defination likhne wale ha
// () second parenthesis me hum execution call krege


// interview me bolna ha agar puche ki IIFE kyu use krte ha

// --> global scope ke pollution se problem hote ha isliye usse hatane ke liye humne IIFE ka use kiya 

(function aurcode(){
    console.log("DB connected two");  
})();


(()=>{
    console.log("DB connected two");  
})();


((name)=>{
    // simpled IIFE hai
    console.log(`DB connected two ${name}`);  
})(`Abhinav`);


function rrr(){
    console.log("abhinav");
}
rrr()

(() => {
    console.log("abhinav");
})

// two IIFE ek file me likhna ha to last me ; jarur dena nahi to error ayega


// let val1 = 10
// let val2 = 5
// function addnum(num1, num2) {
//     let total = num1 + num2
//     return total
// }
// let result1 = addnum(val1, val2)
// let result2 = addnum(10, 2)
// console.log(result1);
// console.log(result2);


