const validationInputRef = document.querySelector('#validation-input');
const length = parseInt(validationInputRef.dataset.length);


validationInputRef.addEventListener('blur', (event)=>{
   if (event.currentTarget.value.length === length) {
    event.currentTarget.classList.add('valid');
   } else {
       if(event.currentTarget.classList.contains('valid')){
        event.currentTarget.classList.remove('valid');
     }
   }

   if (event.currentTarget.value.length !== length){
    event.currentTarget.classList.add('invalid');
    } else {
    if(event.currentTarget.classList.contains('invalid')){
     event.currentTarget.classList.remove('invalid');
     } 
   }
})

