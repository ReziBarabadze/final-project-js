// burgerBar

let navigation = document.getElementById("navBar");
let icon = document.getElementById("icons");
let burger = document.getElementById("burgetBar");

burger.addEventListener("click", function () {
  burger.classList.toggle("activeBurgerBar");

  navigation.classList.toggle("activeNav");
  icon.classList.toggle("activeIcons");
});





//header disappear

let headerElement = document.getElementById("headerFixed");

window.addEventListener("scroll", function () {
  if (window.scrollY > 900) {
    headerElement.classList.add("activeFixed");
  } else {
    headerElement.classList.remove("activeFixed");
  }
});







//accordion

let divArray = document.querySelectorAll(".accordion_container");

for (let item of divArray) {
  item.addEventListener("click", function () {
    this.classList.toggle("activeAccordion");
  });
}






















// server

function getUsers() {
fetch(
  "https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON",
  {
    method: "GET",
  }
)
  .then(function (responseFilm) {
    if (responseFilm.status !== 200) {
      throw "ERROR";
    }    
    return responseFilm.json();
  })

  .then(function (dataInfo) {
    // console.log(dataInfo[sliderIndex]);


    function setSlide() {

    mainContent.innerHTML = '';

    const slideItem = divtag();
    const imgItem = imgTag(dataInfo[sliderIndex]);
    const titleItem = titleTag(dataInfo[sliderIndex]);
    
    slideItem.appendChild(titleItem);
    slideItem.appendChild(imgItem);

    // console.log(slideItem);
    
    mainContent.appendChild(slideItem);
    

    }
    setSlide();
    
  })

  .catch(function (error) {
    // console.log(error);
  });


}

getUsers();














  const arrowLeft = document.getElementById('arrow_left');
  const arrowRight = document.getElementById('arrow_right');
  const mainContent = document.getElementById('slider_content');
  let sliderIndex = 0;


 




  
//function for div
function divtag() {
  const divEl = document.createElement('div');
  divEl.classList.add('main_div')
  return divEl;
}

 
// function for images

function imgTag(item) {
  const tagEl = document.createElement('img');
  tagEl.src = item.Images[1];
  tagEl.classList.add('slider_img');
  return tagEl;
}

//function for title

function titleTag(item) {
  const titleEl = document.createElement('h2');
  titleEl.textContent = item.Title;
  titleEl.classList.add('slider_h2')
  return titleEl;
}




// function for arrow

function arrowLeftClick() {
  if (sliderIndex === 0) {
    sliderIndex = 0;
    getUsers();
    return;
  }
  sliderIndex--;
  getUsers();
}

function arrowRightClick() {
  if (sliderIndex === 15) {
    sliderIndex = 0;
    getUsers();
    return;
  }
  
  sliderIndex++;
  getUsers();
}


arrowLeft.addEventListener('click', arrowLeftClick);


arrowRight.addEventListener('click', arrowRightClick);






setInterval(() => {
  arrowRightClick()
}, 5000)








// buttons dot

let btnDiv = document.querySelector('.buttons_dots');
let redButton = document.querySelector('.dot_button');


arrowRight.addEventListener('click', function() {
  redButton.classList.add('dot_button_red');
  

  // btnDiv.setAttribute('btn_id', dataInfo.imdbID);
  // btnDiv.forEach(element => {
  // element.classList.add('dot_button_red');
  // console.log(this.element);
  
    
  });
  // redButton.classList.add('dot_button_red');
  // redButton++;
  // redButton.classList.add('dot_button_red');


  // btnDiv.forEach(element => {
  //   element.target.redButton.getAttribute('btn_id')
  // });


// })














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
  let regex = /^w+[+.w-]*@([w-]+.)*w+[w-]*.([a-z]{2,4}|d+)$/i;



  if (emailValue.match(regex)) {
    errorEmail.textContent = 'Your Email Is Valid';
    errorEmail.style.color = 'green';
  } else {
    errorEmail.textContent = 'Your Email Is Invalid';
    errorEmail.style.color = 'green';
  }
  if (emailValue === '') {
    errorEmail.innerHTML = ' ';
  }
}

emailEl.addEventListener('keyup', emailValidation);