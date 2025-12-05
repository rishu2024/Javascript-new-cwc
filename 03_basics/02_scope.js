// let a = 10
// const b = 20
// var c = 30

// var c = 300
// let a = 300
// if (true) {
//     let a = 10
// const b = 20
// console.log(a);
// console.log("inner", a);
// function addnum(){

// }
// // var c = 30
// }
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
// }
// console.log(a);
// console.log(b);
// console.log(a);

// scope ke bahar wala andar jayega par scope ke andar wala bahar nahi jayega

// bahar wale ko global scope bolte ha aur andar wale ko block scope bolte ha

function one() {
    const username = "Abhinav"
    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}
// one()

if (true) {
    const username = "abhinav"
    if (username === "abhinav") {
        const website = " youtube"
        // console.log(username + website);  
    }
    // console.log(website);  
}
// console.log(username);

// ++++++++++++intresting+++++++++++++

function addone(num) {
    return num + 1
    // is case me hm console log ko function se phle la skte ha
}
console.log(addone(5));


const addTwo = function (num) {
    return num + 2
    // is case me hm console log ko function se phle nahi la skte ha
}
console.log(addTwo(5));

