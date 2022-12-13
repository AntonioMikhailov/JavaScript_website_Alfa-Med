import mobileMenu from "./modules/mobile_menu.js";
import { addOffsetMargin, removeOffsetMargin} from "./modules/marginOffset.js";
import homeAccordion from "./modules/home_accord.js";
import homeCarousel from "./modules/home_carousel.js";
import homeCounter from "./modules/home_counter.js";
import form from "./modules/form.js";
import formSubmit from "./modules/form_submit.js";
import navScroll from "./modules/navScroll.js";

window.addEventListener('DOMContentLoaded', () => {
  // модули
  mobileMenu();
  addOffsetMargin();
  removeOffsetMargin();
  homeAccordion('.h-th-accord__titleRow', 'active-accordeon');
  //depart-single
  homeAccordion('.ds3__titleRow', 'ds3-iconActive', 'ds3__titleActive');
  homeCarousel();
  homeCounter('.counter-row', '.counter-digit__1', '.counter-digit__2', '.counter-digit__3', '.counter-digit__4');
  form('[data-contacts]', '.h9__input', '.h9__textarea');
  formSubmit('[data-submit]', '.h10-top__input');
  navScroll('.anchor-wrapper'); //якорь передаем 
});