const dropdownBtn = document.querySelector(".language-selector-btn");
const dropdownOptions = document.querySelector(".dropdown-options");
const currentLanguage = document.querySelector(".selected-language");

dropdownBtn.addEventListener("mousedown", () =>
  dropdownOptions.classList.toggle("opened")
);
dropdownBtn.addEventListener("blur", () =>
  dropdownOptions.classList.remove("opened")
);
