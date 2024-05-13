import mainPage from "./modules/main-page.js";
import openNav from "./modules/nav.js";
import createDesign from "./modules/create-design.js";
import '../sass/style.scss';

document.addEventListener("DOMContentLoaded", () => {
    const htmlPageName = {
      home: 'ellty | Home',
      design: 'ellty | Design'
    };

    openNav();

    switch(document.title) {
      case htmlPageName.home:
        mainPage();
        break;
      case htmlPageName.design:
        createDesign();
        break;
    }
});
