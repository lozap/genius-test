const mobileMenu = document.querySelector(".mobile-menu");
const menuBtnOpen = document.querySelector(".menu-btn-open");
const menuBtnClose = document.querySelector(".menu-btn-close");
const menuLink1 = document.querySelector(".mobile-menu__link1");
const menuLink2 = document.querySelector(".mobile-menu__link2");
const menuLink3 = document.querySelector(".mobile-menu__link3");
const menuLink4 = document.querySelector(".mobile-menu__link4");

const toggleMenu = () => mobileMenu.classList.toggle("is-open");

const disableScroll = () =>
  document.body.classList.toggle("is-scroll-disabled");

menuBtnOpen.addEventListener("click", toggleMenu);
menuBtnClose.addEventListener("click", toggleMenu);
menuLink1.addEventListener("click", toggleMenu);
menuLink2.addEventListener("click", toggleMenu);
menuLink3.addEventListener("click", toggleMenu);
menuLink4.addEventListener("click", toggleMenu);

menuBtnOpen.addEventListener("click", disableScroll);
menuBtnClose.addEventListener("click", disableScroll);
menuLink1.addEventListener("click", disableScroll);
menuLink2.addEventListener("click", disableScroll);
menuLink3.addEventListener("click", disableScroll);
menuLink4.addEventListener("click", disableScroll);
