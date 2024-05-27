const dropdownBtn = document.querySelector(".language-selector-btn");
const dropdownOptionsContainer = document.querySelector(".dropdown-options");
const dropdownOptions = document.querySelectorAll(".option");
const currentLanguage = document.querySelector(".selected-language");

dropdownBtn.addEventListener("mousedown", () =>
  dropdownOptionsContainer.classList.toggle("opened")
);
dropdownBtn.addEventListener("blur", () =>
  dropdownOptionsContainer.classList.remove("opened")
);
dropdownOptions.forEach((elem) =>
  elem.addEventListener("mousedown", () => {
    const language = elem.querySelector("p").textContent;
    currentLanguage.textContent = language;
  })
);
