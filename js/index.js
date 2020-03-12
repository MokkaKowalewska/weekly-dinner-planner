let favMeals = [];

function addMeal(text) {
  const meal = {
    text,
    id: Date.now()
  };
  favMeals.push(meal);

  // create a meal as li element, create delete button
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
}

function addToSelect(text) {
  const selectMeal = document.querySelectorAll(".selectMeal");
  for (let j = 0; j < selectMeal.length; j++) {
    selectMeal[j].insertAdjacentHTML(
      "beforeend",
      `
  <option>${text}</option>
  `
    );
  }
}

// listen to "submit" for add a meal to favMeals array and to select
const form = document.querySelector(".favMeals__form");
form.addEventListener("submit", event => {
  event.preventDefault();
  const input = document.querySelector(".favMeals__input");

  const text = input.value.trim();
  if (text !== "") {
    addMeal(text);
    input.value = "";
    input.focus();
    addToSelect(text);
  }
});

// delete meals in Favourite meals section
function deleteMeal(key) {
  favMeals = favMeals.filter(mealToDel => mealToDel.id !== Number(key));
  const mealToDel = document.querySelector(`[data-key="${key}"]`);
  mealToDel.remove();
}

const ul = document.querySelector(".favMeals__ul");
const deleteBtn = document.querySelector(".favMeals__deleteBtn");
ul.addEventListener("click", event => {
  if (event.target.classList.contains("favMeals__deleteBtn")) {
    const mealKey = event.target.parentElement.dataset.key;
    deleteMeal(mealKey);
  }
});

//ZROBIĆ DELETE FROM SELECT!!!!

// show current dates in Let's plan section
let today = new Date();
let week = [];

for (let i = 1; i <= 7; i++) {
  let first = today.getDate() - today.getDay() + i;
  let day = new Date(today.setDate(first)).toISOString().slice(0, 10);
  week.push(day);
}

// place dates in Let's plan col-1
let days = document.querySelectorAll(".day");

for (let i = 0; i < week.length; i++) {
  days[i].insertAdjacentHTML(
    "beforeend",
    `
<span>${week[i]}</span>
  `
  );
}
