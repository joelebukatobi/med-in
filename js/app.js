let menuButton = document.querySelector(".navbar__mobile__menu");
let navItems = document.querySelector(".navbar__nav");
let header = document.querySelector(".navbar");
let barHide = document.querySelector(".navbar__mobile__menu__bar:nth-child(1)");
let barLeft = document.querySelector(".navbar__mobile__menu__bar:nth-child(2)");
let barRight = document.querySelector(
  ".navbar__mobile__menu__bar:nth-child(3)"
);

menuButton.onclick = openMenu;

function openMenu() {
  navItems.classList.toggle("navbar__nav__toggle");
  barHide.classList.toggle("navbar__mobile__menu__bar__hide");
  barLeft.classList.toggle("navbar__mobile__menu__bar__cross");
  barRight.classList.toggle("navbar__mobile__menu__bar__across");

  let nav = document.querySelector(".navbar__nav__toggle");

  if (nav) {
    header.style.height = "100vh";
    header.style.overflow = "hidden";
  } else {
    header.style.height = "auto";
  }
}
