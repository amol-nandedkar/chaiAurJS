const accountId = 32324;
let accountEmail = "abc.gmail.com";
var accountPassword = "";
accountCity = "Hyd";
let accountState; // value will be undefined.



// accountId = 123; changing value of const is not possible.

accountEmail = "xyz.abc@in";
accountPassword = "12345";
accountCity = "Indore";

/* 
    Never use var as it has problem with Scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);