// Primitive

// 7 types: String, Number, null, undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsidetemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 274673643437644n



// Reference (Non primitive)

//Array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"]
let myObj ={name:"Atul",age:20}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof outsidetemp);