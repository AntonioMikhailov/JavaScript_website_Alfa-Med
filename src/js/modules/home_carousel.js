export default function () {
  const carouselMain = document.querySelector('.carousel-main'),
    sliderRow = document.querySelector('.slider-row '),
    sliderImage = document.querySelectorAll('.slider-image');
  //оборачиваем в try-catch 
  try {
    let sliderRowWidth = getComputedStyle(sliderRow).width;
      let offset = parseInt(sliderRowWidth) / sliderImage.length;
    let percentOffset = offset * 100 / parseInt(sliderRowWidth) + '%';
    let auto = setInterval(autoplay, 5000);

    function autoplay() {
      carouselMain.style.justifyContent = 'flex-start';
      sliderRow.style.transform = `translate(-${percentOffset})`;
    
    }
  
    sliderRow.addEventListener('transitionend', () => {
      sliderRow.append(sliderRow.firstElementChild);
      sliderRow.style.transition = 'none';
      sliderRow.style.transform = 'translate(0)';
      setTimeout(() => {
        sliderRow.style.transition = 'all 2.5s';
      });
    });
    const ind = document.querySelectorAll('.ind');
    let SlideIndex = 1;

    function showSlides(n) {
      if (n > ind.length) {
        SlideIndex = 1;
      }
      ind.forEach(item => {
        item.classList.remove('active');
      });
      ind[SlideIndex - 1].classList.add('active');
    }

    function showIndicator() {
      setInterval(() => {
        showSlides(SlideIndex += 1);
      }, 5000);
    }
    showSlides();
    showIndicator();
  } catch (error) {} // конец try-catch
}