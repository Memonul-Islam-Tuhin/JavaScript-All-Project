const button = document.getElementById("btn");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

button.addEventListener("click", (event) => {
  event.preventDefault();

  if (validateEmail() && validatePassword()) {
    alert("Login Successfully");
  }
});

function validateEmail() {
  let email = document.getElementById("email").value;

  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    emailError.previousElementSibling.classList.remove("fa-check");
    emailError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }

  if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    emailError.innerHTML = "Enter Valid Email";
    emailError.previousElementSibling.classList.remove("fa-check");
    emailError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }

  emailError.innerHTML = "";
  emailError.previousElementSibling.classList.remove("fa-xmark");
  emailError.previousElementSibling.classList.add("fa-check");
  return true;
}

function validatePassword() {
  let password = document.getElementById("password").value;

  if (password.length == 0) {
    passwordError.innerHTML = "Password is required";
    passwordError.previousElementSibling.classList.remove("fa-check");
    passwordError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }

  if (
    !password.match(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/,
    )
  ) {
    passwordError.innerHTML =
      "Password should contain 1 Uppercase, 1 Lowercase, 1 Digit & 1 Special Character";
    passwordError.previousElementSibling.classList.remove("fa-check");
    passwordError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }

  passwordError.innerHTML = "";
  passwordError.previousElementSibling.classList.remove("fa-xmark");
  passwordError.previousElementSibling.classList.add("fa-check");
  return true;
}
