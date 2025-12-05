// for

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         // console.log("5 is the best number");
//     }
//     // console.log(element);
// }
// console.log(element);

for (let i = 0; i <= 10; i++) {
    console.log(`outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop value ${j} and inner loop ${j}`);
        console.log(i + `*` + j + `=` + i * j);
        // console.log(`${i} * ${j} = ${i * j}`);
    }
}



// let myArray = ["flash", "batman", "superman"]
// // console.log(myArray.length);
// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     // console.log(element);
// }


// break and continue
// for (let index = 1; index <= 20; index++) {
//     if (i == 5) {
//         console.log(`detected 5`);
//         break
//     }
//     console.log(`value of index ${index}`);
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        continue
        // ek  baar maaf kar do
    }
    console.log(`value of index is ${index}`);
}