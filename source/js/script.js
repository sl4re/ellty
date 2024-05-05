import mainPage from "./modules/main-page.js";
import openNav from "./modules/nav.js";
import createDesign from "./modules/create-design.js";

document.addEventListener("DOMContentLoaded", () => {
    openNav();

    if (document.title === "ellty | Home") {
        mainPage();
    } else if (document.title === "ellty | Design") {
        createDesign();
    }
});
