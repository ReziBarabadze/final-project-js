



 // regulare expression / Regex email                        

export function regex () {
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
  
  emailEl.addEventListener('keyup', emailValidation);   //ეს მეთოდი მარტო მეილზე ვცადე 
  
 }

//  regex();


