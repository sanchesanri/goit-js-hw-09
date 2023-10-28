/**
 * HTML містить кнопки «Start» і «Stop».

<button type="button" data-start>Start</button>
<button type="button" data-stop>Stop</button>

Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює колір фону <body> на випадкове значення, використовуючи інлайн стиль. Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.

УВАГА
Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів. Зроби так, щоб доки зміна теми запущена, кнопка «Start» була неактивною (disabled).

Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
 */

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

const DELAY  = 1000;
let intervalId = null;

btnStart.addEventListener('click', onBtnStartClick)
btnStop.addEventListener('click', onBtnStopClick)

function onBtnStartClick () {
    if (intervalId) {
        return
    }
    intervalId = setIntervalFn(DELAY)
    btnStart.disabled = true
    btnStop.disabled = false;
};

function onBtnStopClick () {
    clearInterval(intervalId)
    intervalId = null;
    btnStop.disabled = true
    btnStart.disabled = false;
    
} 

function setIntervalFn (delay) {
    return id = setInterval(()=>{
        document.body.style.backgroundColor = getRandomHexColor()
    },delay)
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }