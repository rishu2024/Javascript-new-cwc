// dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreateDate = new Date(2025,09,16)
// console.log(myCreateDate.toDateString());
// Month will start from 0 in javascript in array form (eg - 0 month is jan,1 month is feb)

// let myCreateDate = new Date(2025,9,16,5,3,33)
// console.log(myCreateDate.toLocaleString());

let myCreateDate = new Date("10-16-2025")
// // Month will start from 1 in javascript mm-dd-yy form (eg - 1 month is jan,2 month is feb)
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = new Date().getTime()
// new Date().gettime() is also use instant of Date.now

// console.log(myTimeStamp);
// console.log(myCreateDate);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
// + 1 use beecause we can't confuse 
// output is 9 because it start from 0
console.log(newDate.getDay());
console.log(newDate.getDate());

// string interpolation
// `${newDate.getDay()}and the time is`

// newDate.toLocaleString('default', {
//     weekday: 'long',
//     timeZone:
// })









