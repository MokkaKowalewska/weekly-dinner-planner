import showDates from "./show-dates";
import getRecipies from "./fetch-api";
import handleAddMeal from "./add-meal";
import ValidateForm from "./form-validation";

showDates();
getRecipies();
handleAddMeal();

const emailForm = document.querySelector(".letsPlan__form");
const messages = {
  valueMissing: "Oh noes, this field cannot be empty!",
  typeMismatch: "It doesn't look like email address...",
  patternMismatch: "It doesn't look like email address...",
  check: "",
};

new ValidateForm(emailForm, ".validate", ".form__errorMsg", messages);
