function timer() {

     // Timer

  const deadline = "2021-06-15";

  function getTimerRemaining(endTime) {
    const t = Date.parse(endTime) - Date.parse(new Date());
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const hourse = Math.floor((t / (1000 * 60 * 60)) % 24);
    const minutese = Math.floor((t / 1000 / 60) % 60);
    const secondse = Math.floor((t / 1000) % 60);

    return {
      total: t,
      days: days,
      hourse: hourse,
      minutese: minutese,
      secondse: secondse,
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endTime) {
    const timer = document.querySelector(selector);
    const days = timer.querySelector("#days");
    const hours = timer.querySelector("#hours");
    const minutes = timer.querySelector("#minutes");
    const seconds = timer.querySelector("#seconds");
    const timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimerRemaining(endTime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hourse);
      minutes.innerHTML = getZero(t.minutese);
      seconds.innerHTML = getZero(t.secondse);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock(".timer", deadline);

}

export default timer;