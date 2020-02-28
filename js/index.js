let favMeals = [];

function addMeal(text) {
  const meal = {
    text,
    id: Date.now()
  };

  favMeals.push(meal);

  const ul = document.querySelector(".favMeals__ul");
  ul.insertAdjacentHTML(
    "beforeend",
    `
  <li class="favMeals__li box" data-key="${meal.id}">
    <span class="li__span">${meal.text}</span>
    <button class="favMeals__deleteBtn">X</button>
  </li>
  `
  );
};



function deleteMeal(key) {
  favMeals = favMeals.filter(mealToDel => mealToDel.id !== Number(key));
  const mealToDel = document.querySelector(`[data-key="${key}"]`);
  mealToDel.remove();
};

const form = document.querySelector(".favMeals__form");
form.addEventListener("submit", event => {
  event.preventDefault();
  const input = document.querySelector(".favMeals__input");

  const text = input.value.trim();
  if (text !== "") {
    addMeal(text);
    input.value = "";
    input.focus();
  }
});

const ul = document.querySelector(".favMeals__ul");
const deleteBtn = document.querySelector(".favMeals__deleteBtn");
ul.addEventListener("click", event => {
  if (event.target.classList.contains("favMeals__deleteBtn")) {
    const mealKey = event.target.parentElement.dataset.key;
    deleteMeal(mealKey);
  }
});
