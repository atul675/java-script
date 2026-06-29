// singleton
//obejct.create

// object literals 

const JsUser = {
    name : "Atul",
    age : 20,
    location : "Delhi",
    isLoggedIn : false
    
}

// console.log(JsUser["name"])
// console.log(JsUser.name)

JsUser.age = 22
// Object.freeze(JsUser)
JsUser.age = 24
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());