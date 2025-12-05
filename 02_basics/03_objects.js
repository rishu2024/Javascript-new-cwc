// singleton

// object literals

// Object.create => isko hi bolte ha constructor methods ke through aur issi ke under singleton bnta ha

const mysym1 = Symbol("key1")
const mysym2 = Symbol("key2")
const jsuser = {
    name: "abhinav",
    fullname: "abhi",
    mysym1: "mykey1",
    [mysym2]: "mykey2",
    // if agar mysym1 ko symbol ki tarah use krna ha to usko [mysym1] me likhege
    age: 18,
    location: "bengaluru",
    email: "abhianvk23455@gmail.com",
    isloggedIn: false,
    lastLogInDays: ["monday", "saturday"]
}
// keys like name,age,location behave like string inside a objects
// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["fullname"]);
// console.log(jsuser[mysym2]);
// console.log(typeof jsuser.mysym1);
// console.log(typeof jsuser.mysym2);

jsuser.email = "abhinavk@gmail.com"
// for overwrite value wwe use  = 
// Object.freeze(jsuser)
// for freeze the object iske baad change nahi hoga .freeze use krege
jsuser.email = "abhinav24353@gmail.com"
// console.log(jsuser);


jsuser.greeting =  function(){
    console.log("hello js user");
}

jsuser.greetingtwo =  function(){
    console.log(`hello JS user,${this.name}`);
}
// this. {} ke ander dege to object ke jo bhi property ha wo mil jaige

console.log(jsuser.greeting());
console.log(jsuser.greeting);
console.log(jsuser.greetingtwo());

