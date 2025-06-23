

function checkEmail (event){
    event.preventDefault()
    let email = document.querySelector('#email').value;

    // console.log(email);
    

  
    if(email ==="" || !email.includes('@'))
   {
        alert('Enter Valid Email');
        return;

    }
    window.location.href='success.html';

}

let form = document.querySelector('form');

form.addEventListener('submit',checkEmail);
