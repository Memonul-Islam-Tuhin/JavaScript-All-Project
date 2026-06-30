let generateOTP;
let intervalId = null;
let timeoutId = null;
let isOtpVerified = false;

const expires = document.getElementById("otp-expires-id");

function expiresOTP() {
  if (isOtpVerified) return;

  const otpTime = 15000;
  const interval = 1000;
  let half = otpTime / interval;

  const intervalId = setInterval(function () {
    expires.innerText = `OTP will start Time in ${half} end`;
    half--;
  }, interval);

  setTimeout(function () {
    expires.innerText = "OTP Expires";
    clearInterval(intervalId);
    generateOTPNumber();
  }, otpTime);
}

function tracerOtpBox() {
  const boxes = document.getElementById("otp-list-id");
  boxes.addEventListener("input", function (event) {
    const target = event.target;
    const value = target.value;
    if (isNaN(value)) {
      target.value = "";
      return;
    }

    const nextElement = target.nextElementSibling;
    if (nextElement) {
      nextElement.focus();
    }

    validateOTPNumber();
  });
}

function generateOTPNumber() {
  generateOTP = Math.floor(1000 + Math.random() * 9000);

  const otpElement = document.getElementById("generated-otp-id");

  otpElement.innerText = `Your Update OTP : ${generateOTP}`;

  expiresOTP();
}

function validateOTPNumber() {
  let number = "";
  const boxListElement = document.getElementById("otp-list-id");
  [...boxListElement.children].forEach((element) => {
    number += element.value;
  });

  const result = generateOTP === parseInt(number, 10);
  const result_id = document.getElementById("result-id");
  if (result) {
    isOtpVerified = true;

    clearInterval(intervalId);
    clearTimeout(timeoutId);

    expires.innerText = "OTP Verified ✅";

    result_id.innerText = "Your OTP has send successfully";
    result_id.classList.remove("fail");
    result_id.classList.add("success");
  } else {
    result_id.innerText = "Invalid OTP";
    result_id.classList.remove("success");
    result_id.classList.add("fail");
  }
}

function init() {
  localStorage.clear();

  tracerOtpBox();

  setTimeout(generateOTPNumber, 2000);
}

init();

const themeToggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-theme");
  themeToggle.textContent = "🌑 Dark Mode";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  const isLight = document.body.classList.contains("light-theme");
  themeToggle.textContent = isLight ? "🌑 Dark Mode" : "🌙 light Mode";

  localStorage.setItem("theme", isLight ? "light" : "dark");
});
