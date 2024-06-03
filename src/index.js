import "./assets/styles/global.css";
import createLanguagePicker from "./createLanguagePicker";

const LANGUAGES = ["English", "简体中文", "繁體中文"];

const clickOptions = {
  expandEvent: "click",
  containerElementCSSSelector: "#click-dropdown",
  languages: LANGUAGES,
};
const hoverOptions = {
  expandEvent: "hover",
  containerElementCSSSelector: "#hover-dropdown",
  languages: LANGUAGES,
};

createLanguagePicker(clickOptions);
createLanguagePicker(hoverOptions);
