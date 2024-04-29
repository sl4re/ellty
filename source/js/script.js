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

// Функция для слайдеров

const slide = (slider, step, period) => () => {
    const startTime = Date.now();
    const startLeft = slider.scrollLeft;
    const render = () => {
        const dt = Date.now() - startTime;
        if (dt < period) {
            slider.scrollLeft = startLeft + (step * dt) / period;
            requestAnimationFrame(render);
        }
    };
    requestAnimationFrame(render);
};

// Preview слайдер

const previewSlider = document.querySelector("#preview-slider");
const previewPrevBtn = document.querySelector("#preview-prev");
const previewNextBtn = document.querySelector("#preview-next");

previewPrevBtn.addEventListener("click", slide(previewSlider, -300, 300));
previewNextBtn.addEventListener("click", slide(previewSlider, 300, 300));

// Templates слайдер

const templatesSlider = document.querySelector("#templates-slider");
const templatesPrevBtn = document.querySelector("#templates-prev");
const templatesNextBtn = document.querySelector("#templates-next");

templatesPrevBtn.addEventListener("click", slide(templatesSlider, -300, 300));
templatesNextBtn.addEventListener("click", slide(templatesSlider, 300, 300));
