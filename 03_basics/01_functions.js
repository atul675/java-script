function sayMyName(){
  console.log("A");
  console.log("T");
  console.log("U");
  console.log("L");
  

 }

// sayMyName()


// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }
function addTwoNumbers(number1,number2){
    
        // let result = number1 + number2
        //  return result
        return number1 + number2
}

const result = addTwoNumbers(4,4)
// console.log("Result: ", result);

function loginUserMessage(Username=sam){
    if(username === undefined){
        // console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("atul"))
// console.log(loginUserMessage())

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500))
const user = {
    username:"atul",
    Price: 200
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is $
        {anyObject.Price}`);
    
}

// handleObject(user)
handleObject({
    username:"sam",
    price:300
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500]));

