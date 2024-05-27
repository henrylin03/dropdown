export default function createDropdown({
  toggleBtnSelector,
  optionsSelector,
  expandEvent,
  replaceTextWithSelection,
}) {
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

  // attach event listeners
  toggleBtnElement.addEventListener(expandEventType, toggleOptions);
  toggleBtnElement.addEventListener("blur", hideOptions);

  return;
}

//todo: in docs, explain what each parameter means, expected values, and show examples!
