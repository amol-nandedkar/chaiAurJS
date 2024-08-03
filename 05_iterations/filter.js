//const coding = ["js", "java", "cpp", "ruby", "python"];

// const values = coding.forEach(element => { // for-each does not retun any values.
//     console.log(element);
//     return element;
// });

// console.log(values);


const myNums = [1,2,3,4,5,6,7,8,9,10];

//let newNums = myNums.filter( num => num > 4);
let newNums = myNums.filter( (num) => { // if we use {} then use return stmt.
    return num > 4;
});

// console.log(newNums);



const books = [
    {title:'book1', genre:"History",publish:2001,edition:2020},
    {title:'book2', genre:"Fiction",publish:1990,edition:1995},
    {title:'book3', genre:"selfHelp",publish:1995,edition:2013},
    {title:'book4', genre:"History",publish:2014,edition:2011},
    {title:'book5', genre:"selfHelp",publish:1994,edition:1999},
    {title:'book6', genre:"Fiction",publish:2004,edition:2014},
    {title:'book7', genre:"History",publish:2000,edition:2011},
    {title:'book8', genre:"selfHelp",publish:2009,edition:2018},
    {title:'book9', genre:"Fiction",publish:2017,edition:2021},
    {title:'book10', genre:"History",publish:2021,edition:2024}
];

// let userBooks = books.filter((bk)=> bk.genre === 'Fiction');

userBooks = books.filter((bk) => { 
    return (bk.publish >= 2000 && bk.genre === 'Fiction')
});
console.log(userBooks);


