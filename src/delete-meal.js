import {favMeals} from "./add-meal";

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