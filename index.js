let hour = 0;
let minute = 0;
let second = 0;
let milisecond = 0;
let timer = false;

const stopwatch = () => {
  if (timer) {
    milisecond += 1;
    if (milisecond > 99) {
      second += 1;
      milisecond = 0;
    }

    if (second > 59) {
      minute += 1;
      second = 0;
    }

    if (minute > 59) {
      hour += 1;
      minute = 0;
    }

    let milisec = milisecond;
    let sec = second;
    let min = minute;
    let hr = hour;

    if (milisecond < 10) {
      milisec = `0${milisecond}`;
    }

    if (second < 10) {
      sec = `0${second}`;
    }

    if (minute < 10) {
      min = `0${minute}`;
    }

    if (hour < 10) {
      hr = `0${hour}`;
    }

    document.querySelector(".miliseconds p").textContent = milisec;
    document.querySelector(".seconds p").textContent = sec;
    document.querySelector(".minutes p").textContent = min;
    document.querySelector(".hours p").textContent = hr;

    setTimeout("stopwatch()", 10);
  }
};

const start = () => {
  timer = true;
  stopwatch();
  document.querySelector(".start").style.display='none'
  document.querySelector(".stop").style.display='initial'
};

const stop = () => {
  timer = false;
  document.querySelector(".stop").style.display='none'
  document.querySelector(".start").style.display='initial'
};

const reset = () => {
  milisecond = 0;
  second = 0;
  minute = 0;
  hour = 0;

  document.querySelector(".miliseconds p").textContent = "00";
  document.querySelector(".seconds p").textContent = "00";
  document.querySelector(".minutes p").textContent = "00";
  document.querySelector(".hours p").textContent = "00";
};

document.querySelector(".start button").addEventListener("click", start);
document.querySelector(".stop button").addEventListener("click", stop);
document.querySelector(".reset button").addEventListener("click", reset);
