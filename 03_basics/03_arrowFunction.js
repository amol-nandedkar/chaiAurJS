const user = {
    username : "amol",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to website!!!`);
    }
}

user.welcomeMessage();
user.username = "Sam";
user.welcomeMessage();

console.log(this); // {}, since it is in node


// function chai(){
//     const name1 = "acd";
//     console.log(this); // gives a lot
//     console.log(this.name1); // undefined.    **************
// }

// chai();

const chai1 =  () => {
    const name1 = "acd";
    console.log(this); // {}
    console.log(this.name1); // undefined.    **************
}

chai1();


// const addTwo = (n1, n2) => {
//     return n1+n2;
// }
const addTwo = (n1, n2) => ( n1 + n2 ); // implicite return in arrow function
const getObj = () => ( {username: "amol"} ); // implicite return in arrow function
const getObj1 = a => ( {username: "amol"} ); // implicite return in arrow function, and passign only one argument 'a'
