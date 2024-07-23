// we use iife to remove the global scope pollution.

(function chai(){
    console.log(`DB Connected`);
})();


// ()() , fisrt is definition and second is execution


// iife as arrow function
( (name) => {
    console.log(`Another DB Connected - ${name}`);
})('Amol');
