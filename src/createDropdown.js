export default function createDropdown({
  languages = ["English"],
  expandEvent = "click",
} = {}) {
  const toggleBtnElement = document.querySelector(
    ".language-selector .language-selector-btn"
  );
  const currentLanguage = document.querySelector(
    ".language-selector .current-language"
  );
  const optionsContainerElement = document.querySelector(
    ".language-selector .dropdown-options"
  );
  const optionsNodes = optionsContainerElement.childNodes;
  const VALID_EXPAND_EVENTS = ["hover", "click", "mousedown"];
  if (!expandEvent || !VALID_EXPAND_EVENTS.includes(expandEvent))
    return console.error(
      "Please use a valid event type for expanding the dropdown. Valid events are 'hover', 'click', 'mousedown'."
    );
  const expandEventType = expandEvent === "hover" ? "hover" : "mousedown";

  // method
  const toggleOptions = () =>
    optionsContainerElement.classList.toggle("opened");
  const hideOptions = () => optionsContainerElement.classList.remove("opened");
  const updateBtnTextWithChosenOption = (e) => {
    const listElem = e.target.closest("li");
    const chosenLanguage = listElem.querySelector("p").textContent;
    currentLanguage.textContent = chosenLanguage;
  };

  // attach event listeners
  toggleBtnElement.addEventListener(expandEventType, toggleOptions);
  toggleBtnElement.addEventListener("blur", hideOptions);
  optionsNodes.forEach((option) =>
    option.addEventListener("mousedown", updateBtnTextWithChosenOption)
  );

  return { toggleOptions, hideOptions };
}

//todo: in docs, explain what each parameter means, expected values, and show examples!
