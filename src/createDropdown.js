// #1: user should be able to decide option on whether dropdown is shown on hover or mouse over

// #2: user needs to use the classes we ask for

export default function createDropdown({
  toggleBtnSelector = ".language-selector-btn",
  optionsSelector = "li.option",
  expandEvent = "click",
} = {}) {
  const toggleBtnElement = document.querySelector(toggleBtnSelector);
  const optionsNodes = document.querySelectorAll(optionsSelector);
  const VALID_EXPAND_EVENTS = ["hover", "click", "mousedown"];
  if (!expandEvent || !VALID_EXPAND_EVENTS.includes(expandEvent))
    return console.error(
      "Please use a valid event type for expanding the dropdown. Valid events are 'hover', 'click', 'mousedown'."
    );
  const expandEventType = expandEvent === "hover" ? "hover" : "mousedown";

  // method
  const toggleOptions = () => toggleBtnElement.classList.toggle("opened");
  const hideOptions = () => toggleBtnElement.classList.remove("opened");
  const updateBtnTextWithChosenOption = (e) =>
    console.log(e.target.querySelector("p"));

  // attach event listeners
  toggleBtnElement.addEventListener(expandEventType, toggleOptions);
  toggleBtnElement.addEventListener("blur", hideOptions);
  optionsNodes.forEach((option) =>
    option.addEventListener("mousedown", updateBtnTextWithChosenOption)
  );

  return { toggleOptions, hideOptions };

  // optionsNodes.forEach(optionElement => optionElement.addEventListener("mousedown")
}

//todo: in docs, explain what each parameter means, expected values, and show examples!
