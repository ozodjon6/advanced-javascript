/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
      "Ayiq bagringa bos",
    ],
  };

  const adv = document.querySelectorAll(".promo__adv img");
  const promoGenre = document.querySelector(".promo__genre");
  const promoBg = document.querySelector(".promo__bg");
  const promoInteractiveItem = document.querySelectorAll(
    ".promo__interactive-item"
  );
  const movieList = document.querySelector(".promo__interactive-list");
  const addForm = document.querySelector("form.add"),
    addInput = addForm.querySelector(".adding__input"),
    checkbox = addForm.querySelector('[type="checkbox"]');

  addForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let newFilm = addInput.value;
    const favourite = checkbox.checked;

    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 22)}...`;
      }

      movieDB.movies.push(newFilm);
      sortArr(movieDB.movies);

      createvMovieList(movieDB.movies, movieList);
    }

    if (favourite) {
      console.log("Добавляем любимый фильм");
    }

    event.target.reset();
  });

  const deleteElemnt = (arr) => {
    arr.forEach((item) => {
      item.remove();
    });
  };

  const makeChanges = () => {
    promoGenre.textContent = "драма";

    promoBg.style.backgroundImage = 'url("img/bg.jpg")';
  };

  const sortArr = (arr) => {
    arr.sort();
  };

  function createvMovieList(films, parent) {
    parent.innerHTML = "";
    sortArr(films);

    films.forEach((film, i) => {
      parent.innerHTML += `
          <li class="promo__interactive-item"> ${i + 1} ${film}
              <div class="delete"></div>
          </li>
          `;
    });

    document.querySelectorAll(".delete").forEach((btn, i) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);

        createvMovieList(films, parent);
      });
    });
  }

  deleteElemnt(adv);
  makeChanges();
  createvMovieList(movieDB.movies, movieList);
});