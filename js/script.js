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



// Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, 
// а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив

// function firsttask() {
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//         result.push(arr[i]);
//     }
// console.log(result);
//     return result;
// }
// firsttask();

// Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

// function secondtask() {
//     const data = [5, 10, 'shopping', 20, 'homework'];

//     for (let i = 0; i < data.length; i++) {
//         if (typeof(data[i]) === 'number') {
//             data[i] *= 2;
//         } else if (typeof(data[i]) === 'string') {
//             data[i] += ' - done';
//         }
//     }
// console.log(data);
//     return data;
// }
// secondtask();



// Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

// function thirdTask() {
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     for (let i = 1; i <= data.length; i++) {
//         result[i - 1] = data[data.length - i]
//     }

//     console.log(result); // Выведет ['Homework', 'Shopping', 20, 10, 5]
//     return result;
// }

// thirdTask()




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






// Данный код отображает пирамиду, состоящую из звездочек. 

// 1. Создается константа lines, которая указывает количество строк в пирамиде.
// 2. Создается переменная result, которая будет хранить итоговый результат.
// 3. Выполняется внешний цикл for, который итерирует от 0 до lines (включительно).
// 4. Внутри внешнего цикла выполняется первый внутренний цикл for, который добавляет пробелы перед звездочками. 
//    Число пробелов на каждой строке уменьшается по мере перемещения вниз пирамиды (зависит от значения i).
// 5. Затем выполняется второй внутренний цикл for, который добавляет звездочки в результирующую строку. 
//    Число звездочек на каждой строке увеличивается на 2 по мере перемещения вниз пирамиды (зависит от значения i).
// 6. После завершения второго внутреннего цикла, добавляется символ новой строки ("\n") к результирующей строке,
//    чтобы перейти на следующую строку пирамиды.
// 7. Повторяются шаги 4-6 для всех строк пирамиды.
// 8. В конце программы, результирующая строка выводится в консоль с помощью функции console.log.

//      *
//     ***
//    *****
//   *******
//  *********
// ***********

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)



/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// Код возьмите из предыдущего домашнего задания

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман");
// } else {
//     console.log("Произошла ошибка");
// }

// console.log(personalMovieDB);


                                               //Функции declaration
// function calc(a, b) {
//     return (a + b);
// }
// console.log(calc(4, 3));
// console.log(calc(45, 23));
// console.log(calc(14, 13));


// function ret() {
//     let num = 50;
    //
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);


// const usdCurr = 28;
// const eurCurr = 32;

// function convert(amount, curr) {
//     console.log(curr * amount);
// }

// convert(500, usdCurr);
// convert(500, eurCurr);


// function test() {
//    for (let i = 0; i < 5; i++) {
// console.log(i);
// if (i === 3) return
// }
// console.log('Done');
// }

// test();



// В данном коде мы создаем две функции: convert и promotion.

// Функция convert принимает два аргумента: amount и curr. Она умножает amount на curr и возвращает результат.

// Функция promotion принимает один аргумент - результат, полученный функцией convert. Она выводит в консоль результат умножения этого результата на discount.

// Затем мы вызываем функцию convert с аргументами 500 и usdCurr. Результат, полученный этой функцией, передается в функцию promotion.

// Таким образом, функция promotion выводит в консоль результат умножения полученного ранее результата на discount.

// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
//     return curr * amount;
// }

// function promotion(result) {
//     console.log(result * discount);
// }

// const res = convert(500, usdCurr);
// promotion(res);


// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
//     return curr * amount;
// }

// function promotion(result) {
//     console.log(result * discount);
// }

// const res = convert(500, usdCurr);
// promotion(res);



// Место для первой задачи
// function sayHello(name) {
//     return`Привет, ${name}!`
// }

// console.log(sayHello('Alex'));



// function returnNeighboringNumbers(num) {
//     return [num - 1, num, num + 1];
// }

// console.log(returnNeighboringNumbers(5));



// function getMathResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }

//     let str = '';

//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`;
            // Тут без черточек в конце
//         } else {
//             str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
//         }
//     }

//     return str;
// }

// console.log(getMathResult(10, 5));



// function print(){
//     console.log("Доброе утро");
//     print = function(){
//         console.log("Добрый день");
//     }
// }
// присвоение ссылки на функцию до переопределения
// print(); // Доброе утро
// print(); // Добрый день
// const printMessage = print;
// printMessage(); // Добрый день
// printMessage(); // Добрый день




/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// start();


// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//               b = prompt('На сколько оцените его?', '');
    
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("Вы классический зритель");
//     } else if (personalMovieDB.count >= 30) {
//         console.log("Вы киноман");
//     } else {
//         console.log("Произошла ошибка");
//     }
// }

// detectPersonalLevel();

// function showMyDB (hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// }

// writeYourGenres();






// function calculateVolumeAndArea(length) {
//     if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
//         return "При вычислении произошла ошибка";
//     }

//     let volume = 0,
//         area = 0;

//     volume = length * length * length;
//     // length ** 3 - это тоже самое, что и выше или варианты через цикл.
//     // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
//     area = 6 * (length * length);

//     return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// }

// console.log(calculateVolumeAndArea(5));

// function getCoupeNumber(seatNumber) {
//     if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
//         return "Ошибка. Проверьте правильность введенного номера места";
//     }

//     if (seatNumber === 0 || seatNumber > 36) {
//         return "Таких мест в вагоне не существует";
//     }

//     return Math.ceil(seatNumber / 4);
//     // тут очень много вариантов решения, но выбрал один из элегантных :)
// }

// console.log(getCoupeNumber(30));




// function getTimeFromMinutes(minutesTotal) {
//     if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
//         return "Ошибка, проверьте данные";
//     }

//     const hours = Math.floor(minutesTotal / 60);
//     const minutes = minutesTotal % 60;

//     let hoursStr = '';

//     switch (hours) {
//         case 0: 
//             hoursStr = 'часов';
//             break;
//         case 1:
//             hoursStr = 'час';
//             break;
//         case 2:
//         case 3:
//         case 4:
//             hoursStr = 'часа';
//             break;
//         default:
//             hoursStr = 'часов';
//     }

//     return `Это ${hours} ${hoursStr} и ${minutes} минут`;
// }

// console.log(getTimeFromMinutes(140));

// function findMaxNumber(a, b ,c, d) {
//     // Самое простое - это использовать Math.max :)
//     // А оптимизировать такую проверку мы научимся совсем скоро
//     if (typeof(a) !== 'number' ||
//         typeof(b) !== 'number' ||
//         typeof(c) !== 'number' ||
//         typeof(d) !== 'number') {
//         return 0;
//     } else {
//         return Math.max(a, b ,c, d);
//     }
// }

// console.log(findMaxNumber(1, 5, 6.6, 10.5));
// console.log(findMaxNumber(1, 5, '6', '10'));


// function fib(n) { /* ваш код */ }

// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757


// function fib(n) {
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
//   }
  
//   alert( fib(3) ); // 2
//   alert( fib(7) ); // 13
//   // fib(77); // вычисляется очень долго


// function fib(num) {
//     if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//         return "";
//     }

//     let result = '';
//     let first = 0;
//     let second = 1;

//     for (let i = 0; i < num; i++) {
//         if (i + 1 === num) {
//             result += `${first}`;
//             // Без пробела в конце
//         } else {
//             result += `${first} `;
//         }

//         let third = first + second;
//         first = second;
//         second = third;
//     }

//     return result;
// }

// console.log(fib(10));



//                               Callback- функции

// function learnJS(lend, callback) {
//     console.log(`Я учу: ${lend}`);
//     callback();
// }

// function done() {
//     console.log('Я прошел этот урок!');
// }

// learnJS('JavaScript', done);









                                         //Фуннкции expression


// const logger = function() {
//     console.log("hello");

// };

// logger();

                                         //Фуннкции Стрелочные

// const calc = (a, b) => a + b;


// 

function learnJS(lend, callback) {
    console.log(`Я учу: ${lend}`);
    callback();
console.log(callback);
}
function done() {
    console.log('Я прошел этот урок!');
}

learnJS('JavaScript', done);

