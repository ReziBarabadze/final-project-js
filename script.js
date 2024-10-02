import {burger} from './burger.js';
burger();

import {accordion} from './accordion.js';
accordion();

// import {formVal} from './form.js';
// formVal();






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














//Promise

const waitFncNew = function(seconds) {
  return new Promise(function(resolve) {
    setTimeout(resolve, seconds * 1000);  
  });
};


const imageContainer = document.querySelector('.image');


let currentImage;

const createImgElement = function(imagePath) {
  return new Promise (function (resolve, reject) {
    const imgEl = document.createElement('img');
    imgEl.src = imagePath;

    imgEl.addEventListener('load', function() {
      imageContainer.appendChild(imgEl);
      resolve(imgEl);
    })
    imgEl.addEventListener('error', function() {
      reject('Image Not Found');
    })
  })
}

createImgElement('images/cards3.png')
.then((image) => {
  currentImage = image;
  return   waitFncNew(2);
})
.then(() => {
  currentImage.style.display = 'none';
  return createImgElement('images/cards2.png');
})
.then((imageSecond) => {
  currentImage = imageSecond;
  return waitFncNew(3);
})


.then(() => {
  currentImage.style.display = 'none';
  return createImgElement('images/cards1.png');
})
.then((imageSecond) => {
  currentImage = imageSecond;
  return waitFncNew(3);
})
.then(() => {
  currentImage.style.display = 'none';
  return createImgElement('images/cards4.png');
})

.then((imageSecond) => {
  currentImage = imageSecond;
  return waitFncNew(3);
})
.then(() => {
  currentImage.style.display = 'none';
  return createImgElement('images/cards5.png');
})






.then((imageSecond) => {
  currentImage = imageSecond;
  return waitFncNew(3);
})
.then(() => {
  currentImage.style.display = 'none';
  return createImgElement('images/Image (2).png');
})

.then((imageSecond) => {
  currentImage = imageSecond;
  return waitFncNew(3);
})
.then(() => {
  currentImage.style.display = 'none';
  return createImgElement('images/Image (3).png');
})
.then((imageSecond) => {
  currentImage = imageSecond;
  return waitFncNew(3);
})
.then(() => {
  currentImage.style.display = 'none';
  return createImgElement('images/Image (4).png');
})
.then((imageSecond) => {
  currentImage = imageSecond;
  return waitFncNew(3);
})
.then(() => {
  currentImage.style.display = 'none';
  return createImgElement('images/Image (5).png');
})
.then((imageSecond) => {
  currentImage = imageSecond;
  return waitFncNew(3);
})
.then(() => {
  currentImage.style.display = 'none';
  return createImgElement('images/Image (6).png');
})
.then((imageSecond) => {
  currentImage = imageSecond;
  return waitFncNew(3);
})
.then(() => {
  currentImage.style.display = 'none';
  return createImgElement('images/Image (7).png');
})
.then((imageSecond) => {
  currentImage = imageSecond;
  return waitFncNew(3);
})
.then(() => {
  currentImage.style.display = 'none';
  return createImgElement('images/Image (8).png');
})
.then((imageSecond) => {
  currentImage = imageSecond;
  return waitFncNew(3);
})
.then(() => {
  currentImage.style.display = 'none';
  return createImgElement('images/Image (9).png');
})
.then((imageSecond) => {
  currentImage = imageSecond;
  return waitFncNew(3);
})
.then(() => {
  currentImage.style.display = 'none';
  return createImgElement('images/Image (10).png');
})
.then((imageSecond) => {
  currentImage = imageSecond;
  return waitFncNew(3);
})
.then(() => {
  currentImage.style.display = 'none';
  return createImgElement('images/Image (11).png');
})
.then((imageSecond) => {
  currentImage = imageSecond;
  return waitFncNew(3);
})
.then(() => {
  currentImage.style.display = 'none';
  return createImgElement('images/Image (12).png');
})
.then((imageSecond) => {
  currentImage = imageSecond;
  return waitFncNew(3);
})
.then(() => {
  currentImage.style.display = 'none';
  return createImgElement('images/Image (13).png');
})
.then((imageSecond) => {
  currentImage = imageSecond;
  return waitFncNew(3);
})
.then(() => {
  currentImage.style.display = 'none';
  return createImgElement('images/Image (14).png');
})
.then((imageSecond) => {
  currentImage = imageSecond;
  return waitFncNew(3);
})
.then(() => {
  currentImage.style.display = 'none';
  return createImgElement('images/Image.png');
})
.then((imageSecond) => {
  currentImage = imageSecond;
  return waitFncNew(3);
})
.then(() => {
  currentImage.style.display = 'none';
  return createImgElement('images/cards6.png.png');
})


.catch((errorText) => console.log(errorText));












