
import {accordion} from './accordion.js';
accordion();

import {burger} from './burger.js';
burger();

import {regex} from './regex.js';
regex();

// form validation


    const formEl = document.getElementById('formElement');

  formEl.addEventListener('submit', function(e) {
    e.preventDefault();
    let errors = {};
  
    // username
    const usernameValue = document.getElementById('usernameField').value;
    if (usernameValue == '') {
      errors.username = 'Username Field can not be empty';
    }
    // password
    const lastnameValue = document.getElementById('lastnameField').value;
    if (lastnameValue == '') {
      errors.lastname = 'Lastname Field can not be empty';
    }
    const password1 = document.getElementById('passwordField').value;
    const password2 = document.getElementById('passwordField2').value;
  
    if (password1 == '') {
      errors.password = 'Password field can not be empty';
    }
  
    if (password1 !== password2) {
      errors.password2 = 'Passwords do not match';
    }
    // radio
    let gender = false;
  
    this.querySelectorAll('[name="gender"]').forEach(item => {    /* შეიძლება ღილაკებზე გამოდგეს */
      if (item.checked) {
        gender = true;
      }
    })
  
    if (!gender) {
      errors.gender = 'Please select your gender';
    }
  
    // checkbox 
    let checkBox = document.getElementById('agreecheck');
    if (checkBox.checked === false) {
      errors.check = 'You must agree our terms and conditions';
    }
    // console.log(errors); 




    // // cookies
    // if (checkBox.checked) {
    //   Cookies.set('cookies_username', usernameValue);                                                 //Cookies
    // } else {
    //   Cookies.remove('cookies_username');
    // }
    

   
      
  
  
  
    this.querySelectorAll('.error_text').forEach(el => {
      el.textContent = ' ';
    })
  
    for (let item in errors) {
      // console.log(item);
  
      let pErrorElement = document.getElementById('error_' + item);
      // console.log(pErrorElement);
      if (pErrorElement) {
        pErrorElement.textContent = errors[item];
      }
    }
  
    if (Object.keys(errors).length === 0) {
      this.submit();
    }


    // this.submit();
  });

  // const savedUsername = Cookies.get('cookies_username');

  // if(savedUsername) {
  //  document.getElementById('usernameField').value = savedUsername;
  //  document.getElementById('agreecheck').checked = true;               
  // }

  
  



  
  
  
  
   
  
  // show password icon
  
  
  const passwordEl = document.getElementById('passwordField');
  const iconEye = document.getElementById('toggleIcon');
  
  
  iconEye.addEventListener('click', function() {
     if (passwordEl.type === 'password') {
      passwordEl.setAttribute('type', 'text');
      iconEye.classList.remove('fa-eye');
      iconEye.classList.add('fa-eye-slash');
     } else {
      passwordEl.setAttribute('type', 'password');
      iconEye.classList.remove('fa-eye-slash');
      iconEye.classList.add('fa-eye');
     }
  })
  
  
  
  
  
  
  
  
  
   








