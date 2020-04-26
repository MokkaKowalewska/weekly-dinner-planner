const baseURL = "https://api.spoonacular.com/recipes/search?apiKey=0508ba3c86c542ecafd7a4f3f29ed0e1&query=";
const imgBaseURL = "https://spoonacular.com/recipeImages/";

const getRecipies = async (keyword) => {
  try {
    const response = await fetch(`${baseURL}${keyword}&number=3`);
    const data = await response.json();

    console.log(data);

    return data;
  } catch (err) {
    console.error(err);
  }
};

getRecipies("pasta").then(((data) => {
  const { results: APIrecipies } = data;
  const imgs = document.querySelectorAll(".recipe__img");
  const urls = document.querySelectorAll(".APIurl");
  const readyIns = document.querySelectorAll(".APIreadyIn");
  const servings = document.querySelectorAll(".APIservings");
  console.log(APIrecipies.id);
  const imgSize = "240x150";
  const imgType = "jpg";
  const imgURL = `${imgBaseURL}${APIrecipies.id}-${imgSize}.${imgType}`;

  APIrecipies.forEach((value, i) => {
    imgs[i].src = imgURL;
    urls[i].textContent = APIrecipies[i].title;
    urls[i].href = APIrecipies[i].sourceUrl;
    readyIns[i].insertAdjacentText("afterbegin", APIrecipies[i].readyInMinutes);
    servings[i].insertAdjacentText("afterbegin", APIrecipies[i].servings);
  });
}));

console.trace();
