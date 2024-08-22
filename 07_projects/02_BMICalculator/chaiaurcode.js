let result = document.getElementById('results');
let form = document.querySelector('form');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let height = parseInt(document.querySelector('#height').value);
    let weight = document.querySelector('#weight').value;

    if(height === '' || height <0 || isNaN(height)){
        result.innerHTML = "Please give a valid Height !!!"
    } else if(weight === '' || weight <0 || isNaN(weight)){
        result.innerHTML = "Please give a valid Weight !!!"
    } else {
        const bmi = (weight / ((height*height)/1000)).toFixed(2);
        result.innerHTML = `<span>BMI is : ${bmi} </span>`;
    }
    

});
