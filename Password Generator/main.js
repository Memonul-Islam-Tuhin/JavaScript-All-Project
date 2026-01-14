let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passwordBox = document.getElementById("passwordBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("click", () => {
  sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener("click", () => {
  passwordBox.value = generatorPassword();
});

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*";

function generatorPassword() {
  let genPassword = "";
  let allChars = "";

  allChars += lowercase.checked ? lowerChars : "";
  allChars += uppercase.checked ? upperChars : "";
  allChars += numbers.checked ? allNumbers : "";
  allChars += symbols.checked ? allSymbols : "";

  if (allChars === "" || allChars.length === 0) {
    return genPassword;
  }

  let i = 1;
  do {
    genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    i++;
  } while (i <= inputSlider.value);

  return genPassword;
}

copyIcon.addEventListener("click", (event) => {
  event.preventDefault();

  if (passwordBox.value != "" || passwordBox.value.length >= 1) {
    navigator.clipboard.writeText(passwordBox.value);
    copyIcon.innerText = "check";
    copyIcon.title = "Password Copied";

    setTimeout(() => {
      copyIcon.innerText = "Content Copy";
      copyIcon.title = "";
    }, 3000);
  }
});
