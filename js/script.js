"use strict";

// console.log(1);
// let number = 5;
// const leftBorderWidth = 1;
// console.log(number);
// number = 10;
// console.log(number);

//const obj = {
//    a: 50
//};
//obj.a = 10;
//console.log(obj);
//console.log(name);
//var name = 'Alex';
//{
//    var result = 50;
//}
//console.log(result);
//const arr = [1, 2, 3];
//console.log(arr[0]);

// const obj1 = {
//     'Anna' : 500,
//     'alisa' : 800
// };

// const arr =['a', 'b', 'c'];
// const arrObj = {
//     0: 'a',
//     1: 'b',
//     2: 'c'
// };
// //console.log(arr[1]);
// console.log(arrObj[1]);

// const b = 'b';
// //arrObj.b = '1234';
// arrObj[b] = '1234';

// console.log(arrObj['b']);
// console.log(arrObj.b);
// //console.log(arr[1]);

// const arr1 = ['a', 'b', 'c'];
// arr1[3] = '3456';
// arr1[3] = '000';

// console.log(arr1);

// const storeName = 'Ozon';
// const storeDescription = {
//     budget: 10000,
//     employees: ['Sasha', 'Arina', 'Alla'],
//     products: {
//         'конфеты': 100,
//         'Шоколад': 200
//     },
//     open: true
// }

//alert('Hello');

//const result = confirm("Are you here?");
//console.log(result);

// const answer = + prompt("Вам есть 18?", "18");
// console.log(answer + 5);
// console.log(typeof(answer));

// const answers = [];
// answers[0] = prompt('как ваше имя', '');
// answers[1] = prompt('Как ваша фамилия', '');
// answers[2] = prompt('Сколько вам лет', '');

// document.write(answers);

// const  category = 'toys';
// console.log(`https://someurl.com/${category}/5`)

// const user = "Alex";
// alert(`Привет, ${user}`);



// let incr = 10,
//     decr = 10;

// ++incr
// --decr

// console.log(incr);
// console.log(decr);

// console.log(4*2 == 8);
// console.log(4*2 == '8');
// console.log(4*2 === '8');
// console.log(5%2);



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

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов', ''),
//       d = prompt('На сколько оцените его?', '');

//       personalMovieDB.movies[a] = b;
//       personalMovieDB.movies[c] = d;
//       console.log(personalMovieDB);


// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }


//  Условия

// if (4 == 4) {
//     console.log('Ok');
// } else {
//     console.log('Error');
// }


// if (4 == 4) {
//     console.log('Ok');
// } else {
//     console.log('Error');
// }


// if (4 == 6) {
//     console.log('Ok');
// } else {
//     console.log('Error');
// }


//  const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok');
// }


                        //  Тернарный оператор

// (num === 50) ? console.log('Ok') : console.log('Error');

                        // Свитч
// const num = 50;                        

// switch (num) {
//     case 49:
//         console.log('Не верно');
//         break;
//     case 100:
//         console.log('Не верно');            
//         break;
//      case 50:
//         console.log('В точку!');
//         break;
//      default:
//         console.log('Не в этот раз');
//         break;
// }




                         // Логические операторы && , || ,


// const a = 3

// console.log((!1));            //2
// console.log( !1 && 3 );
// console.log( !1 && 3 );  //3
// console.log( 1 && !3 );        //4
// console.log( !1 && 2 || 3 );
// console.log( NaN && 2 && undefined );

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

                                                            //   циклы

//  let num =50;
// while (num <= 55) {
//     console.log(num);
//     num++
// }


// let num1 =50;

// do {
//     console.log(num1);
//     num1++;
// }
// while (num1 < 55);

// let num3 = 50
// for (let i = 1; i < 8; i++) {
// console.log(num3);
// num3++;
// }


// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }



// *
// **
// ***
// ****
// *****
// ******

// let result = '';
// const lenght = 7;

// for (let i = 1; i < lenght; i++) {

//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }

//     result += '\n';
// }

// console.log(result);



// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k == 2) break first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }

// let i, j;

// loop1: for (i = 0; i < 3; i++) {
  //Первый цикл, обозначенный меткой "loop1"
//   loop2: for (j = 0; j < 3; j++) {
    //Второй цикл, обозначенный меткой "loop2"
//     if (i === 1 && j === 1) {
//       continue loop1;
//     }
//     console.log("i = " + i + ", j = " + j);
//   }
// }

// function firstTask() {
    // Пишем решение вот тут
//     for(let i = 5; i <= 10; i++) {
//   console.log(i);
// }
    
// }

// function secondTask() {
    // Пишем решение вот тут
//      for (let i = 20; i >= 10; i--) {
//         if (i == 13) break;
//         console.log(i);
//     }
// }

// secondTask();



// function fourthTask() {
    
//     let i = 2;
//     while (i <= 16) {
//         if (i % 2 === 0) {
//             i++;
//             continue;
//         } else {
//             console.log(i);
//         }
//         i++;
//     }
// }

// fourthTask();



// function fifthTask() {
//     const arrayOfNumbers = [];

    // Пишем решение вот тут
//     for (var i = 5; i <= 10; i++) {
//         arrayOfNumbers.push(i);
//     }
//     console.log(arrayOfNumbers);
    // Не трогаем
//     return arrayOfNumbers;
// }
// fifthTask();




