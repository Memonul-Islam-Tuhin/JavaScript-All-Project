/*
 * Title: Calculator
 * Description: This is the main project simple of this project
 * Author: Memonul Islam ( Learn in Memonul )
 * Date:1-10-2026
 *
 */

let input_Box = document.getElementById("inputBox");
let button = document.querySelectorAll("button");

let str = "";
let arr = Array.from(button);

arr.map((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.innerHTML === "=") {
      str = eval(str);
      input_Box.value = str;
    } else if (event.target.innerHTML === "AC") {
      str = "";
      input_Box.value = str;
    } else if (event.target.innerHTML === "DEL") {
      str = str.substring(0, str.length - 1);
      input_Box.value = str;
    } else if (event.target.innerHTML === "%") {
      str += event.target.innerHTML;
      input_Box.value = str;
    } else {
      str += event.target.innerHTML;
      input_Box.value = str;
    }
  });
});
