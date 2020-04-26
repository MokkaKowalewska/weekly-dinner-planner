import getRecipies from "./fetch-api";

require("./send-email.js");

getRecipies();

let favMeals = [];

function addMeal(text) {
  const meal = {
    text,
    id: Date.now(),
  };
  favMeals.push(meal);
  getRecipies(favMeals[favMeals.length - 1].text);


  // create a meal as li element, create delete button
  const ul = document.querySelector(".favMeals__ul");
  ul.insertAdjacentHTML(
    "beforeend",
    `
  <li class="favMeals__li box" data-key="${meal.id}">
    <span class="li__span">${meal.text}</span>
    <button class="favMeals__deleteBtn">x</button>
  </li>
  `,
  );

  const selectMeal = document.querySelectorAll(".selectMeal");
  for (let j = 0; j < selectMeal.length; j++) {
    selectMeal[j].insertAdjacentHTML(
      "beforeend",
      `
  <option data-key="${meal.id}">${meal.text}</option>
  `,
    );
  }
}

// add a meal to "favourite meals" and "let's plan" sections
const form = document.querySelector(".favMeals__form");
form.addEventListener(
  "submit",
  (event) => {
    event.preventDefault();
    const input = document.querySelector(".favMeals__input");

    const text = input.value.trim();
    if (text !== "") {
      addMeal(text);
      input.value = "";
      input.focus();
    }
  },
  false,
);

// delete meal in "favourite meals" and "let's plan" sections
function deleteMeal(key) {
  favMeals = favMeals.filter((mealToDel) => mealToDel.id !== Number(key));
  const mealToDel = document.querySelectorAll(`[data-key="${key}"]`);

  for (let i = 0; i < mealToDel.length; i++) {
    mealToDel[i].remove();
  }
}

(function deleteBtnClicked() {
  const ul = document.querySelector(".favMeals__ul");

  ul.addEventListener(
    "click",
    (event) => {
      if (event.target.classList.contains("favMeals__deleteBtn")) {
        const mealKey = event.target.parentElement.dataset.key;
        deleteMeal(mealKey);
      }
    },
    false,
  );
}());

const week = [];

(function getDates() {
  const today = new Date();


  for (let i = 1; i <= 7; i++) {
    const monday = today.getDate() - today.getDay() + i;
    const options = {
      weekday: "short", year: "numeric", month: "long", day: "numeric",
    };
    const day = new Date(today.setDate(monday)).toLocaleDateString("en-EN", options);
    week.push(day);
  }
}());

(function showDates() {
  const days = document.querySelectorAll(".day");

  for (let i = 0; i < week.length; i++) {
    days[i].insertAdjacentHTML(
      "beforeend",
      `
<span>${week[i]}</span>
  `,
    );
  }
}());
