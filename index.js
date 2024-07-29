const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email') ;
const query = document.querySelector('.query-type') ;
const message = document.querySelector('.message') ;
const condition = document.querySelector('.condition')





document.querySelector('.query1').addEventListener('click',()=>{
    document.getElementById('query1').checked = true ;
    document.querySelector('.query1').classList.add('selected'); 
    document.querySelector('.query2').classList.remove('selected'); 

});

document.querySelector('.query2').addEventListener('click',()=>{
    document.getElementById('query2').checked = true ;
    document.querySelector('.query1').classList.remove('selected'); 
    document.querySelector('.query2').classList.add('selected'); 

});

document.getElementById('submit').addEventListener("click",(event)=>{
    event.preventDefault();
    if(firstName.children[1].value.length == 0 ){
        firstName.classList.add('nameError') ;
        firstName.children[1].classList.add('error');
    }
    else{
        firstName.classList.remove('nameError') ;
        firstName.children[1].classList.remove('error');
    }
    if(lastName.children[1].value.length == 0 ){
        lastName.classList.add('nameError') ;
        lastName.children[1].classList.add('error');

    }
    else{
        lastName.classList.remove('nameError') ;
        lastName.children[1].classList.remove('error');
    }
    if(!isValidEmail(email.children[1].value)){
        email.classList.add('emailError') ;
        email.children[1].classList.add('error');
    }
    else{
        email.classList.remove('emailError') ;
        email.children[1].classList.remove('error');
    }

    if (!query.children[1].children[0].children[0].checked && !query.children[1].children[1].children[0].checked ) {
        query.classList.add('queryError')
    }
    else{
        query.classList.remove('queryError') ;
    }

    if ( message.children[1].value.length == 0) {
        message.children[1].classList.add('error');
        message.classList.add('nameError');
    }
    else{
        message.children[1].classList.remove('error');
        message.classList.remove('nameError');
    }
    if(!document.getElementById("condition").checked){
        condition.classList.add('conditionError') ;
    }
    else{
        condition.classList.remove('conditionError') ;
    }

    if (!firstName.children[1].value.length == 0 
        && !lastName.children[1].value.length == 0
        && isValidEmail(email.children[1].value)
        && (query.children[1].children[0].children[0].checked || query.children[1].children[1].children[0].checked)
        && !message.children[1].value.length == 0
        && document.getElementById("condition").checked
    ) {
        document.querySelector('.success').style.display = 'block' ;
        window.location.href = "#";
        setTimeout(()=>{
        document.querySelector('.success').style.display = 'none' ;
        }, 4000);
    }
    
})



function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}