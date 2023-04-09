// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// console.table(clients);

//!------------------------------------------

//*---Посчитать общую сумму покупок в корзине (РЕПЕТА)---------*/

// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;

// АЛГОРИТМ
// 1 - нужно перебрать массив, т.е. на каждой итерации цикла мы сможем получить доступ к каждому элементу массива
// 2 - сделать переменную total ДО цикла, а не внутри, ИНАЧЕ за пределами цикла она будет не видна
// 3 - каждый элемент приплюсовать к total

// TODO  применяем FOR
// for (let i = 0; i < cart.length; i += 1) {
//     console.log(cart[i]);

//     total += cart[i];
// }

// console.log('Total:', total);

// TODO  применяем FOR...OF
// В данном случае нам не нужен доступ к счётчику и не нужно перезаписать (изменять) элемент массива cart[i],
// поэтому вместо FOR мы можем применить FOR...OF чтоб уменьшить синтаксис кода

// for (const value of cart) {
//     total += value;
// }

// console.log("Total:", total);

// Добавляем tax 20%, т.е. внутри каждого элемента массива переопределяем его значение

// for (let i = 0; i < cart.length; i += 1) {
//     cart[i] = Math.round(cart[i] * 1.2);
// }
// console.log(cart);

//!------------------------------------------

//*---Посчитать сумму всех чётных чисел в массиве (РЕПЕТА)---------*/

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;

// переменная total
// перебрать массив

// for (let i = 0; i < numbers.length; i += 1) {
//   const number = numbers[i]; // локальная переменная для более приятного прочтения, но изменения в массиве можно делать только через numbers[i]
//   console.log(number);

//   // на каждой итерации проверить элемент на чётность
//   if (number % 2 === 0) {
//     console.log("Чётное!");

//     // если чётный плюсуем к total
//     total += number;
//   }
// }

/// ? в этой задаче также не нужен доступ к i, не нужен счётчик, поэтому используем FOR...OF

// for (const number of numbers) {
//   console.log(number);

//   if (number % 2 === 0) {
//     console.log("Чётное!");

//     // если чётный плюсуем к total
//     total += number;
//   }
// }

// console.log("Total:", total);

//!------ МОДУЛЬ 2 (УРОК 1) ----------------------------

// const genres = ["Jazz", "Blues"];

// genres.push("Rock'n'roll");

// console.table(genres);

// // console.table(genres[0]); // возвращает элемент массива по его индексу

// // console.log(genres.length); // длина массива
// // console.log(genres[genres.length - 1]); // возвращает последний элемент массива

// // console.table(genres.shift());
// // console.log(genres.splice(0, 1)[0]); // 2 способа, чтоб удалить 1-й элемент массива

// // genres.unshift("Country", "Reggae");
// genres.splice(0, 0, "Country", "Reggae"); // 2 способа, чтоб добавить элементы в начале массива

//!------------------------------------------

//*---Напиши скрипт поиска логина (РЕПЕТА)---------*/

// const logins = ["m4ngoDoge", "kiwidab3st", "poly1scute", "aj4xth3m4n"];
// const loginToFind = "poly1scute";
// let message = "Пользователь ${loginToFind} не найден."; // TODO изначально мы говорим, что пользователь не найден,...

// Перебираем через FOR и сравниваем

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];

//   console.log("Login: ", login);
//   console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//   if (login === loginToFind) {
//     message = `Пользователь ${loginToFind} найден.`; // TODO ...но если мы его нашли, то пишем, что найден и прерываем цикл
//     break;
//   } // здесь else не нужен - он лишний
// }

//* также можно записать через FOR...OF

// for (const login of logins) {
//   console.log("Login: ", login);
//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);

// if (login === loginToFind) {
//     message = `Пользователь ${loginToFind} найден.`;
//     break;
//   }
// }
// console.log(message);

//* самый лучший способ через INCLUDES - это абстракция, когда 'под капотом' скрывается весь метод реализации

// const message = logins.includes(loginToFind)
//   ? `Пользователь ${loginToFind} найден.`
//   : `Пользователь ${loginToFind} не найден.`;

// console.log(message);

//!------------------------------------------

//*---Напиши скрипт обчисления площади прямоугольника-----*/

// const values = "8 11";
// const valuesArray = values.split(" "); // делаем из строки новый массив
// const a = Number(valuesArray[0]); // создаём новую переменную для стороны А, вызываем её из массива и переводим в число
// const b = Number(valuesArray[1]); // создаём новую переменную для стороны Б, вызываем её из массива и переводим в число
// const square = a * b;

// console.log(square);

//!------------------------------------------

//*---Напиши скрипт для перебора массива-----*/

// const fruits = ["🍏", "🍇", "🍑", "🍌", "🍒"];

// перебираем массив через for и выводим элементы в формате под порядковым номером начиная с 1

// for (let i = 0; i < fruits.length; i += 1) {
//     console.log(`${i + 1}: ${fruits[i]}`);
// }

// for (const fruit of fruits) { // for...of перебирает только значения элементов массива, для решения данной задачи не подходит
//     console.log(fruit);
// }

//* испоьзуем цикл for...in - это будет второй вариант решения задачи

// for (const i in fruits) {  // for...in перебирает только индексы
//   console.log(`${Number(i) + 1}: ${fruits[i]}`); // т.к. i сохраняется как строка, то нужно привести к числу через Number
// }

//* FOR...OF и FOR...IN перебирают весь массив с шагом 1 (т.е. они не пластичные), если шаг > 1 - применяем только FOR

//!------------------------------------------

//*------Поиск самого маленького числа в массиве (РЕПЕТА)--------*/

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   console.log(number);

//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }

// console.log(smallestNumber);

//!------------------------------------------

//*------Написати скрипт, який виводить у консоль усі слова рядка крім першого і останнього--------*/

// const string = "Welcome to the future boy";

// 1. Переводимо рядок у масив з роздиленням " ";
// 2. Видалити перший елемент масиву і останній
// 3. Перевести масив  назад до строки

// const strArray = string.split(" ");
// strArray.shift();
// strArray.pop();

// const newString = strArray.join(" ");

// console.log("🚀 ~ newString:", newString);

//!------------------------------------------

//* задача из Питання-відповіді (04.04.23)

//* Напишите код, который создаёт массив элементов представляющих собой сумму соответствующих элементов заданных массивов.

// 1. Сначала определяем, какой из 2-х массивов найдовший
// 2. Далее необходимо запустить цикл на найдовшому массиве и по индексу сложить одинаковые элементы 2-х массивов
// 3. Делаем дополнительную проверку существует ли вообще элемент по данному индексу, если его нет - то мы его суммировать не будем,
// а будем добавлять только текущий элемент

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 6, 9, 1];

function collapseArrays(arr1, arr2) {
  const biggestArray = arr1.length > arr2.length ? [...arr1] : [...arr2];
  const smallestArray = arr1.length > arr2.length ? [...arr2] : [...arr1];

  return biggestArray.map((el, i) =>
    smallestArray[i] !== undefined ? el + smallestArray[i] : el
  );
}
console.log(collapseArrays(arr1, arr2)); // [5,7,9,4,5]
