/* JavaScript is a dynamically typed language. Because data type will 
   automatically assigned at the time of compilation or code execution. */

// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n

console.log(typeof bigNumber);

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
     name: "vaibhav",
     age: 22
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "vaibhavpawaledotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email:"vaibhav@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "vp@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

