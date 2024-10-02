// burgerBar



export function burger() {

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

}

