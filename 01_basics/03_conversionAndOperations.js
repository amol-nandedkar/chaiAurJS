let score = "35";

console.log(typeof score);
console.log(typeof(score));

let scoreInNumber = Number(score);
console.log(typeof(scoreInNumber)); // number

score = "35abc";
scoreInNumber = Number(score);
console.log(typeof(scoreInNumber)); // number but value will be NaN
console.log(scoreInNumber); // NaN

score = null;
scoreInNumber = Number(score);
console.log(typeof(scoreInNumber)); // number but value will be 0
console.log(scoreInNumber); // 0

score = undefined;
scoreInNumber = Number(score);
console.log(typeof(scoreInNumber)); // number but value will be NaN
console.log(scoreInNumber); // NaN

score = false;
scoreInNumber = Number(score);
console.log(typeof(scoreInNumber)); // number but value will be NaN
console.log(scoreInNumber); // NaN


// valid number stirng to number is number
// invalid numner string to numner is NaN
// null to number is 0;
// undefined to number is NaN
// true to number is 1
// false to number is 0

let isLogedIn = undefined;

let isLoggedInBoolean = Boolean(isLogedIn);
console.log(isLoggedInBoolean);

// 1 to boolean is true
// 0 to boolean is false
// "" to boolean is false
// "asd" to boolean is true
// null to boolean is false
// undefined to boolean is false