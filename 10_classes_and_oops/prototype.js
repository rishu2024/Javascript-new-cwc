// let myname = "abhinav   "
// let channel = "abhivlog   "
// console.log(myname.trueLength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.abhinav = function(){
    console.log(`abhinav is present in all objects`);
    
}
Array.prototype.heyAbhinav = function(){
    console.log(`abhinav says hello`);
}

// heroPower.abhinav()
// myHeros.abhinav()
// myHeros.heyAbhinav()
// heroPower.heyAbhinav()



// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport , Teacher)

let anotherUsername = "chaiAurCode     "
String.prototype.trueLength  = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`true length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"abhinav".trueLength()
"icetea".trueLength()