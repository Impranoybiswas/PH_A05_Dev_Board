const body = document.querySelector("body");
body.style.backgroundColor = "#DBEAFB";

let allCards = document.querySelectorAll(".card");
for (eachCard of allCards) {
  eachCard.style.backgroundColor = "#DBEAFB";
}

let allButton = document.getElementsByTagName("button");
for (button of allButton) {
  button.classList.add("button-primary");
}

const colorThemes = [
  "#4DCCBD",
  "#5B2A86",
  "#7785AC",
  "#FF8484",
  "#44344F",
  "#FC9F5B",
  "#2563EB",
];
const colorThemesAlpha = [
  "#4DCCBD33",
  "#5B2A8633",
  "#7785AC33",
  "#FF848433",
  "#44344F33",
  "#FC9F5B33",
  "#DBEAFB",
];

let index = 0;
const themeButton = document.getElementById("theme-button");
themeButton.addEventListener("click", () => {
  body.style.backgroundColor = colorThemesAlpha[index];
  for (eachCard of allCards) {
    eachCard.style.backgroundColor = colorThemesAlpha[index];
  }
  for (button of allButton) {
    button.classList.add(`bg-[${colorThemes[index]}]`);
  }

  index = (index + 1) % colorThemes.length;
});


// button.getAttribute("disabled") == "false"
//       ? (button.style.backgroundColor = colorThemes[index])
//       : (button.style.backgroundColor = "red");