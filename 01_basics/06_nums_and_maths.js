const score = 400;
console.log(score); // 400 

const balance = new Number(100);
console.log(balance); // [Number: 100]

console.log(balance.toString());
console.log(balance.toFixed(2)); //100.00


const anotherNumner = 89.7634;
console.log(anotherNumner.toPrecision(3)); //89.8
console.log(anotherNumner.toPrecision(2)); //90
console.log(anotherNumner.toPrecision(1)); // 9e+1


const hundred = 1000000000;
console.log(hundred.toLocaleString()); //1,000,000,000
console.log(hundred.toLocaleString('en-IN')); //1,00,00,00,000

Number.MAX_VALUE;
Number.MAX_SAFE_INTEGER;
Number.MIN_VALUE;



// ********************** Maths ****************************

console.log(Math.abs(-4)); //4

console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.6)); // 5
console.log(Math.floor(4.6)); // 4
console.log(Math.min(3,7,4,1,0));

console.log(Math.random()); // random 0 to 1


const min  = 10;
const max = 30;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);



