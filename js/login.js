// step 1: added clicked handler with event listener
document.getElementById('btn-sub').addEventListener('click', function(){
    // step 2: getting the email address in the email input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step 3: get password in the password input field
    // a. set the id of password line in HTML
    // b. get the element 
    // c. get the value from element
    const passwordfield = document.getElementById('user-password');
    const password = passwordfield.value;
    if(email === 'bapertaka@g.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        console.log('Tui amar shontan na')
        
    }
})
