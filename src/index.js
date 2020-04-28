import getRecipies from "./fetch-api";
import ValidateForm from "./form-validation";

require("./send-email.js");

getRecipies();

let favMeals = [];

function addMeal(text) {
  const meal = {
    text,
    id: Date.now(),
  };
  favMeals.push(meal);


  // create a meal as li element, create delete button
  const ul = document.querySelector(".favMeals__ul");
  ul.insertAdjacentHTML(
    "beforeend",
    `
  <li class="favMeals__li box" data-key="${meal.id}">
    <span class="li__span">${meal.text}</span>
    <svg class="favMeals__deleteBtn" aria-label="Delete button" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/></svg>
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
      getRecipies(text);
      input.value = "";
      input.focus();
    }
  },
  false,
);

// delete meal in "favourite meals" and "let's plan" sections
function deleteMeal(key) {
  console.log("filteadasdr");
  favMeals = favMeals.filter((mealToDel) => {
    mealToDel.id !== Number(key);
    console.log(Number(key));
  });
  console.log("filter");
  const mealToDel = document.querySelectorAll(`[data-key="${key}"]`);
  console.dir(mealToDel);

  for (let i = 0; i < mealToDel.length; i++) {
    console.log("petla");
    mealToDel[i].remove();
  }
}

(function deleteBtnClicked() {
  const ul = document.querySelector(".favMeals__ul");

  ul.addEventListener(
    "click",
    (event) => {
      if (event.target.classList.contains("favMeals__deleteBtn")) {
        console.dir(event.target.parentElement);
        const mealKey = event.target.parentElement.dataset.key;
        console.log(mealKey);
        deleteMeal(mealKey);
        console.log("i dalej");
      }
    },
    true,
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

//validation

const form = document.querySelector(".letsPlan__form");
const messages = {
  valueMissing: "Oh noes, this field cannot be empty!",
  typeMismatch: "It doesn't look like email address...",
  patternMismatch: "It doesn't look like email address...",
  check: "Check!",
}
new ValidateForm(form, form__email, form__errorMsg, messages);
