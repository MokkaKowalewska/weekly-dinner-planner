/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/fetch-api.js":
/*!**************************!*\
  !*** ./src/fetch-api.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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


/* harmony default export */ __webpack_exports__["default"] = (getRecipies);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetch_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch-api */ "./src/fetch-api.js");


__webpack_require__(/*! ./send-email.js */ "./src/send-email.js");

Object(_fetch_api__WEBPACK_IMPORTED_MODULE_0__["default"])();

let favMeals = [];

function addMeal(text) {
  const meal = {
    text,
    id: Date.now(),
  };
  favMeals.push(meal);
  Object(_fetch_api__WEBPACK_IMPORTED_MODULE_0__["default"])(meal.text);

  // create a meal as li element, create delete button
  const ul = document.querySelector(".favMeals__ul");
  ul.insertAdjacentHTML(
    "beforeend",
    `
  <li class="favMeals__li box" data-key="${meal.id}">
    <span class="li__span">${meal.text}</span>
    <button class="favMeals__deleteBtn"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/></svg></button>
  </li>
  `,
  );

  const selectMeal = document.querySelectorAll(".selectMeal");
  for (let j = 0; j < selectMeal.length; j++) {
    selectMeal[j].insertAdjacentHTML(
      "beforeend",
      `
  <option data-key="${meal.id}">${meal.text}</option>
  `,
    );
  }
}

// add a meal to "favourite meals" and "let's plan" sections
const form = document.querySelector(".favMeals__form");
form.addEventListener(
  "submit",
  (event) => {
    event.preventDefault();
    const input = document.querySelector(".favMeals__input");

    const text = input.value.trim();
    if (text !== "") {
      addMeal(text);
      input.value = "";
      input.focus();
    }
  },
  false,
);

// delete meal in "favourite meals" and "let's plan" sections
function deleteMeal(key) {
  favMeals = favMeals.filter((mealToDel) => mealToDel.id !== Number(key));
  const mealToDel = document.querySelectorAll(`[data-key="${key}"]`);

  for (let i = 0; i < mealToDel.length; i++) {
    mealToDel[i].remove();
  }
}

(function deleteBtnClicked() {
  const ul = document.querySelector(".favMeals__ul");

  ul.addEventListener(
    "click",
    (event) => {
      if (event.target.classList.contains("favMeals__deleteBtn")) {
        const mealKey = event.target.parentElement.dataset.key;
        deleteMeal(mealKey);
      }
    },
    false,
  );
}());

const week = [];

(function getDates() {
  const today = new Date();


  for (let i = 1; i <= 7; i++) {
    const monday = today.getDate() - today.getDay() + i;
    const options = {
      weekday: "short", year: "numeric", month: "long", day: "numeric",
    };
    const day = new Date(today.setDate(monday)).toLocaleDateString("en-EN", options);
    week.push(day);
  }
}());

(function showDates() {
  const days = document.querySelectorAll(".day");

  for (let i = 0; i < week.length; i++) {
    days[i].insertAdjacentHTML(
      "beforeend",
      `
<span>${week[i]}</span>
  `,
    );
  }
}());


/***/ }),

/***/ "./src/send-email.js":
/*!***************************!*\
  !*** ./src/send-email.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const form = document.querySelector(".form");

function sendEmail() {
  form.addEventListener("submit", (e) => {
    const status = document.querySelector(".form__status");
    const submitBtn = document.querySelector(".form__btn");
    const emailWrapper = document.querySelector(".emailWrapper");
    const email = document.getElementById("email");
    const days = document.querySelectorAll(".day");
    const meals = document.querySelectorAll(".selectMeal");

    e.preventDefault();

    submitBtn.disabled = true;
    status.innerHTML = "sending...";

    let message = "";

    for (let i = 0; i < days.length; i++) {
      message += `${days[i].textContent} - ${meals[i].value}</br>`;
    }

    const formdata = new FormData();
    formdata.append("email", email.value);
    formdata.append("message", message);

    const ajax = new XMLHttpRequest();
    ajax.open("POST", "send-email.php", true);
    ajax.send(formdata);
    ajax.onreadystatechange = function () {
      if (ajax.readyState === 4 && ajax.status === 200) {
        if (ajax.responseText === "success") {
          status.innerHTML = ajax.responseText;
          emailWrapper.innerHTML = "Yay! Your plan is waiting for You in Your inbox!";
        } else {
          status.innerHTML = ajax.responseText;
          submitBtn.disabled = false;
        }
      }
    };
  },
  false);
}

/* harmony default export */ __webpack_exports__["default"] = (sendEmail);


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map