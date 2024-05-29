import "./assets/styles/global.css";
import createDropdown from "./createDropdown";

const LANGUAGES_CHINESE = ["English", "简体中文", "繁體中文"];
createDropdown({ expandEvent: "click", languages: LANGUAGES_CHINESE });
createDropdown({ expandEvent: "hover", languages: LANGUAGES_CHINESE });
