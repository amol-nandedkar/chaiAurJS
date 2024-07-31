const myObj = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'Ruby',
    swift : 'Swift by apple'
}

for (const key in myObj) {
    // console.log(key); // print keys
    // console.log(myObj[key]);  // print values
}

const arr = [11,12,13,14,15,16,17,18,19]

for (const key in arr) {
//    console.log(key); // print index of arr
//    console.log(arr[key]); // print values of arr
}

const map  = new Map(); // unique values and stores in order
map.set('IN', 'India');
map.set('USA', 'America');
map.set('FR', 'France');
console.log(map);

for (const key in map) {
    console.log(key); // does not print anything
}