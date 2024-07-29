const email = "abc@gmail.com";

if (email) { // true
    console.log(`got email`);
}
else{
    console.log('no email');
}

if ("") { // false
    console.log(`got email`);
}
else{
    console.log('no email');
}


/* falsy values : false, "", null, undefined, 0, -0, BigInt 0n, Nan

Truthy values : [], any non empty string, "0", "false", 'false'," ", true, non zero number, any not null object, {}, function(){}

*/



// nullish coalescing operator (??) for null and undefined values

let var1;
var1 = 5 ?? 10; // 5
var1 = null ?? 10; // 10
var1 = undefined ?? 15; // 15
var1 = null ?? 15 ?? 20; // 15


console.log(var1);



// terniary operator

let value = 100;
(value > 80) ? console.log(' > 80 ') : console.log(' < 80 ');