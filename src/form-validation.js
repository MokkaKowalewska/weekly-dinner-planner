/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import { sendEmail } from "./send-email";

export default class ValidateForm {
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

  displayErrors(inputValidated, violetion) {
    const input = inputValidated;
    console.dir(input);

    if (input.type === "checkbox") {
      input.parentNode.nextElementSibling.style.webkitTextFillColor = "#ff2424";
      input.parentNode.nextElementSibling.textContent = this.messages[violetion];
      input.setAttribute("aria-describedby", `error-for-${inputValidated.id}`);
      return;
    }

    input.nextElementSibling.style.webkitTextFillColor = "#ff2424";
    input.nextElementSibling.textContent = this.messages[violetion];
    input.setAttribute("aria-describedby", `error-for-${inputValidated.id}`);
  }

  inputsValidation(testedInput) {
    const { validity } = testedInput;

    console.log(testedInput.validity);

    if (!testedInput.checkValidity()) {
      // eslint-disable-next-line prefer-const
      for (let violetion in validity) {
        if (validity[violetion] === true && violetion !== "valid") {
          console.log(violetion);
          this.displayErrors(testedInput, violetion);
        }
        return;
      }

      this.displayErrors(testedInput, "check");
      // testedInput.nextElementSibling.style.webkitTextFillColor = "#5eb15e";
    }
  }


  realtimeValidation() {
    this.inputs.forEach((input) => {
      input.addEventListener(
        "blur", (e) => {
          console.log(event);
          this.inputsValidation(e.target);
        },
        false,
      );
    });
  }


  validateOnSubmit() {
    this.form.addEventListener(
      "submit", (e) => {
        e.preventDefault();

        this.inputs.forEach((input) => {
          this.inputsValidation(input);
        });

        if (this.inputs.forEach((input) => input.checkValidity)) {
          sendEmail();
        }
      }, false,
    );
  }
}
