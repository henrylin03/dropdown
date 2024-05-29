import "./assets/styles/global.css";
import createDropdown from "./createDropdown";

const LANGUAGES = ["English", "简体中文", "繁體中文"];

const clickDropdownOptions = {
  containerElementCSSSelector: "#click-dropdown",
  expandEvent: "click",
  languages: LANGUAGES,
};
const hoverDropdownOptions = {
  containerElementCSSSelector: "#hover-dropdown",
  expandEvent: "hover",
  languages: LANGUAGES,
};

createDropdown(clickDropdownOptions);
createDropdown(hoverDropdownOptions);
