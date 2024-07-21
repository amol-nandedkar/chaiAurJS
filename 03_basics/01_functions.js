function add(number1, number2){ //parameters
    console.log(number1 + number2);
}

const result = add(3,4); // arguments
console.log(result); // undefined




function add1(number1, number2){ 
    return number1 + number2;
}

const result1 = add1(2,4);
console.log(result1); // 6






function logInUserMessage(username = "sam"){ // we can have default value to avoid undefined arguments
    // if (username === undefined){
    if (!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}
console.log(logInUserMessage("Amol"));
console.log(logInUserMessage());



function calculateCartPrice(...num1){ // rest operator, can accept any number of arguments
    return num1;
}

// function calculateCartPrice(var1, var2, ...num1){ 
//     return num1;
// }

calculateCartPrice(100);
calculateCartPrice(100,200,300);



const user = {
    username : "amol",
    price : 99
}


function handleObject(anyObject) {
    console.log(`UserName is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user);
handleObject({
    username : "nandedkar",
    price : 9934
});

