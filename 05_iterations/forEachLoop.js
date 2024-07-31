const coding = ["js", "java", "cpp", "ruby", "python"];

// coding.forEach( function (item) {
// console.log(item);
// });

// coding.forEach( (item) => {
// console.log(item);
// } );

// function print(item) {
//     console.log(item);
// }
// coding.forEach(print);

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} );


const myCoding = [
    {
        langName : "javaScript",
        langFile : "js"
    },
    {
        langName : "Java",
        langFile : "java"
    },
    {
        langName : "python",
        langFile : "py"
    }
];

myCoding.forEach( (obj)=> {
    console.log(obj.langName + ' ' + obj.langFile);
} );