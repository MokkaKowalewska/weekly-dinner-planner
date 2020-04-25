/* eslint-disable guard-for-in */
import sendEmail from "./send-email";

export default class ValidateForm {
  constructor(form, inputsClassName, errorMsgClassName, messages) {
    this.form = form;
    this.inputs = form.querySelectorAll(inputsClassName);
    this.errorMsg = document.querySelectorAll(errorMsgClassName);
    this.messages = messages;
    this.noValidate();
    this.realtimeValidation();
    this.validateOnSubmit();
  }

  noValidate() {
    this.form.setAttribute("novalidate", true);
  }

  realtimeValidation() {
    this.inputs.forEach((input) => {
      input.addEventListener(
        "keyup", debounce((event) => {
          const testedInput = event.target;
          const { validity } = testedInput;

          // eslint-disable-next-line no-restricted-syntax
          for (const violetion in validity) {
            if (validity[violetion] === true && violetion !== "valid") {
              this.displayErrors(testedInput, violetion);
              testedInput.nextElementSibling.style.webkitTextFillColor = "#ff2424";
              return;
            }

            this.displayErrors(testedInput, "check");
            testedInput.nextElementSibling.style.webkitTextFillColor = "#5eb15e";
          }
        }),
      );
    }, false);
  }


  displayErrors(inputValidated, violetion) {
    const input = inputValidated;
    input.nextElementSibling.textContent = this.messages[violetion];
    input.setAttribute("aria-describedby", `error-for-${inputValidated.id}`);
  }


  validateOnSubmit() {
    this.form.addEventListener(
      "submit", (e) => {
        this.inputs.forEach((input) => {
          if (input.checkValidity()) {
            sendEmail();
          } else {
            console.warn("no validate");
          }
        });
      },
    );
  }
}
