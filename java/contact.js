var nameError= document.getElementsByClassName('name-error');
var phoneError= document.getElementsByClassName('phone-error');
var emailError= document.getElementsByClassName('email-error');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if( name.length == 0 ){
        nameError.innerHTML = 'Name is required'
        return false;
    }


    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*&/)){
        nameError.innerHTML = 'Full Name';
        return false
    }
    nameError.innerHTML = "perfect";
    return true;
}


function validatePhone(){
    var name = document.getElementById('contact-phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = "Phone number is required";
         return false;
    }
   

    if (phone.length  == 10 ){
        phoneError.innerHTML= "Phone number is 10 numbers long";
        return false;
    }

    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = "Phone number is required"
    }

    phoneError.innerHTML ="looks good"
    return true;
}

function validateEmail(){
    var email = document.getElementById('contant-email').value;

    if(emailError.length == 0){
    emailError.innerHTML= "email should have a @ in it. "
    return false;}

    if(!email.match(/^[A-Za-z]\._/[0-9]*[@][A-Za-z]*[\.]{2,4}$/)){
    emailError.innerHTML = 'Email invalid'
    return false;}
   
    emailError.innerHTML = 'Looks good';
    return true;
}

