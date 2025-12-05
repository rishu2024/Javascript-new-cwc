// let name = ["rahul","ravi","abhinav","sankik"];

// for(let ch of name){
//     console.log(ch.toUpperCase());

// }
// console.log(name[0]);
// console.log(name[1]);

// const arr = ["1" , "2" ,"3" , "4"]
// for(const i of arr){
// console.log(i.search(2));
// }
// let name = ["sankik","rahul","sankik","abhinav","ravi","ram"];
// let result =name.slice(0,3);
// console.log(result);
// let marks = [34,56,78,65,99,24];
// let output =marks.slice(0,2);
// console.log(output);


// const coding = ["js", "cpp", "python", "ruby", "java"]
// coding.forEach(function (string) {
//     console.log(string);
// })

// coding.forEach( (value) => {
// console.log(value);
// });


// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })


const myCoding = [
    {
        languageName: "javascript",
        languageNameFile: "js"
    },
    {
        languageName: "java",
        languageNameFile: "java",
    },
    {
        languageName: "python",
        languageNameFile: "py"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageNameFile);
})

