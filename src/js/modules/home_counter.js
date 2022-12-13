export default function (RowCounter, oneCounter, twoCounter, threeCounter, fourCounter) {
  const counterRow = document.querySelector(RowCounter),
    digits_1 = document.querySelector(oneCounter),
    digits_2 = document.querySelector(twoCounter),
    digits_3 = document.querySelector(threeCounter),
    digits_4 = document.querySelector(fourCounter);
  window.addEventListener('scroll', function stop() {
    let time = 2000;
    //try-catch нужен 
    try {
      let counterRowOffset = counterRow.getBoundingClientRect().top;
      if (counterRowOffset < window.innerHeight - 150) {
        let startCounter = (stepNum, maxDigitNum, selectorID) => {
          let counterID;
          let count = 0;
          let step = stepNum;
          let maxDigit = maxDigitNum;
          let t = time / (maxDigit / step);
          counterID = setInterval(() => {
            count = count + step;
            selectorID.innerHTML = count;
            if (count >= maxDigit) {
              clearInterval(counterID);
            }
            window.removeEventListener('scroll', stop);
          }, t);
        };
     
        startCounter(1, 9, digits_1);
        startCounter(40, 2040, digits_2);
        startCounter(2, 94, digits_3);
        startCounter(1, 29, digits_4);
      }
    } catch (error) {}
  });
}