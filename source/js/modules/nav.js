export default function openNav() {
    // Навигация в шапке сайта
    const navToggle = document.querySelector(".page-header__burger-btn");
    const navList = document.querySelector(".page-nav__list");

    navToggle.addEventListener("click", function () {
        navToggle.classList.toggle("page-header__burger-btn--opened");
        navList.classList.toggle("page-nav__list--opened");
    });

    // Окно Log in

    const navLoginBtn = document.querySelector(".user-nav__login");
    const modalLogin = document.querySelector(".modal-login");
    const loginCloseBtn = document.querySelector(".login--close");

    navLoginBtn.addEventListener("click", function () {
        modalLogin.classList.toggle("modal--opened");
    });

    loginCloseBtn.addEventListener("click", function () {
        modalLogin.classList.toggle("modal--opened");
    });

    // Окно Sign up

    const navSignUpBtn = document.querySelector(".user-nav__signUp");
    const modalSignUp = document.querySelector(".modal-signup");
    const signupCloseBtn = document.querySelector(".signup--close");

    navSignUpBtn.addEventListener("click", function () {
        modalSignUp.classList.toggle("modal--opened");
    });

    signupCloseBtn.addEventListener("click", function () {
        modalSignUp.classList.toggle("modal--opened");
    });
}
