import getRecipies from "./fetch-api";

function addMeal(text) {
  const meal = {
    text,
    id: Date.now(),
  };

  // create a meal as li element, create delete button
  const ul = document.querySelector(".favMeals__ul");
  ul.insertAdjacentHTML(
    "beforeend",
    `
  <li class="favMeals__li box animated fadeInDown" data-key="${meal.id}">
    <span class="li__span">${meal.text}</span>
    <svg class="favMeals__deleteBtn" aria-label="Delete button" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/></svg>
  </li>
  `,
  );

  const selects = document.querySelectorAll(".letsPlan__select");
  selects.forEach((select) => {
    select.insertAdjacentHTML(
      "beforeend",
      `<option data-key="${meal.id}">${meal.text}</option>`,
    );
  });
}

function handleAddMeal() {
  const form = document.querySelector(".favMeals__form");

  form.addEventListener(
    "submit",
    (e) => {
      e.preventDefault();
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
}

export default handleAddMeal;
