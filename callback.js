//* КОЛБЕК-функції

//* Фильтр (РЕПЕТА)
// вернуть 2 массива, в одном из которых числа будут > 3, а в следующий раз числа < 2

// const filter = function (array, test) {
//   const filteredArray = [];

//   for (const el of array) {
//     console.log(el);
//     const passed = test(el);

//     if (passed) {
//       filteredArray.push(el);
//     }
//   }
//   return filteredArray;
// };

// 1. Надо передать функцию
// 2. Функция получает элемент массива
// 3. Если элемент массива удовлетворяет условию, то функция вернёт true
// 4. Если элемент массива НЕ удовлетворяет условию, то функция вернёт false

// const callback1 = function (value) {
//   return value >= 3;
// };

// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);

// const callback2 = function (value) {
//   return value <= 4;
// };

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
// console.log(r2);

// TODO   мы получили функцию filter, которая получает произвольный массив и произвольный callback;
// TODO   для каждого эл-та оригинального массива вызывается callback и если он возвращает true, то элемент записывается в финальный массив

// 5. Нам нужно вернуть все фрукты, которых кол-во больше 120

// const fruits = [
//   { name: "apples", quantity: 200, isFresh: true },
//   { name: "grapes", quantity: 150, isFresh: false },
//   { name: "bananas", quantity: 100, isFresh: true },
// ];

// const getFruitsWithQuantity = function (fruit) {
//   return fruit.quantity >= 120;
// };

// const r3 = filter(fruits, getFruitsWithQuantity);
// console.log(r3);
