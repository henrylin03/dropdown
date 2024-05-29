import "./assets/styles/global.css";
import createDropdown from "./createDropdown";

const LANGUAGES_CHINESE = ["English", "简体中文", "繁體中文"];
const LANGUAGES_UN = ["English", "简体中文"];

createDropdown({
  containerElementCSSSelector: "#click-dropdown",
  expandEvent: "click",
  languages: LANGUAGES_CHINESE,
});
createDropdown({
  containerElementCSSSelector: "#hover-dropdown",
  expandEvent: "hover",
  languages: LANGUAGES_CHINESE,
});
