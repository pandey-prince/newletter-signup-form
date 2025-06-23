# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [Continued development](#continued-development)
- [Author](#author)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview
-This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor]

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./images/screenshot2.jpg)






### Links

- Solution URL: [Add solution URL here](https://github.com/pandey-prince/newletter-signup-form)
- Live Site URL: [Add live site URL here](https://newletterSignupForm-princepandey.vercel.app)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Javascript





```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Newsletter signup form</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Manrope:wght@200..800&family=Outfit:wght@100..900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Young+Serif&display=swap" rel="stylesheet">
</head>
<body>
    <div class="parent">
        <div class="newsletter-content">
            <div class="heading">
                Stay updated!
            </div>
            <div class="discription">
                Join 60,000+ product managers receiving monthly updates on:
            </div>
            <div class="properties">
                <div class="icon">
                    <div class="list-icon">
                        <img src="images/icon-list.svg">
                    </div>
                    <div class="list-icon">
                        <img src="images/icon-list.svg">
                    </div>
                    <div class="list-icon">
                        <img src="images/icon-list.svg">
                    </div>
                    
                </div>
                <div class="list">
                    <div class="list-content">
                        Product discovery and building what matters
                    </div>
                    <div class="list-content">
                        Measuring to ensure updates are a sucess
                    </div>
                    <div class="list-content">
                        And much more!
                    </div>
                </div>
            </div>
            <div class="form">
                <form action="/success.html">
                <div class="email">
                    <lable for="email">
                        Email address
                    </lable>
                </div>
                <div class="input-box">
                    <input type="text" id="email" placeholder="email@company.com">
                </div>
                <div class="button">
                    <button>Subscribe to montly newsletter</button>
                </div>
                </form>
            </div>
        </div>
        <div class="newsletter-image">
            <img src="images/illustration-sign-up-desktop.svg">
        </div>
    </div>


    <script src="app.js"></script>
</body>
</html>
```
```css
body{
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Roboto, Arial;
    background-color: hsl(235, 18%, 26%);
    font-size:16px;
    font-weight: 450;

}

.parent{
    display: flex;
    width:900px;
    
    background-color: hsl(0, 0%, 100%);
    padding-top:16px;
    padding-bottom:16px;
    justify-content: space-around;
    padding-left:25px;
    border-radius: 10px;
}
.newsletter-image img{
    width:370px;
}
.newsletter-content{
    display: flex;
    flex-direction: column;
    
    width: 370px;
    padding-top:50px;
    justify-content: space-between;
    padding-bottom: 100px;
    

}
.heading{
    
    font-size:50px;
    font-weight: 700;
    
}


.properties{
    display: flex;
    flex-direction: row;
    
    
}

.icon{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    

    
}
.list-icon{
    margin-bottom: 10px;
}

.list{
    display: flex;
    flex-direction: column;
   
    justify-content: space-between;
}
.list-content{
    margin-bottom: 10px;
    margin-left:8px;
}

.email{
    font-weight: 600;
    margin-bottom:12px;
}

.form input{
    padding:15px;
    border-radius: 5px;
    width: 300px;
    border:1px solid gray;
    

}

.button button{
    margin-top:20px;
    background-color: black;
    color:white;
    padding-left:65px;
    padding-right:65px;
    padding-top:17px;
    padding-bottom:17px;
    border:none ;
    border-radius:6.6px;
    font-weight: 700;
    cursor: pointer;
    transition: box-shadow 0.15s ease-in-out;


}
.button button:hover{
    background-color: rgba(173, 79, 79, 0.916);
    box-shadow: 10px 10px 30px rgba(255, 0, 0, 0.594);
}

.outer-box{
    display: flex;
    flex-direction: column;
    width:400px;
    background-color: white;
   
    padding-top:35px;
    padding-bottom:35px;
    margin-top:7%;
    border-radius: 16px;
    
}
.others{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.message{
    width:300px;
    margin-top:15px;
    margin-bottom: 10px;
    font-weight: 400;

}

.outer-box .heading{
    margin-top:10px;
    width:300px;
}

.checkbox{
    margin-left:30px;
}
.checkbox img{
    width:50px;
}




```
```js


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

```

I


### Continued development

In future responsiveness will be added.



## Author

- Website - [Prince Pandey](@pandey-prince)



