export default function (formSelector, inputSelector) {
  const form = document.querySelector(formSelector);
  const input = document.querySelectorAll(inputSelector);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  
    let numOfInputs = 0;
    input.forEach(item => {
      if (item.value.length > 0) {
        numOfInputs++;
        console.log(numOfInputs);
        if (numOfInputs == input.length) {
          form.lastElementChild.classList.remove('active-warn');
          form.lastElementChild.classList.add('active-form');
          form.lastElementChild.innerHTML = 'Подписка!';
        
          setTimeout(() => {
            //очищаем форму
            form.reset();
          }, 1500);
        }
      }
    });
    //если не заполнены ВСЕ поля
    input.forEach(item => {
      if (item.value.length == 0) {
        form.lastElementChild.innerHTML = 'ваш email?';
        form.lastElementChild.classList.add('active-warn');
      }
    });
    //при вводе в поле после отправки  - очищаем кнопку  отправки
    form.addEventListener('input', (e) => {
      e.preventDefault();
      form.lastElementChild.classList.remove('active-form');
      form.lastElementChild.classList.remove('active-warn');
      form.lastElementChild.innerHTML = 'подписаться';
    });
  });
}