// const tinderUser = new Object() // this is singleton object
const tinderUser = {} // this is non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "abhinav"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "abhin1243@gmail.com",
    fullname: {
        username: {
            firstname: "abhinav",
            lastname: "rajput"
        }
    }
}
// console.log(regularUser.fullname.username.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)
// we use empty object {} for target in memory

const obj3 = {...obj1,...obj2,...obj4} // we use 90% of time this one

console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
     {
        id: 1,
        email: "h@gmail.com"
    },
     {
        id: 1,
        email: "h@gmail.com"
    },
     {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
// .entries me first property is always key and second is value
// .entries it use less
console.log(tinderUser.hasOwnProperty("isLoggedIn"));



