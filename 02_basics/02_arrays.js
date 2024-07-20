const marvel_heros = ["Thor", "IronMan", "Dr Starnge"];
const dc_heros = ["SuperMan", "BatMan", "flash"];

//marvel_heros.push(dc_heros); // pushes array only and do not acutually merge the arrays.

//console.log(marvel_heros); // [ 'Thor', 'IronMan', 'Dr Starnge', [ 'SuperMan', 'BatMan', 'flash' ] ]

// const combined_heros = marvel_heros.concat(dc_heros);

// console.log(combined_heros); // [ 'Thor', 'IronMan', 'Dr Starnge', 'SuperMan', 'BatMan', 'flash' ]

// spreading the arrays, it can accept any number of arrasys to join.
const all_heroes = [...marvel_heros, ...dc_heros];
console.log(all_heroes); // [ 'Thor', 'IronMan', 'Dr Starnge', 'SuperMan', 'BatMan', 'flash' ]


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const flat_array = another_array.flat(Infinity);
console.log(flat_array); /* [
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
  ]
*/

console.log(Array.isArray("Amol")); // false
console.log(Array.from("Amol")); // [ 'A', 'm', 'o', 'l' ]
console.log(Array.from({name:"amol"})); // []   ---- interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]


