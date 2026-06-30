const select_font_size = document.querySelector("#select_font_size");
const select_bg_color = document.querySelector("#select_bg_color");
const reset_button = document.querySelector("#reset_button");
const mainElement = document.querySelector("main");

const updateTextColor = (bgColor) => {
  mainElement.style.color = bgColor === "black" ? "white" : "black";
};

const applyStyles = (bgColor, fontSize) => {
  mainElement.style.transition =
    "opacity 0.5s ease, background-color 0.5s ease";
  mainElement.style.opacity = 0;

  setTimeout(() => {
    mainElement.style.backgroundColor = bgColor;
    mainElement.style.fontSize = fontSize;
    updateTextColor(bgColor);
    mainElement.style.opacity = 1;
  }, 300);
};

const initialSetup = () => {
  const bgColor = localStorage.getItem("bgColor") || "aqua";
  const fontSize = localStorage.getItem("fontSize") || "16px";

  applyStyles(bgColor, fontSize);

  select_font_size.value = fontSize;
  select_bg_color.value = bgColor;
};

const change_size = (event) => {
  const selectFontSize = event.target.value;
  applyStyles(select_bg_color.value, selectFontSize);
  localStorage.setItem("fontSize", selectFontSize);
};

const change_color = (event) => {
  const selectBgColor = event.target.value;
  applyStyles(selectBgColor, select_font_size.value);
  localStorage.setItem("bgColor", selectBgColor);
};

const clearLocalStorage = () => {
  localStorage.clear();
  applyStyles("aqua", "16px");
  select_font_size.value = "16px";
  select_bg_color.value = "aqua";
};

select_font_size.addEventListener("change", change_size);
select_bg_color.addEventListener("change", change_color);
reset_button.addEventListener("click", clearLocalStorage);

initialSetup();
