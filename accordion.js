//accordion

 export function accordion() {

  let divArray = document.querySelectorAll(".accordion_container");

for (let item of divArray) {
  item.addEventListener("click", function () {
    this.classList.toggle("activeAccordion");
  });
}



}

