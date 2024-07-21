let a = 10
const b = 20;
var c = 30;

if(true){
    var c = 300; // goes beyond the scope
    let d = 40;
    const e = 50;
    let a = 1000; // here a is 1000
}
// d and e is not availale;
// here a is 10
console.log(a);
console.log(b);
console.log(c); // 300




function one() {
    const username = "amol";
    
    function two() {
        const website = "youtube";
        console.log(username);
    }
 //   console.log(website); // it will give error

    two();
}
one();





addOne(5);
function addOne(params) {
    return params+1;
}


addTwo(5); // this will give error. Hoisting
const addTwo = function (params) {
    params + 2;
}


