// # primative datatype

// total 7 types
// 1. string
// 2. Number
// 3. Boolean
// 4. null
// 5. undefined
// 6. symbol
// 7. bigInt

const score = 100
const scoreValue = 100.3

const isLogggedIn = false
const outsideTemp = null

// let userEmail;                output = undefined
// let userEmail = undefined;    output = undefined

const id = Symbol("123")
const anotherid = Symbol("123")

console.log( id === anotherid);

// const bignumber = 232443242n;
// console.log();




//  it is dynamic type language because here we cannot define variable type 

// # non primative datatype (reference)

// 1. array

const heros = ["shaktiman,spiderman,batman"]
// array comes under [] always;



// 2. objects

 let myobj = { 
   name: "abhinav",
   age:  22,
};
// object comes under {} always;
// we also store object in variable

// 3. function

const myFunction = function(){
  console.log("hello world");
}

console.log(typeof heros);
// function return function  which is called object function
// every non premative data return type is only object and only in function non premative return function object

// https://262.ecma-international.org/5.1/#sec-11.4.3
















// 🧾 List of typeof values (possible outputs)

// Data Type   	Example	         typeof Output
// String	      "hello"	          "string"
// Number	      22, 3.14	        "number"
// Boolean	    true, false         "boolean"
// Undefined	    let x;	         "undefined"
// Object	  {name: "Abhinav"}	    "object"
// Array	        [1,2,3]	          "object" (special kind of objects)
// Function	  function(){}	      "function"
// Null	         null	            "object" (historical mistake in JS)
// BigInt	       123n	            "bigint"
// Symbol	    Symbol("id")	      "symbol"