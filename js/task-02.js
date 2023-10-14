const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");

ingredients.forEach(ingridient => {
  const item = document.createElement("li");
  item.textContent = ingridient;
  item.classList.add("item");
  ingredientsList.append(item);
})