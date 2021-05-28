window.addEventListener("DOMContentLoaded", () => {
  // Tabs

  const tabheaderItem = document.querySelectorAll(".tabheader__item");
  const tabcontentElem = document.querySelectorAll(".tabcontent");
  const tabheaderItemParent = document.querySelector(".tabheader__items");

  function hideTabConten() {
    tabcontentElem.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });

    tabheaderItem.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }

  function showTabContent(i = 0) {
    tabcontentElem[i].classList.remove("hide");
    tabcontentElem[i].classList.add("show", "fade");
    tabheaderItem[i].classList.add("tabheader__item_active");
  }

  hideTabConten();
  showTabContent();

  tabheaderItemParent.addEventListener("click", (event) => {
    const target = event.target;

    if (target && target.classList.contains("tabheader__item")) {
      tabheaderItem.forEach((item, i) => {
        if (target == item) {
          hideTabConten();
          showTabContent(i);
        }
      });
    }
  });

  // Timer

  //   const deadline = new Date(Date.parse(new Date()) + 300 * 1000); --  для определенное время П: 5 мин

  const deadline = "2021-05-08";

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const hourse = Math.floor((t / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const seconds = Math.floor((t / 1000) % 60);

    return {
      total: t,
      dasy: days,
      hourse: hourse,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector);
    const days = document.querySelector("#days");
    const hourse = document.querySelector("#hours");
    const minutes = document.querySelector("#minutes");
    const seconds = document.querySelector("#seconds");
    const timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.innerHTML = getZero(t.dasy);
      hourse.innerHTML = getZero(t.hourse);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock(".timer", deadline);

  // Modal window

  const btnModalOpen = document.querySelectorAll(".btn_modal");
  const modalBlock = document.querySelector(".modal");
  const modalClose = document.querySelector(".modal__close");

  function openModal() {
    modalBlock.classList.add("show");
    modalBlock.classList.remove("hide");
    document.body.style.overflow = "hidden";
    clearInterval(modalTimerId);
  }

  function closeModal() {
    modalBlock.classList.add("hide");
    modalBlock.classList.remove("show");
    document.body.style.overflow = "";
  }

  btnModalOpen.forEach((item) => {
    item.addEventListener("click",openModal);

    modalClose.addEventListener("click", closeModal);
  });

  modalBlock.addEventListener("click", (e) => {
    if (e.target === modalBlock) {
      closeModal();
    }
  });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modalBlock.classList.contains('show')) {
            closeModal();
        }
    })

    const modalTimerId = setTimeout(openModal, 5000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll',showModalByScroll);

});
