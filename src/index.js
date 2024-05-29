import "./assets/styles/global.css";
import createDropdown from "./createDropdown";

const LANGUAGES = ["English", "简体中文", "繁體中文"];
createDropdown({ expandEvent: "click", languages: LANGUAGES });
createDropdown({ expandEvent: "hover", languages: LANGUAGES });
