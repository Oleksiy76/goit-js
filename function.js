//*---Напиши функцию, котора принимает массив цен и возвращает их сумму (РЕПЕТА)---------*/

// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;

// for (const value of cart) {
//     total += value;
// }

// console.log("Total:", total);

// const calculateTotalPrice = function (items) {
//   console.log(`Items внутри функции: `, items);

//   let total = 0;

//   for (const item of items) {
//     total += item;
//   }

//   return total;
// };

// const r1 = calculateTotalPrice([1, 2, 3]);

// console.log(`Общая сумма покупок ${r1}`); //6
// console.log(calculateTotalPrice([5, 10, 15, 20])); //50
// console.log(calculateTotalPrice([100, 200, 300])); //600

//!------------------------------------------

// const calculateEngravingPrice = function (message, pricePerWord) {

//     // const array = message.split(" ");

//     const price = message.split(" ").length * pricePerWord;

//     return price;
// }

// const total = calculateEngravingPrice("JavaScript is in my blood", 10);
// console.log(total);

//!------------------------------------------

//*---Напиши функцию для поиска логина (РЕПЕТА)---------*/

// const logins = ["m4ngoDoge", "kiwidab3st", "poly1scute", "aj4xth3m4n"];

// const findLogin = function (allLogins, loginToFind) {

//     for (const login of allLogins) {
//         if (login === loginToFind) {
//             return "Пользователь ${loginToFind} найден.";
//         }
//     }
//     return "Пользователь ${loginToFind} не найден.";
// }

//* теперь запишем через тернарник

// const findLogin = function (allLogins, loginToFind) {
//   const message = allLogins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} найден.`
//     : `Пользователь ${loginToFind} не найден.`;

//   return message;
// };

//* НО МОЖНО, и лучше, ЗАПИСАСТЬ БЕЗ ПЕРЕМЕННОЙ

// const findLogin = function (allLogins, loginToFind) {
//   return allLogins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} найден.`
//     : `Пользователь ${loginToFind} не найден.`;
// };

// console.log(findLogin(logins, "avocad3r"));
// console.log(findLogin(logins, "kiwidab3st"));
// console.log(findLogin(logins, "jam41"));
// console.log(findLogin(logins, "aj4xth3m4n"));

//!------------------------------------------

//*------Написать функцию для поиска самого маленького числа (РЕПЕТА)--------*/

// const findSmallestNumber = function (numbers) {
//     let smallestNumber = numbers[0];

//     for (const number of numbers) {
//         if (number < smallestNumber) {
//             smallestNumber = number;
//       }
//     }
//     return smallestNumber;
// }

// console.log(findSmallestNumber([3, 8, 12, -2, 15]));
// console.log(findSmallestNumber([100, 54, 8, 12, 47]));
// console.log(findSmallestNumber([7, 21, 84, 15, 4]));

//!------------------------------------------

//*------Написать функцию которая получает строку и возвращает URL-slug (РЕПЕТА)--------*/
//*------Строка состоит только из букв и пробелов

// const slugify = function (string) {
//   // const normalizedString = string.toLowerCase();
//   // const words = normalizedString.split(" ");
//   // const slug = words.join("-");

//   // return slug;

//   //* или можно записать в одну строку

//   return string.toLowerCase().split(" ").join("-");
// };

// console.log(slugify("Top 10 benefits of React framework"));
// console.log(slugify("Azure static Web Apps are Awesome"));
// console.log(slugify("Technical writing tips for non-native English speakers"));

//!------------------------------------------

//* Псевдомассив arguments */

// const fn = function () {
//     console.log(arguments);

//     const args = Array.from(arguments); // Array.from это уже устаревший синтаксис

//     console.log(args);

//     for (const arg of arguments) {
//         console.log(arg);
//     }
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// const fn = function (a, b, c, ...args) {
//   // через ...(rest) современный синтаксис сделать из псевдомассива массив,
//   // при помощи a, b, c мы можем прописать, какие аргументы мы хотим записать отдельно, а какие в массив

//   console.log(`${a}, ${b}, ${c}`);
//   console.log(args);
// };

// fn("hello", 1, 2, 3);
// fn("aloha", 1, 2, 3, 4, 5);
// fn("hi", 1, 2, 3, 4, 5, 6, 7);

//* Напиши функцию add для сложения произвольного количества аргументов (чисел) РЕПЕТА */

// const add = function (...args) {
//   console.log(args);

//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));

//!------------------------------------------

//* Напиши функцию, которая первым аргументом принимает массив чисел (РЕПЕТА) */
//* после первого аргумента может быть произвольное кол-во других аргументов котрые будут числами

// const filterNumbers = function (array, ...args) {
//   console.log("array: ", array);
//   console.log("args: ", args);
//   const uniqueElements = [];

//   for (const element of array) {
//     if (args.includes(element)) {
//       uniqueElements.push(element);

//       console.log(`${element} есть везде!`);
//     }
//   }
//   return uniqueElements;
// };

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15));
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64));

//!------------------------------------------

// const calculateTotal = function (number) {

// let total = 0;

// for (i = 1; i <= number; i += 1) {
//   total += i;
// }

//     return total;

// };

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));

//!------------------------------------------

//* Напиши функцию, которая рассчитывает та возвращает индекс массы тела человека

// function calcBMI(weight, height) {
//     weight = Number(weight.replace(",", "."));
//     height = Number(height.replace(",", "."));

//     const result = weight / (height * height);

//     return Number(result.toFixed(1));
// }
//TODO: решение выше правильное, но в функции выпоняется аж три операции - и так записывать не верно, каждая функция
//TODO: должна выполнять какое-то одно действие, поэтому перепишем код

// function calcBMI(weight, height) {
//   weight = convertToDecimal(weight);
//   height = convertToDecimal(height);

//   const result = weight / (height * height);

//   return getFixedNumber(result);
// }

// function convertToDecimal(str) {
//   return Number(str.replace(",", "."));
// }

// function getFixedNumber(num) {
//   return Number(num.toFixed(1));
// }

// const bmi = calcBMI("88,3", "1.75");
// console.log(bmi);

// const bmi2 = calcBMI("90,9", "1.50");
// console.log(bmi2);

//!------------------------------------------
//* Напиши функцию, которая возвращает наименьшее число из a и b

//!------------------------------------------
//* Автопереверка 22/32 (Модуль 2)

// function createArrayOfNumbers(min, max) {
//   const numbers = [];

//   for (i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }

//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));

//!------------------------------------------
//* Автопереверка 23/32 (Модуль 2)

// function filterArray(numbers, value) {

//     const moreThanValue = [];

//     for (const number of numbers) {
//         if (number > value) {
//             moreThanValue.push(number);
//        } 
//     }
//     return moreThanValue;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

//!------------------------------------------
//* Автопереверка 25/32 (Модуль 2)

// function getCommonElements(array1, array2) {
  
//     const commonElements = [];

//     for (const array of array1) {
//         if (array2.includes(array)) {
//             commonElements.push(array);
//         }
//     }
//     return commonElements;

// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));


