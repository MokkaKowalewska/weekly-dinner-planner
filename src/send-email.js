const form = document.querySelector(".form");

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

  const formdata = new FormData();
  formdata.append("email", email.value);

  for (let i = 0; i < days.length; i++) {
    formdata.append(`row${i}`, days[i].textContent);
    formdata.append(`row${i}`, meals[i].value);
    console.log(formdata);
  }


  const ajax = new XMLHttpRequest();

  ajax.open("POST", "contact-form.php", true);
  ajax.send(formdata);

  ajax.onreadystatechange = function () {
    if (ajax.readyState == 4 && ajax.status == 200) {
      if (ajax.responseText == "success") {
        status.innerHTML = ajax.responseText;
        emailWrapper.innerHTML = `Thank You for Your message, ${name.value}!`;
      } else {
        status.innerHTML = ajax.responseText;
        submitBtn.disabled = false;
      }
    }
  };
},
false);
