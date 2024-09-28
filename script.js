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
    console.log(error);
  });


}

getUsers();














  const arrowLeft = document.getElementById('arrow_left');
  const arrowRight = document.getElementById('arrow_right');
  const mainContent = document.getElementById('slider_content');
  let sliderIndex = 0;


 




  
//ფუნქცია დივის შესაქმნელად
function divtag() {
  const divEl = document.createElement('div');
  divEl.classList.add('main_div')
  return divEl;
}

 
// ფუნქცია სურათის შესაქმნელად

function imgTag(item) {
  const tagEl = document.createElement('img');
  tagEl.src = item.Images[1];
  tagEl.classList.add('slider_img');
  return tagEl;
}

//ფუნქცია სათაურის შესაქმნელად

function titleTag(item) {
  const titleEl = document.createElement('h2');
  titleEl.textContent = item.Title;
  titleEl.classList.add('slider_h2')
  return titleEl;
}



// ისრების ფუნქციონალი

function arrowLeftClick() {
  if (sliderIndex == 0) {
    sliderIndex = dataInfo.length - 1;
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

arrowLeft.addEventListener('click', arrowLeftClick)


arrowRight.addEventListener('click', arrowRightClick);



setInterval(() => {
  arrowRightClick()
}, 3000)

