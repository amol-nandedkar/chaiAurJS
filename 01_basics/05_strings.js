const name = "Amol";
const repoCount = 3;

console.log(name + repoCount + " value"); // old way of printing, better to use string interpolation.

console.log(`Hello My Name is ${name} and my Repo count is ${repoCount}`); // String Interpolation.

const gameName = new String("Amol's Game");
 
console.log(gameName[0]); // A
console.log(gameName.__proto__); 

console.log(gameName.toUpperCase());
console.log(gameName.length);

console.log(gameName.split(' '));

console.log(gameName.substring(0,5)); //Amol'
console.log(gameName.substring(-2,5)); //Amol'
console.log(gameName.slice(0,5)); //Amol'
console.log(gameName.slice(-9,5)); //ol'

