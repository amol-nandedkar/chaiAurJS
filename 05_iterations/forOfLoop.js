// for of

const arr = [1,2,3,4,5,6];

for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello amol!!!"
for (const greet of greeting) {
    // console.log(`character is ${greet}`);
}

const map  = new Map(); // unique values and stores in order
map.set('IN', 'India');
map.set('USA', 'America');
map.set('FR', 'France');
console.log(map);


for (const [key,value] of map) {
    console.log(key, ' === ', value);
}


// for of loop does not work on normal onjects