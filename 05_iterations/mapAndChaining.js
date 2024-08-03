// map fucntion runs on all elements

let myNum = [1,2,3,4,5,6,7,8,9];

//let newNums = myNum.map((num) => num+10);


//chaining

let newNums  = myNum.
                map((num) => num * 10)
                .map((num) => num + 1) // num will get value from the return of previous map 
                .filter((num) => num >50);

console.log(newNums);
