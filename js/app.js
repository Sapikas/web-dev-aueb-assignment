const navToggle = document.querySelector(".nav_toggle");
const navWrapper = document.querySelector(".nav_wrapper");
console.log(navToggle, navWrapper);
navToggle.addEventListener("click", function () {
  console.log('nav toggle');
  if (navWrapper.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
  } else {
    navWrapper.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
  }
});