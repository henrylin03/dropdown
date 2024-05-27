export default function createDropdown({
  toggleBtnSelector,
  optionsSelector,
  expandEvent,
}) {
  // select
  const toggleBtnElement = document.querySelector(toggleBtnSelector);
  const optionsNodes = document.querySelectorAll(optionsSelector);
  const VALID_EXPAND_EVENTS = ["hover", "click", "mousedown"];
  if (!expandEvent || !VALID_EXPAND_EVENTS.includes(expandEvent))
    console.error(
      "Please use a valid event type for expanding the dropdown. Valid events are 'hover', 'click', 'mousedown'."
    );
  const expandEventType = expandEvent === "hover" ? "hover" : "mousedown";

  // method
  const toggleOptions = () => toggleBtnElement.classList.toggle("opened");
  const hideOptions = () => toggleBtnElement.classList.remove("opened");

  // attach event listeners
  toggleBtnElement.addEventListener(expandEventType, toggleOptions);
  toggleBtnElement.addEventListener("blur", hideOptions);

  return;
}
