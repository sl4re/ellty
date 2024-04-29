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

// Фильтры на странице Create Design

const showPopular = document.querySelector(".show-popular");
const showMedia = document.querySelector(".show-media");
const showMarketing = document.querySelector(".show-marketing");
const showAdvertising = document.querySelector(".show-advertising");
const showBranding = document.querySelector(".show-branding");
const showOffice = document.querySelector(".show-office");
const showMore = document.querySelector(".show-more");

const filtersPopular = document.querySelector(".popular");
const filtersMedia = document.querySelector(".social-media");
const filtersMarketing = document.querySelector(".marketing");
const filtersAdvertising = document.querySelector(".advertising");
const filtersBranding = document.querySelector(".branding");
const filtersOffice = document.querySelector(".office");
const filtersMore = document.querySelector(".more");

showPopular.addEventListener("click", function () {
    filtersPopular.classList.toggle("popular--opened");
});

showMedia.addEventListener("click", function () {
    filtersMedia.classList.toggle("social-media--opened");
});

showMarketing.addEventListener("click", function () {
    filtersMarketing.classList.toggle("marketing--opened");
});

showAdvertising.addEventListener("click", function () {
    filtersAdvertising.classList.toggle("advertising--opened");
});

showBranding.addEventListener("click", function () {
    filtersBranding.classList.toggle("branding--opened");
});

showOffice.addEventListener("click", function () {
    filtersOffice.classList.toggle("office--opened");
});

showMore.addEventListener("click", function () {
    filtersMore.classList.toggle("more--opened");
});

// Открытие фильтров

const showFilters = document.querySelector(".design-filters__show-btn");
const filtersWrapper = document.querySelector(".design-filters__inner");
const filtersMobile = document.querySelector(".design-filters");
const contentWrapper = document.querySelector(".design-content__inner");

if (document.documentElement.clientWidth > 1024) {
    showFilters.addEventListener("click", function () {
        filtersWrapper.classList.toggle("filters--open");
        contentWrapper.classList.toggle("design-content__inner--filters-closed");
    });
}

// Открытие фильтров на мобилке
if (document.documentElement.clientWidth <= 1024) {
    showFilters.addEventListener("click", function () {
        filtersMobile.classList.toggle("filters--open-mobile");
        filtersWrapper.classList.remove("filters--open");
    });
}

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

// Открытие карточки дизайна

const designCard = document.querySelector(".design-content__design-card-wrapper");
const openDesignCard = document.querySelector(".card-template--open");
const closeDesignCard = document.querySelector(".design-card__close-btn");

openDesignCard.addEventListener("click", function () {
    designCard.classList.add("design-content__design-card-wrapper--open");
});

closeDesignCard.addEventListener("click", function () {
    designCard.classList.remove("design-content__design-card-wrapper--open");
});

// Tags слайдер

const tagsSlider = document.querySelector("#tags-slider");
const tagsPrevBtn = document.querySelector("#tags-prev");
const tagsNextBtn = document.querySelector("#tags-next");

tagsPrevBtn.addEventListener("click", slide(tagsSlider, -300, 300));
tagsNextBtn.addEventListener("click", slide(tagsSlider, 300, 300));

// Tags слайдер в модалке

const tagsSliderModal = document.querySelector("#tags-slider--modal");
const tagsPrevBtnModal = document.querySelector("#tags-prev--modal");
const tagsNextBtnModal = document.querySelector("#tags-next--modal");

tagsPrevBtnModal.addEventListener("click", slide(tagsSliderModal, -300, 300));
tagsNextBtnModal.addEventListener("click", slide(tagsSliderModal, 300, 300));

// Templates слайдер в модалке

const templatesSliderModalTop = document.querySelector("#templates-slider--modal-top");
const templatesSliderModalBottom = document.querySelector("#templates-slider--modal-bottom");
const templatesPrevBtnModal = document.querySelector("#templates-prev--modal");
const templatesNextBtnModal = document.querySelector("#templates-next--modal");

templatesPrevBtnModal.addEventListener("click", slide(templatesSliderModalTop, -300, 300));
templatesPrevBtnModal.addEventListener("click", slide(templatesSliderModalBottom, -300, 300));
templatesNextBtnModal.addEventListener("click", slide(templatesSliderModalTop, 300, 300));
templatesNextBtnModal.addEventListener("click", slide(templatesSliderModalBottom, 300, 300));
