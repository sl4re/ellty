export default function openNav(){const e=document.querySelector(".page-header__burger-btn"),t=document.querySelector(".page-nav__list");e.addEventListener("click",(function(){e.classList.toggle("page-header__burger-btn--opened"),t.classList.toggle("page-nav__list--opened")}));const n=document.querySelector(".user-nav__login"),o=document.querySelector(".modal-login"),c=document.querySelector(".login--close");n.addEventListener("click",(function(){o.classList.toggle("modal--opened")})),c.addEventListener("click",(function(){o.classList.toggle("modal--opened")}));const l=document.querySelector(".user-nav__signUp"),s=document.querySelector(".modal-signup"),d=document.querySelector(".signup--close");l.addEventListener("click",(function(){s.classList.toggle("modal--opened")})),d.addEventListener("click",(function(){s.classList.toggle("modal--opened")}))}