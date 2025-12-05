const mynums = [1, 2, 3]
// const total = mynums.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// } ,0)
// jo bhi , ke baad value dete ha woo aa jate ha


const total = mynums.reduce((acc, currval) => acc + currval, 0)
console.log(total);

const shoppingcart = [
    {
        itemname: "js course",
        price: 2999
    },
    {
        itemname: "python course",
        price: 3999
    },
    {
        itemname: "c++ course",
        price: 5999
    },
    {
        itemname: "data engineer",
        price: 8999
    }
]
const pricetopay = shoppingcart.reduce((acc, item) => acc + item.price, 0)
console.log(pricetopay);
