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

function loginUserMessage(username=){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("atul"))
console.log(loginUserMessage())