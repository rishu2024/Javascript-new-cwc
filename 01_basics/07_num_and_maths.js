const score = 400
// console.log(score);


const balance = new Number(400)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // --> no like that 100.00

const othernumber = 23.89899
// console.log(othernumber.toPrecision(5));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); 
// here we using , for US standards
// for indian value we use (en-IN)




//**********************maths******************** */

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.abs(4));
// .abs --> properties change negitive value into positive but not positive into negetive

console.log(Math.round(4.49999999));
// .round -> chose round off value 

console.log(Math.ceil(4.2));
// .ceil -> choose top value

console.log(Math.floor(4.9));
// .ceil -> choose lowest value


console.log(Math.max(4,5,7,9,3,5,1,8,5,0,2,1,4));
console.log(Math.min(4,5,7,8,3,5,2,8,2,6,9,7,4));

console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.random()*10 + 1);
console.log((Math.random()*10)+ 1);
console.log(Math.floor(Math.random()*10) + 1);
// Math.floor doing round off the number
// to avoiding 0 after decimal we use +1 after *10 in this code
// +1 will avoiding 0 in output number

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min)
);









