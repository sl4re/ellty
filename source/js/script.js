"use strict";

// Навигация в шапке сайта
const navToggle = document.querySelector(".page-header__burger-btn");
const navList = document.querySelector(".page-nav__list");

navToggle.addEventListener("click", function () {
    navToggle.classList.toggle("page-header__burger-btn--opened");
    navList.classList.toggle("page-nav__list--opened");
});

// Окно Log in
const navLoginBtn = document.querySelector(".user-nav__login");
const modalWindow = document.querySelector(".modal-container");
const modalCloseBtn = document.querySelector(".modal__close-btn");

navLoginBtn.addEventListener("click", function () {
    modalWindow.classList.toggle("modal--opened");
});

modalCloseBtn.addEventListener("click", function () {
    modalWindow.classList.toggle("modal--opened");
});
