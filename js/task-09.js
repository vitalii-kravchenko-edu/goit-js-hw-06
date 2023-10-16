const body = document.querySelector("body");
const btn = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");

btn.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  body.style.background = randomColor;
  colorValue.textContent = randomColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}