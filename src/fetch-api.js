const baseURL = "https://api.spoonacular.com/recipes/search?apiKey=0508ba3c86c542ecafd7a4f3f29ed0e1&query=";
const baseImageURL = "https://spoonacular.com/recipeImages/";

const getRecipies = async (keyword) => {
  try {
    const response = await fetch(`${baseURL}${keyword}&number=5`);
    const data = await response.json();

    console.log(data);

    return data;
  } catch (err) {
    console.error(err);
  }
};

getRecipies("pasta").then(((data) => {
  const { results: APIrecipies } = data;
  const titles = document.querySelectorAll(".recipe__title");
  const urls = document.querySelectorAll(".recipe__url");
  const readyIns = document.querySelectorAll(".recipe__readyIn");
  const servings = document.querySelectorAll(".recipe__servings");


  console.log(APIrecipies);

  APIrecipies.forEach((value, i) => {
    // titles[i].insertAdjacentHTML("beforeend", APIrecipies[i].title);
    urls[i].textContent = APIrecipies[i].title;
    urls[i].href = APIrecipies[i].sourceUrl;
    readyIns[i].insertAdjacentHTML("beforeend", APIrecipies[i].readyInMinutes);
    servings[i].insertAdjacentHTML("beforeend", APIrecipies[i].servings);
  });
}));

console.trace();
