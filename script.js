/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания

// start();

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {

        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    rememberMyFilms: function() {
        for (let i = 1; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');   
                i--;
            }
        }
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },

    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat === false) {
            console.log(true);
        } else { 
            console.log(false)
        }
    },

    showMyDB(hidden) {
        if(!hidden) {
            console.log(personalMovieDB);
        }
    },

    writeYourGenres: function() {

        for(let i = 1; i < 2; i++) {

            // const genre = prompt(`Ваш любимый жанр под номером ${i}`);

            // if(genre === '' || genre === null) {
            //     console.log('Вы ввыле некорректно данные или не ввыле их вовсе');
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = genre;
            // }

            const genres = prompt(`Ввидите ваш любмый жанр через запятой`);

            if(genres === '' || genres === null) {
                console.log('Вы ввыле некорректно данные или не ввыле их вовсе');
                i--;
            } else { 
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();  
            }

            personalMovieDB.genres.forEach((item, i) => {
                console.log(`Любимый жанр ${i + 1} - это ${item}`);
            })
            
        }
    }

};



/* ООП */

const solider = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
}

const john = Object.create(solider);

john.sayHello();

const a = [1, 2, 3];
const b = [1, 2, 3];

console.log(a == b);

console.log('ёжие' < 'яблоко');

for(let node of document.body.childNodes) {
    if(node.nodeName == '#text') {
        continue;
    }

    console.log(node);
}

// Конструкторь this

function showThis(a, b) {
    console.log(this);

    function sum() {
        console.log(this);
        return a + b
    }

    console.log(sum());
}

showThis(5 , 5);


// filter

const names = ['Ivan', 'Ann', 'Kaseniya', 'vakensiya'];

const shortName = names.filter(function(name) {
    return name.length < 5;
})

console.log(shortName);

// map 

const answers = ['AnAn', 'AliaK', 'baDina'];

const result = answers.map(item => item.toLowerCase());

console.log(result);

// every/some

const some = [5, 'Anf', 'fsdnf'];
console.log(some.some(item => typeof(item) === 'number'));


// reduce 

const arr = [4, 5, 6, 7, 8, 9, 10];

            // 0  +  4
            // 4  +  5
            // 9  +  6
            // 15 +  7 ...

const res = arr.reduce((sum, current) => sum + current);

console.log(res);

// 2)

const arr2 = ['apple', 'orange', 'pear'];

const res2 = arr2.reduce((sum, current) => `${sum}, ${current}`);

console.log(res2);

const obj = {
    ivan: 'person',
    ann: 'person',
    dog: 'animal',
    cat: 'animal'
}

const newArr = Object.entries(obj)
.filter(item => item[1] === 'person')
.map(item => item[0]);

console.log(newArr);