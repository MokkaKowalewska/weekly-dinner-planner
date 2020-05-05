function deleteMeal(key) {
  const mealToDel = document.querySelectorAll(`[data-key="${key}"]`);

  (Array.from(mealToDel)).map((meal) => meal.remove());
}

function deleteBtnClicked() {
  const ul = document.querySelector(".favMeals__ul");

  ul.addEventListener(
    "click",
    (event) => {
      if (event.target.classList.contains("favMeals__deleteBtn")) {
        const mealKey = event.target.parentElement.dataset.key;
        deleteMeal(mealKey);
      }
    },
    true,
  );
}

export default deleteBtnClicked;
