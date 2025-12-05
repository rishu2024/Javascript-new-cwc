const name = "abhinav"
const repocount = 50

// console.log(name + repocount + "value"); = old syntax 

// console.log(`hello my name is ${name} and my repocount is ${repocount}`); // the name of this new method is string interpolation

// here we use backticks (```````````` );

const gameName = `abh-in-av`
// [] = use for key value access
// () = store a string

console.log(gameName[0]);
console.log(gameName.__proto__);
// .is use with variable to excess protoype method  

console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt("4"));
console.log(gameName.indexOf("i"));

const newString = gameName.substring(0,4)
// we can't use negetive value in substring
console.log(newString);

const anotherstring = gameName.slice(-8,4) 
// we also use negetive value in slice
console.log(anotherstring);

const newstringone = "    abhinav    "

console.log(newstringone);
console.log(newstringone.trim());
// .trim remove starting space and end space

const url = "https://abhinav.com/abhinav20$rajput"
console.log(url.replace('20$','-'));

console.log(url.includes('abhinav'));
console.log(url.includes('salman'));

console.log(gameName.split('-'));









// let str = "abhinav";
// console.log(str.slice(4,6));
// let str = "hello"
// console.log(str.replace("h","v"))

// let stu = "abhinav";
// let stu2 = "sankik";
// let stu3 = "sankik";
// let stu4 = "sankik";
// console.log(stu3.concat("  ",stu2,stu3,stu4))
// // console.log(stu + " ",stu2);

// let name1 = "sankik\nsuman"
// console.log(name1.length);















