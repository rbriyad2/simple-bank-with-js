document.getElementById('login-btn').addEventListener('click', function(){
    const emailField= document.getElementById('email-field');
    const passwordField = document.getElementById('password-field');
    const inputEmailField = emailField.value;
    const inputPasswordField = passwordField.value;
    
    if( inputEmailField == 'bank@gmail.com' && inputPasswordField == '123456'){
        window.location.replace("bank.html");
        
    }
    else{
        const wrongInfo = document.getElementById('wrong');
        wrongInfo.classList.remove('invisible');

    }
})