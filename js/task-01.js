const categoriesList = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesList.length}`);
console.log("");

categoriesList.forEach(category => {
  const categoryTitle = category.querySelector("h2");
  console.log(`Category: ${categoryTitle.textContent}`);
  const categoryContentList = category.querySelectorAll("li");
  console.log(`Elements: ${categoryContentList.length}`);
  console.log("");
})