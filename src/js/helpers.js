function setIntervalFn(delay, getColorFn) {
  return (intervalId = setInterval(() => {
    document.body.style.backgroundColor = getColorFn();
  }, delay));
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function addLeadingZero(value) {
  return value.toString().padStart(2, 0);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function calcDifferenceTime(value) {
  const dateSelected = new Date(value).getTime();
  const currentTime = Date.now();

  return dateSelected - currentTime;
}

export {
  setIntervalFn,
  getRandomHexColor,
  addLeadingZero,
  convertMs,
  calcDifferenceTime,
};
