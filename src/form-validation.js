import sendEmail from "./send-email";

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
          sendEmail();
        }
      }, false,
    );
  }
}

export default ValidateForm;
