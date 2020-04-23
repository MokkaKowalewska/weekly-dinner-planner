
function fetchAPI() {
  fetch("https://api.spoonacular.com/recipes/search?apiKey=0508ba3c86c542ecafd7a4f3f29ed0e1&query=cheese&number=5")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

export default fetchAPI;
