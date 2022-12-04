const navToggle = document.querySelector(".nav_toggle");
const navWrapper = document.querySelector(".nav_wrapper");

navToggle.addEventListener("click", function () {
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

const password = document.getElementById("password")
      ,confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

function validateData(e) {
  // e.preventDefault();
  const birthdayDate = document.getElementById("date").value;
  console.log(birthdayDate);
  const now = new Date();
  const birthdate = birthdayDate.split("-");
  const born = new Date(birthdate[0], birthdate[1], birthdate[2]);
  age=get_age(born,now);
  console.log(age);
  if (age<18) {
    e.preventDefault();
    alert("You need to be 18 years of age and older for the Adults books!")
    return false;
  }
  const acceptPaymentMethods = ['paypal', 'credit-cart', 'cash-on-delivery'].includes(document.getElementById("payment").value);
  console.log(acceptPaymentMethods);
  if (!acceptPaymentMethods) {
    e.preventDefault();
    alert("Give an exist payment method")
    return false;
  }
}

function get_age(born, now) {
  var birthday = new Date(now.getFullYear(), born.getMonth(), born.getDate());
  return now >= birthday ? now.getFullYear() - born.getFullYear() : now.getFullYear() - born.getFullYear() - 1;
}

function containsNumbers(str) {
  return /^[A-Za-z0-9]*$/.test(str);
}