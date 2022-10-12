const form = document.getElementById('form');
const email =document.getElementById('email');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    formInput();
});

function formInput(){
   const emailValue= email.value.trim();
   if(emailValue === ''){
    errorFor(email,'Не корректный формат данных!')
   } else if (!formEmail(emailValue)){
    errorFor(email,'Не корректный формат данных!')
   } else {
    succesFor(email, alert('Вы успешно зарегистрировались!'))
   }
};
function errorFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className='form_1 error';
}
function succesFor(input){
    const formControl = input.parentElement;
    formControl.className='form_1 success';
}

function formEmail(email){
    return  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/.test(email);
}

    

