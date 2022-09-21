const navEl = document.querySelector("#categories");

console.log('Number of categories:', navEl.children.length);

const itemEl = document.querySelector(".item")

const titleEl = document.querySelector("h2")
console.log(`Category: ${titleEl.textContent}`);
console.log(`Elements: ${itemEl.lastElementChild.children.length}`);

const listProducts = itemEl.nextElementSibling;
console.log(`Category: ${listProducts.firstElementChild.textContent}`);
console.log(`Elements: ${listProducts.lastElementChild.children.length}`);

const listTechnologies = listProducts.nextElementSibling;
console.log(`Category: ${listTechnologies.firstElementChild.textContent}`);
console.log(`Elements: ${listTechnologies.lastElementChild.children.length}`);
