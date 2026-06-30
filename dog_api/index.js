const button = document.querySelector(".btn");
const dogImage = document.querySelector(".dogImage");

function requestData() {
  dogImage.style.opacity = "0";
  setTimeout(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        dogImage.src = data.message;
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, 1000);
}

dogImage.onload = function () {
  this.style.opacity = "1";
};

button.addEventListener("click", requestData);
