export default function createDropdown({
  toggleBtnSelector,
  optionsSelector,
  expandEvent,
}) {
  const VALID_EXPAND_EVENTS = ["hover", "click", "mousedown"];

  const toggleBtnElement = document.querySelector(toggleBtnSelector);
  const optionsNodes = document.querySelectorAll(optionsSelector);

  // run
  if (!VALID_EXPAND_EVENTS.includes(expandEvent))
    console.error(
      "Please use a valid event type for expanding the dropdown. Valid events are 'hover', 'click', 'mousedown'."
    );

  return;
}
