const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log( `acc: ${acc} and currval: $(currval}`);
//     return acc + currval

// }, 0)

const myTotal = myNums.reduce ( (acc, curr) => acc+curr, 0)
                        
console.log(myTotal);

const shoppingCart = [
    {
      itemName: "js course",
      price: 299  
    },
    {
      itemName: "c++ course",
      price: 2995
    },
    {
      itemName: "python course",
      price: 2990 
    }
]

shoppingCart.reduce( (acc,item) => acc + item.price,0)
console.log("price to pay");