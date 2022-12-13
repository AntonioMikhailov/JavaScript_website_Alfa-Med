
import {
  addOffsetMargin, removeOffsetMargin} from "./marginOffset.js";
export default function () {
  // Бургер кнопка
  const burgerButton = document.querySelector('.burger-btn');
  const mobileCloseBtn = document.querySelector('.mobile-close-button');
  const mobileOverlay = document.querySelector('.mobile-overlay');
  const mobileWrapper = document.querySelector('.mobile-wrapper');
  const mobileItem = document.querySelectorAll('.mobile-item ');

  function toggleMobileMenu() {
    mobileOverlay.classList.toggle('active');
    mobileWrapper.classList.toggle('active');
  }
  burgerButton.addEventListener('click', () => {
    toggleMobileMenu();
    addOffsetMargin(); 
  });
  //закрываем по кнопке, по фону 
  [mobileCloseBtn, mobileOverlay, ].forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target == mobileOverlay || item == mobileCloseBtn ) {
        removeOffsetMargin();  
        toggleMobileMenu();
      }
    });
  });
}