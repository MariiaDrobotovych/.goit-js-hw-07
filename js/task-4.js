const buttonDecrementRef = document.querySelector('[data-action="decrement"]');
const buttonIncrementRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');
let number = 0;

const decrement = () => {
    valueRef.textContent = number -= 1;
};
const increment = () => {
    valueRef.textContent = number += 1;
};

buttonDecrementRef.addEventListener('click', decrement);
buttonIncrementRef.addEventListener('click', increment);