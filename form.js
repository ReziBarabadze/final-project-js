
import {accordion} from './accordion.js';
accordion();

import {burger} from './burger.js';
burger();

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
    const checkBox = document.getElementById('agreecheck').checked;
    if (checkBox === false) {
      errors.check = 'You must agree our terms and conditions';
    }
    // console.log(errors);   
  
  
  
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
    
  });
  
  
  
  
  
  
   
  
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
  
  
  
  
  
  
  
  // regulare expression / Regex email
  
  
  
  const emailEl = document.getElementById('email');
  
  
  
  function emailValidation() {
    const emailValue = document.getElementById('email').value;
    const errorEmail = document.getElementById('text_email');
    let regex = "(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)";

  
  
  
    if (emailValue.match(regex)) {
      errorEmail.textContent = 'Your Email Is Valid';
      errorEmail.style.color = 'green';
    } else {
      errorEmail.textContent = 'Your Email Is Invalid';
      errorEmail.style.color = 'red';
    }
    
    if (emailValue === '') {
      errorEmail.innerHTML = ' ';
    }
  }
  
  emailEl.addEventListener('keyup', emailValidation);
  









