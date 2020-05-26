require("dotenv").config();

const baseURL = process.env.API_KEY;
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

    if (APIrecipies.length === 0) {
      getRecipies("idea");
      return;
    }

    APIrecipies.map((value, i) => {
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
