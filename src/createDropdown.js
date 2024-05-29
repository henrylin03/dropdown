export default function createDropdown({
  containerElementCSSSelector = "body",
  languages = ["English"],
  expandEvent = "click",
} = {}) {
  // container element is the parent of the language picker
  const containerElement = document.querySelector(containerElementCSSSelector);

  // generate the language-picker
  const languagePickerElement = document.createElement("article");
  languagePickerElement.classList.add("language-picker");

  const toggleBtnElement = document.createElement("button");
  toggleBtnElement.type = "button";
  toggleBtnElement.classList.add("language-picker-btn");

  const toggleBtnLeftContainer = document.createElement("div");
  toggleBtnLeftContainer.classList.add("left");

  const globeIcon = document.createElement("figure");
  globeIcon.classList.add("globe-icon");

  const currentLanguageDisplayed = document.createElement("p");
  currentLanguageDisplayed.classList.add("current-language");
  currentLanguageDisplayed.textContent = languages[0];

  const chevronIcon = document.createElement("figure");
  chevronIcon.classList.add("chevron-icon");

  toggleBtnLeftContainer.appendChild(globeIcon);
  toggleBtnLeftContainer.appendChild(currentLanguageDisplayed);
  toggleBtnElement.appendChild(toggleBtnLeftContainer);
  toggleBtnElement.appendChild(chevronIcon);

  languagePickerElement.appendChild(toggleBtnElement);

  const dropdownOptions = document.createElement("ul");
  dropdownOptions.classList.add("dropdown-options");
  languages.forEach((language) => {
    const languageListItem = document.createElement("li");
    languageListItem.classList.add("option");
    const left = document.createElement("figure");
    const languageText = document.createElement("p");
    languageText.textContent = language;

    languageListItem.appendChild(left);
    languageListItem.appendChild(languageText);
    dropdownOptions.appendChild(languageListItem);
  });

  languagePickerElement.appendChild(dropdownOptions);

  containerElement.appendChild(languagePickerElement);

  // attach event listeners

  // add language-picker to container element

  // const toggleBtnElement = document.querySelector(
  //   ".language-selector .language-selector-btn"
  // );
  // const currentLanguage = document.querySelector(
  //   ".language-selector .current-language"
  // );
  // const optionsContainerElement = document.querySelector(
  //   ".language-selector .dropdown-options"
  // );
  // const optionsNodes = optionsContainerElement.childNodes;
  // const VALID_EXPAND_EVENTS = ["hover", "click", "mousedown"];
  // if (!expandEvent || !VALID_EXPAND_EVENTS.includes(expandEvent))
  //   return console.error(
  //     "Please use a valid event type for expanding the dropdown. Valid events are 'hover', 'click', 'mousedown'."
  //   );
  // const expandEventType = expandEvent === "hover" ? "hover" : "mousedown";
  // // methods
  // const toggleOptions = () =>
  //   optionsContainerElement.classList.toggle("opened");
  // const hideOptions = () => optionsContainerElement.classList.remove("opened");
  // const updateBtnTextWithChosenOption = (e) => {
  //   const listElem = e.target.closest("li");
  //   const chosenLanguage = listElem.querySelector("p").textContent;
  //   currentLanguage.textContent = chosenLanguage;
  // };
  // // attach event listeners
  // toggleBtnElement.addEventListener(expandEventType, toggleOptions);
  // toggleBtnElement.addEventListener("blur", hideOptions);
  // optionsNodes.forEach((option) =>
  //   option.addEventListener("mousedown", updateBtnTextWithChosenOption)
  // );
  // return { toggleOptions, hideOptions };
}

//todo: in docs, explain what each parameter means, expected values, and show examples!

// todo: function for generating button, and function for generating dropdown options
