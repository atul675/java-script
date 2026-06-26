const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 23.4562

// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000000
// console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++++++maths++++++++++++++++++

console.log(Math);
console.log(Math.abs(4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));
console.log(Math.min(1,3,6,9,8));
console.log(Math.max(3,5,6,6,4,2,8,9));

console.log(Math.random());
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log (Math.floor(Math.random() * (max - min + 1))+ min)
