// reduce in array

const myNums = [1,2,3,4,5]

let myTotal = myNums.reduce(function(acc, currVal) {
    console.log(`acc : ${acc} and currVal ${currVal}`);
    
    return acc + currVal;
}, 0);

let myTotalArrow = myNums.reduce((acc, currVal) =>  acc + currVal, 10);

console.log(myTotalArrow);


const shoppingCart = [
    {
        itemName : "jsCourse",
        price : 299
    },
    {
        itemName : "pythonCourse",
        price : 999
    },
    {
        itemName : "javaCourse",
        price : 699
    }
];


const cartTotal = shoppingCart.reduce((acc , item) => acc + item.price,0);
console.log(cartTotal);

