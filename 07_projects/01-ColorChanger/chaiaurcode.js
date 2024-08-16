let body = document.querySelector('body');
let buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    body.style.backgroundColor = e.target.id;
  });
});
