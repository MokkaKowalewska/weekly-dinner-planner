const APIurl = "https://api.spoonacular.com/recipes/search?apiKey=0508ba3c86c542ecafd7a4f3f29ed0e1&query=";

const getRecipies = async (keyword) => {
  try {
    const response = await fetch(`${APIurl}${keyword}&number=5`);
    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};
