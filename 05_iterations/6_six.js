// const coding = ["js" , "ruby" , "java" , "python" , "cpp"]

// coding.forEach((item) => {
//     console.log(item);
// })


// const coding = ["js" , "ruby" , "java" , "python" , "cpp"]

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item
// })
// console.log(values);
// .forEach koi bhi value return nahi krta ha


// const myNums = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]
// const newNums = myNums.filter((num) => num > 4)
// console.log(newNums);
// .filter value return krta ha


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter((num) => {
//     return num > 4
// })
// // agar hm scope {} start kr diye ha to hmko return likhna padhega
// console.log(newNums);


// const newNums = []
// myNums.forEach((Num) => {
//     if (Num > 4) {
//         newNums.push(Num)
//     }
// })

// console.log(newNums);

const books = [
    { tittle: 'book one', genre: 'fiction', publish: 1981, edition: 2004 },
    { tittle: 'book two', genre: 'non-fiction', publish: 1982, edition: 2005 },
    { tittle: 'book three', genre: 'history', publish: 1983, edition: 2006 },
    { tittle: 'book four', genre: 'non-fiction', publish: 1984, edition: 2007 },
    { tittle: 'book five', genre: 'science', publish: 1985, edition: 2008 },
    { tittle: 'book six', genre: 'fiction', publish: 1986, edition: 2009 },
    { tittle: 'book seven', genre: 'history', publish: 1987, edition: 2010 },
    { tittle: 'book eight', genre: 'science', publish: 1988, edition: 2011 },
];
// const userbooks = books.filter((bk) => bk.genre === 'history')

// const userbooks = books.filter((bk) =>  bk.publish >= 1984 );
// const userbooks = books.filter((bk) =>  {return bk.publish >= 1984 });
const userbooks = books.filter((bk) =>  {return bk.publish >= 1984 && bk.genre ==='science'});
console.log(userbooks);