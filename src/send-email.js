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

export default sendEmail;
