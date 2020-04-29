const baseURL = "https://api.spoonacular.com/recipes/search?apiKey=0508ba3c86c542ecafd7a4f3f29ed0e1&query=";
const imgBaseURL = "https://spoonacular.com/recipeImages/";

const getRecipies = async (keyword = "dinner") => {
  try {
    const response = await fetch(`${baseURL}${keyword}&number=3`);
    const data = await response.json();
    const { results: APIrecipies } = data;
    const imgs = document.querySelectorAll(".recipe__img");
    const urls = document.querySelectorAll(".APIurl");
    const readyIns = document.querySelectorAll(".APIreadyIn");
    const servings = document.querySelectorAll(".APIservings");
    const imgSize = "240x150";
    const imgType = "jpg";

    if (APIrecipies.length === 0) { getRecipies("idea"); return; }

    APIrecipies.forEach((value, i) => {
      imgs[i].src = `${imgBaseURL}${APIrecipies[i].id}-${imgSize}.${imgType}`;
      urls[i].textContent = APIrecipies[i].title;
      urls[i].href = APIrecipies[i].sourceUrl;
      readyIns[i].textContent = APIrecipies[i].readyInMinutes;
      servings[i].textContent = APIrecipies[i].servings;
    });
  } catch (err) {
    console.error(err);
  }
};

export default getRecipies;
