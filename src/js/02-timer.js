import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

import { addLeadingZero } from './helpers';
import { convertMs } from './helpers';
import { calcDifferenceTime } from './helpers';

const btnStartRef = document.querySelector('button[data-start]');
const inputRef = document.querySelector('#datetime-picker');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');

btnStartRef.disabled = true;

btnStartRef.addEventListener('click', onBtnStartClick);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);

    const futureTimeUnix = selectedDates[0].getTime();

    if (futureTimeUnix < Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    }

    btnStartRef.disabled = false;
  },
};

flatpickr('#datetime-picker', options);

function onBtnStartClick() {
  const id = setInterval(() => {
    const resultTime = calcDifferenceTime(inputRef.value);
    const objTime = convertMs(resultTime);
    addTimeToSpan(objTime);

    if (resultTime <= 1000) {
      clearInterval(id);
      btnStartRef.disabled = true;
    }
  }, 1000);
}

// function calcDifferenceTime(value) {
//   const dateSelected = new Date(value).getTime();
//   const currentTime = Date.now();

//   return dateSelected - currentTime;
// }

function addTimeToSpan(obj) {
  const { days, hours, minutes, seconds } = obj;
  // if (days > 99) {
  //     days = 99
  // }
  daysRef.textContent = addLeadingZero(days);
  hoursRef.textContent = addLeadingZero(hours);
  minutesRef.textContent = addLeadingZero(minutes);
  secondsRef.textContent = addLeadingZero(seconds);
}

// function addLeadingZero(value) {
//   return value.toString().padStart(2, 0);
// }

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }
