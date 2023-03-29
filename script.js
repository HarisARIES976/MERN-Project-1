

let register = document.getElementById('btn');
let userName = document.getElementById('uName');
let email = document.getElementById('email');
let password = document.getElementById('password');
let cPassword = document.getElementById('cPassword')

let showName = document.getElementById('showName');
let showPass = document.getElementById('showPassword');

let err = document.getElementsByClassName('err');

function validate(){
    if(userName.value === ""){
        err[0].innerHTML = "Enter Name"
       userName.style.border = "1px solid red"
       return false;
    }
    else if(userName.value.length<3 || userName.value.length>15) {
        err[0].innerHTML = "character range 3-15"
       userName.style.border = "1px solid red"
       return false;
    }
    else if(email.value === ""){
        err[1].innerHTML = "Enter email please";
        email.style.border = "1px solid red"
        return false;
    } 
    else if(email.value.indexOf("@")<=0  ){
        err[1].innerHTML = "Enter a valid email containing @";
        email.style.border = "1px solid red"
        return false;
    } 
    else if(email.value.charAt(email.value.length-4) !== "."){
        err[1].innerHTML = "Enter a valid format containing .";
        email.style.border = "1px solid red"
        return false;
    } 

    else if(password.value === ""){
        err[2].innerHTML = "Enter Password please";
        password.style.border = "1px solid red"
        return false;
    } 
    else if(password.value.length<3 || password.value.length>15){
        err[2].innerHTML = "character range 3-15"
        password.style.border = "1px solid red"
        return false;
    }
    else if(cPassword.value === ""){
        err[3].innerHTML = "confirm password please"
        cPassword.style.border = "1px solid red"
        return false;
    }
    else if(password.value !== cPassword.value){
        err[3].innerHTML = "password does not match"
        cPassword.style.border = "1px solid red"
        return false;
    }
    else{
        showName.innerHTML = userName.value;
        showPass.innerHTML = password.value;
        return true;
    }
   


}