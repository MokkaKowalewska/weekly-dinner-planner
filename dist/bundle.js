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

/***/ "./src/add-meal.js":
/*!*************************!*\
  !*** ./src/add-meal.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetch_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch-api */ "./src/fetch-api.js");


function addMeal(text) {
  const meal = {
    text,
    id: Date.now(),
  };

  // create a meal as li element, create delete button
  const ul = document.querySelector(".favMeals__ul");
  ul.insertAdjacentHTML(
    "beforeend",
    `
  <li class="favMeals__li box animated fadeInDown" data-key="${meal.id}">
    <span class="li__span">${meal.text}</span>
    <svg class="favMeals__deleteBtn" aria-label="Delete button" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/></svg>
  </li>
  `,
  );

  const selects = document.querySelectorAll(".letsPlan__select");
  selects.forEach((select) => {
    select.insertAdjacentHTML(
      "beforeend",
      `<option data-key="${meal.id}">${meal.text}</option>`,
    );
  });
}

function handleAddMeal() {
  const form = document.querySelector(".favMeals__form");

  form.addEventListener(
    "submit",
    (e) => {
      e.preventDefault();
      const input = document.querySelector(".favMeals__input");
      const text = input.value.trim();
      if (text !== "") {
        addMeal(text);
        Object(_fetch_api__WEBPACK_IMPORTED_MODULE_0__["default"])(text);
        input.value = "";
        input.focus();
      }
    },
    false,
  );
}

/* harmony default export */ __webpack_exports__["default"] = (handleAddMeal);


/***/ }),

/***/ "./src/delete-meal.js":
/*!****************************!*\
  !*** ./src/delete-meal.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (deleteBtnClicked);


/***/ }),

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

/* harmony default export */ __webpack_exports__["default"] = (getRecipies);


/***/ }),

/***/ "./src/form-validation.js":
/*!********************************!*\
  !*** ./src/form-validation.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _send_email__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send-email */ "./src/send-email.js");


class ValidateForm {
  constructor(form, inputsClassName, errorMsgClassName, messages) {
    this.form = form;
    this.inputs = form.querySelectorAll(inputsClassName);
    this.errorMsgList = document.querySelectorAll(errorMsgClassName);
    this.messages = messages;
    this.noValidate();
    this.realtimeValidation();
    this.validateOnSubmit();
  }

  noValidate() {
    this.form.setAttribute("novalidate", true);
  }

  displayErrors(inputValidated, violation) {
    const input = inputValidated;

    if (input.type === "checkbox") {
      input.parentNode.nextElementSibling.style.color = "#ff2424";
      input.parentNode.nextElementSibling.textContent = this.messages[violation];
      input.setAttribute("aria-describedby", `error-for-${inputValidated.id}`);
      return;
    }

    input.nextElementSibling.style.color = "#ff2424";
    input.nextElementSibling.textContent = this.messages[violation];
    input.setAttribute("aria-describedby", `error-for-${inputValidated.id}`);
  }

  inputsValidation(testedInput) {
    const { validity } = testedInput;

    if (!testedInput.checkValidity()) {
      for (let violation in validity) {
        if (validity[violation] === true && violation !== "valid") {
          this.displayErrors(testedInput, violation);
        }
      }
      return;
    }
    this.displayErrors(testedInput, "check");
  }

  realtimeValidation() {
    this.inputs.forEach((input) => {
      input.addEventListener(
        "change", (e) => {
          this.inputsValidation(e.target);
        },
        false,
      );
    });
  }

  validateOnSubmit() {
    this.form.addEventListener(
      "submit", (e) => {
        const inputsArr = Array.from(this.inputs);

        e.preventDefault();

        inputsArr.forEach((input) => {
          this.inputsValidation(input);
        });

        if (inputsArr.every((input) => input.checkValidity() === true)) {
          Object(_send_email__WEBPACK_IMPORTED_MODULE_0__["default"])();
        }
      }, false,
    );
  }
}

/* harmony default export */ __webpack_exports__["default"] = (ValidateForm);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _show_dates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-dates */ "./src/show-dates.js");
/* harmony import */ var _fetch_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch-api */ "./src/fetch-api.js");
/* harmony import */ var _add_meal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-meal */ "./src/add-meal.js");
/* harmony import */ var _delete_meal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delete-meal */ "./src/delete-meal.js");
/* harmony import */ var _form_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-validation */ "./src/form-validation.js");







Object(_show_dates__WEBPACK_IMPORTED_MODULE_0__["default"])();
Object(_fetch_api__WEBPACK_IMPORTED_MODULE_1__["default"])();
Object(_add_meal__WEBPACK_IMPORTED_MODULE_2__["default"])();
Object(_delete_meal__WEBPACK_IMPORTED_MODULE_3__["default"])();


const emailForm = document.querySelector(".letsPlan__form");
const messages = {
  valueMissing: "Oh noes, this field cannot be empty!",
  typeMismatch: "It doesn't look like email address...",
  patternMismatch: "It doesn't look like email address...",
  check: "",
};

new _form_validation__WEBPACK_IMPORTED_MODULE_4__["default"](emailForm, ".validate", ".form__errorMsg", messages);


/***/ }),

/***/ "./src/send-email.js":
/*!***************************!*\
  !*** ./src/send-email.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function sendEmail() {
  const status = document.querySelector(".form__status");
  const submitBtn = document.querySelector(".form__btn");
  const emailWrapper = document.querySelector(".emailWrapper");
  const email = document.getElementById("email");
  const days = document.querySelectorAll(".day");
  const meals = document.querySelectorAll(".letsPlan__select");

  submitBtn.disabled = true;
  status.innerHTML = "sending...";

  let message = "";

  days.forEach((day, i) => {
    message += `${day.textContent} - ${meals[i].value}<br>`;
  });

  const formdata = new FormData();
  formdata.append("email", email.value);
  formdata.append("message", message);

  const ajax = new XMLHttpRequest();
  ajax.open("POST", "send-email.php", true);
  ajax.send(formdata);
  ajax.onreadystatechange = () => {
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
}

/* harmony default export */ __webpack_exports__["default"] = (sendEmail);


/***/ }),

/***/ "./src/show-dates.js":
/*!***************************!*\
  !*** ./src/show-dates.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const week = [];

function getDates() {
  const today = new Date();

  for (let i = 1; i <= 7; i++) {
    const monday = today.getDate() - today.getDay() + i;
    const options = {
      weekday: "short", year: "numeric", month: "long", day: "numeric",
    };
    const day = new Date(today.setDate(monday)).toLocaleDateString("en-EN", options);
    week.push(day);
  }
}

function showDates() {
  const days = document.querySelectorAll(".day");

  getDates();

  days.forEach((day, i) => {
    day.insertAdjacentHTML(
      "beforeend",
      `<span>${week[i]}</span>`,
    );
  });
}

/* harmony default export */ __webpack_exports__["default"] = (showDates);


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map