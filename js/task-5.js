const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

nameInputRef.addEventListener('input',(event)=>{
    if(event.currentTarget.value.length === 0){
        nameOutputRef.textContent = 'незнакомец';
    } else {
        nameOutputRef.textContent = event.currentTarget.value;
    }
})