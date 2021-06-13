"use strict";

// alert('Hello');

// const result = confirm ("Are you here?");
// console.log(result);

// const answer = prompt("Вам есть 18?", "18");

// console.log(typeof(answer));


// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваша Фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// console.log(typeof(answers));


// const category = "toys";

// console.log(`https://someurl.com/${category}/4`);

// const name = "Oleh";
// const surname = "Chernenko"
// alert(`Привет, ${name}, ${surname}`);
/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

// JAVASCRIPT V0.01

// const numberOfFilms = prompt('Сколько фильмов вы уже просмотрели?', '');


// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

//       personalMovieDB.movies [a] = b;
//       personalMovieDB.movies [c] = d;




// console.log(personalMovieDB);

// Javascript v.0.02

// if (4 == 4) {
//     console.log('Ok');
// }   else {
//         console.log('Error')
// };

// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log('Super!') : console.log('Error');

// switch (num) {
//     case 49:
//         console.log('Не верно!');
//         break;
//     case 100:
//         console.log('Не верно!');
//         break;
//     case 50: 
//     console.log('В точку!');
//         break;
//     default:
//         console.log('Не в этот раз!');
//         break;        
// }

let num = 50;

// while (num < 60) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num <= 60);

// for (let i = 1; i <= 10; i++) {
//     if (i === 8) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }

for (let i = 0; i <= 20; i++) {

    if (i % 2 == 0) continue; {
      console.log(i);
    }
}

    
    
