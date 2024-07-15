// > < <= >= == !=

console.log(2 > "1"); // true
console.log(2 < "1"); // false
console.log("02" > 1); // true

console.log(null > 0); // false , null converts to 0
console.log(null == 0); // false , null does not converts to 0
console.log(null >= 0); // true , null converts to 0

console.log(undefined > 0); // false 
console.log(undefined == 0); // false 
console.log(undefined >= 0); // false 

// === strict check, also checks data types

console.log(2 === "1"); // false