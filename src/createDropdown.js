// #1: user should be able to decide option on whether dropdown is shown on hover or mouse over

// #2: user needs to use the classes we ask for

export default function createDropdown({
  toggleBtnSelector = ".dropdown .language-selector-btn",
  optionsContainerSelector = ".dropdown .dropdown-options",
  expandEvent = "click",
} = {}) {
  const toggleBtnElement = document.querySelector(toggleBtnSelector);
  const optionsContainerElement = document.querySelector(
    optionsContainerSelector
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
  const updateBtnTextWithChosenOption = (e) =>
    console.log(e.target.querySelector("p"));

  // attach event listeners
  toggleBtnElement.addEventListener(expandEventType, toggleOptions);
  toggleBtnElement.addEventListener("blur", hideOptions);
  optionsNodes.forEach((option) =>
    option.addEventListener("mousedown", updateBtnTextWithChosenOption)
  );

  return { toggleOptions, hideOptions };
}

//todo: in docs, explain what each parameter means, expected values, and show examples!
