const myArr = [1,2,3,4,5];
console.log(myArr[0]);


const myArr2 = new Array(1,2,3,4);

myArr.push(6);
console.log(myArr);

myArr.pop(); // removes last
console.log(myArr);

myArr.unshift(9); // insert at first.
myArr.shift(); // removes first.
console.log(myArr);


// slice and splice

console.log("A ", myArr); //A  [ 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1,3);
console.log(myn1); // [ 2, 3 ]
console.log("B ", myArr); B  [ 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1,3);
console.log("C ", myArr);// C  [ 1, 5 ]
console.log(myn2); // [ 2, 3, 4 ]

