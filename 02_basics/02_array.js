// const marvel_heros = ["thor","ironman","spiderman"]
// const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// ab output aa rha ha ["thor","ironman","spiderman["superman","flash","batman"]] yeha pe yeh nested array ho jayega

// const allhero = marvel_heros.concat(dc_heros);
// console.log(allhero);

// different between .push and .concat is .push() adds element(s) to the end of an existing array and modifies it, whereas .concat() merges arrays into a new array without modifying the originals.

// const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros);
// ... spread(operator) ek operators ha jo array ko spread kr deta ha

const anathorarray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = anathorarray.flat(Infinity)
console.log(real_another_array);

// .flat() nested arrays ko “flatten” kar deta hai, yani andar ke arrays ko ek single level me la deta hai.
// ek hack ha agar hum .flat(Infinity) dete ha to yeh sare array ko ek me kr dega

console.log(Array.isArray("abhinav"));
console.log(Array.from("abhinav"));
console.log(Array.from({name: "abhinav"})); // intresting for interview

// isko btana padhege kiska array bnana ha keys ka yeh values ka
// agar nahi bna payega tpo wo empty array dega


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
// .of return new array from set of elements




