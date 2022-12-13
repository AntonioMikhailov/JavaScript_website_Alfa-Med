export default function (accordTriggerTitle, iconArrow, activeAccordTitle) {

  const accordTitle = document.querySelectorAll(accordTriggerTitle);
  accordTitle.forEach(item => {
    //Показываем первый аккорд
    accordTitle[0].classList.add('showAccordText');
    accordTitle[0].nextElementSibling.style.maxHeight = accordTitle[0].nextElementSibling.scrollHeight + 'px';
    accordTitle[0].firstElementChild.classList.add(iconArrow);
    accordTitle[0].classList.add(activeAccordTitle);
    item.addEventListener('click', function () {
      //закрываем все сначала - 
      accordTitle.forEach(item => {
        if (item.hasAttribute('data-homeAccord')) {
          item.classList.remove('showAccordText');
          item.nextElementSibling.style.maxHeight = 0 + 'px';
          item.firstElementChild.classList.remove(iconArrow);
          item.classList.remove(activeAccordTitle);
        }
      });
      this.classList.toggle('showAccordText');
      this.firstElementChild.classList.toggle(iconArrow);
      this.classList.toggle(activeAccordTitle);
      if (this.classList.contains('showAccordText')) {
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 'px';
      } else {
        this.nextElementSibling.style.maxHeight = '0px';
      }
    });
  });
} //