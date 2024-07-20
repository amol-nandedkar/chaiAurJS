// Object Singelton

const tinderUser = new Object();

tinderUser.id = "123";
tinderUser.name = "sam";
tinderUser.isLoggedIn = false;

const regularUser = {
    email: "abc@gmail.com",
    fullName : {
        userFullNmae : {
            firstName : "Amol",
            lastName : "Nandedkar"
        }
    }
};
console.log(regularUser.fullName.userFullNmae.firstName);


const ob1 = {
    1:"a", 2:"b"
}
const ob2 = {
    3:"c", 4:"d"
}

const ob3 = {ob1, ob2};
console.log(ob3); // { ob1: { '1': 'a', '2': 'b' }, ob2: { '3': 'c', '4': 'd' } }

const ob4 = Object.assign({}, ob1, ob2); // {} is the target
console.log(ob4); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const ob5 = {...ob1, ...ob2};
console.log(ob5);// { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


const users = [
    {
        id:1,
        name:"a"
    },
    {
        id:1,
        name:"a"
    },
    {
        id:1,
        name:"a"
    }

]

console.log(users[1].name);


console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // [ '123', 'sam', false ]
console.log(Object.entries(tinderUser)); // [ [ 'id', '123' ], [ 'name', 'sam' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('abc')); // check the exisitence of property
