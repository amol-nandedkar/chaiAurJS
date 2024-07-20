// singleton : created from constructores , not from lterals.
//Object.create

// object literals.

const mySym = Symbol("Key1");

const JsUser = {
    name: "Amol",
    "full name": "Amol Nandedkar",
    [mySym] : "mykey1",
    age : 38,
    email: "a@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
};

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);


//Object.freeze(JsUser); // object values can not be changed. 
//JsUser.name="adsfa";
//console.log(JsUser);


JsUser.greetings = function(){
    console.log(`Hello ${this["full name"]}`);
}

console.log(JsUser.greetings());



