const user = {
    username: "atul",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "atul"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "atul"
//     console.log(this.username);

// }

// const chai = () => {
//     let username = "atul"
//     console.log(this.);

// }

// chai()

// const addTwo = (num1,num2) => {
//     return num1+num2
// }

// const addTwo = (num1, num2) => (num1 + num2)
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "atul"})



console.log(addTwo(3,4))


// const myArray = [2,3,5,6,8]

// myArray.forEach()