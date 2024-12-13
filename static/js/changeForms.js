//CHANGING FORMS:
const triggers = document.querySelectorAll(".trigger");
const likely = document.querySelector("#radio-9");
const maybe = document.querySelector("#radio-10");
const unlikely = document.querySelector("#radio-11");

const yes = document.querySelector("#radio-24");
const no = document.querySelector("#radio-25");

const form0 = document.querySelector("#form-0");
const forms1 = document.querySelectorAll(".form-1");
const form3 = document.querySelector("#form-3");

const form1reveal = () => {
  forms1.forEach((form) => {
    form.classList.add("revelar");
    form.classList.remove("ocultar");
  });
};

triggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    if (likely.checked) {
      // Mostrar form-0 y form-1
      form0.classList.add("revelar");
      form0.classList.remove("ocultar");
      form1reveal();
    } else {
      // Ocultar form-0
      form0.classList.add("ocultar");
      form0.classList.remove("revelar");

      // Mostrar solo form-1
      form1reveal();
    }

    if (yes.checked) {
      form3.classList.add("revelar");
      form3.classList.remove("ocultar");
    } else {
      form3.classList.add("ocultar");
      form3.classList.remove("revelar");
    }
  });
});
