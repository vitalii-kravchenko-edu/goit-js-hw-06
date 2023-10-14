function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

function createBoxes(amount) {
  this.amount = input.value;
  console.log(this.amount);

  const boxes = document.querySelector("#boxes");
  const boxesGallery = [];
  boxesGallery.length = this.amount;
  
  


  const box = document.createElement("div");
  box.style.width = "30px";
  box.style.height = "30px";
  box.style.backgroundColor = getRandomHexColor();
  
  boxesGallery.reduce(box => boxesGallery.push(box), amount);
  console.log(boxesGallery);

  boxes.insertAdjacentHTML("beforeend", box);
}

createBtn.addEventListener("click", createBoxes);