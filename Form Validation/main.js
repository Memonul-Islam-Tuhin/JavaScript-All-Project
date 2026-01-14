const button = document.getElementById("btn");
const nameError = document.querySelector("#nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.querySelector("#passwordError");

button.addEventListener("click", (event) => {
  event.preventDefault();

  if (validateName() && validateEmail() && validatePassword()) {
    alert("Form Submitted Successfully");
  }
});

function validateName() {
  let name = document.getElementById("name").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    nameError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }

  if (!name.matches(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full Name";
    nameError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }
  nameError.innerHTML = "";
  nameError.previousElementSibling.classList.add("fa-check");
  return true;
}

function validateEmail() {
  let email = document.getElementById("email").value;

  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    emailError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }

  if (!email.matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    emailError.innerHTML = "Enter Valid Email";
    emailError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }
  emailError.innerHTML = "";
  emailError.previousElementSibling.classList.add("fa-check");
  return true;
}
function validatePassword() {
  let password = document.querySelector("#password").value;

  if (password.length == 0) {
    passwordError.innerHTML = "Password is required";
    passwordError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }

  if (
    !password.matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/
    )
  ) {
    passwordError.innerHTML =
      "Password should contain 1 Uppercase, 1 Lowecase, 1 Digit & 1 Alphabet";
    passwordError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }
  passwordError.innerHTML = "";
  passwordError.previousElementSibling.classList.add("fa-check");
  return true;
}
