const qrText = document.getElementById("qr-text");
const sizes = document.getElementById("sizes");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");

let size = sizes.value;

generateBtn.addEventListener("click", (event) => {
  event.preventDefault();
  isEmptyInput();
});

sizes.addEventListener("click", (event) => {
  event.preventDefault();
  size = event.target.value;
  isEmptyInput();
});

downloadBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let img = document.querySelector("qr-body img");
  if (img != null) {
    let imgAtrr = img.setAttribute("src");
    downloadBtn.setAttribute("href", imgAtrr);
  } else {
    downloadBtn.setAttribute(
      "href",
      `${document.querySelector("canvas").toDataURL()}`
    );
  }
});

function isEmptyInput() {
  qrText.value.length >= 0
    ? generateQRCode()
    : alert("Enter the text or URL to generate your QR code");
}

function generateQRCode() {
  qrContainer.innerHTML = "";
  new QRCode(qrContainer, {
    text: qrText.value,
    height: size,
    width: size,
    colorLight: "#fff",
    colorDark: "#000",
  });
}
