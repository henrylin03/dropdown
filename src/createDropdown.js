export default function createDropdown({
  toggleBtnSelector,
  optionsSelector = "li.option",
  expandEvent,
  replaceTextWithSelection = false,
} = {}) {
  // select
  const toggleBtnElement = document.querySelector(toggleBtnSelector);
  const optionsNodes = document.querySelectorAll(optionsSelector);
  const VALID_EXPAND_EVENTS = ["hover", "click", "mousedown"];
  if (!expandEvent || !VALID_EXPAND_EVENTS.includes(expandEvent))
    return console.error(
      "Please use a valid event type for expanding the dropdown. Valid events are 'hover', 'click', 'mousedown'."
    );
  const expandEventType = expandEvent === "hover" ? "hover" : "mousedown";
  if (typeof replaceTextWithSelection != "boolean")
    return console.error(
      "Please ensure only boolean (true or false) value for the 'replaceTextWithSelector' option."
    );

  // method
  const toggleOptions = () => toggleBtnElement.classList.toggle("opened");
  const hideOptions = () => toggleBtnElement.classList.remove("opened");
  // const updateBtnTextWithChosenOption = (e) => e.target.querySelector

  // attach event listeners
  toggleBtnElement.addEventListener(expandEventType, toggleOptions);
  toggleBtnElement.addEventListener("blur", hideOptions);

  if (!replaceTextWithSelection) return { toggleOptions, hideOptions };

  // optionsNodes.forEach(optionElement => optionElement.addEventListener("mousedown")
}

//todo: in docs, explain what each parameter means, expected values, and show examples!
