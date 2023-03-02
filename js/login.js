// step-1 :submit button clicked
document.getElementById('btn-submit').addEventListener('click', function(){
    console.log('submit button clicked');
    // step-2 :get the email 
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3: get password
    // set id on the html element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
   
    // step-4 verify email pass
    if(email === 'imran@gmail.com' && password ==='imran123'){
        console.log('valid user')
    }
    else{
        console.log('invalid user')
    }
})
