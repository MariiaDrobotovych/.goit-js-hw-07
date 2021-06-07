const buttonDecrementRef = document.querySelector('[data-action="decrement"]');
const buttonIncrementRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');

const decrement = () => {
    valueRef.textContent = parseInt(valueRef.textContent) - 1;
};
const increment = () => {
    valueRef.textContent = parseInt(valueRef.textContent) + 1;
};

buttonDecrementRef.addEventListener('click', decrement);
buttonIncrementRef.addEventListener('click', increment);