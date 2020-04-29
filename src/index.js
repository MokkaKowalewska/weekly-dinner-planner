import getRecipies from "./fetch-api";
import addMeal from "./add-meal";
import ValidateForm from "./form-validation";
import showDates from "./show-dates";

getRecipies();
showDates();

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

// email-form validation
const emailForm = document.querySelector(".letsPlan__form");
const messages = {
  valueMissing: "Oh noes, this field cannot be empty!",
  typeMismatch: "It doesn't look like email address...",
  patternMismatch: "It doesn't look like email address...",
  check: "",
};

new ValidateForm(emailForm, ".validate", ".form__errorMsg", messages);
