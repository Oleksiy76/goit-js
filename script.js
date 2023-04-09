// const apples = 55;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);

// let students = 100;
// students += 50;
// console.log(students);

// const value = 27.5;
// console.log(Math.floor(value));
// console.log(Math.ceil(value));
// console.log(Math.round(value));

// const companyName = "Toyota";
// const repairCars = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairCars + defenceBots} bots in stock`;
// console.log(message);

// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);

// const hotelName = prompt("Please enter desired hotel name");
// console.log(hotelName);

// const value = prompt("Please enter a number!");
// console.log(typeof value);
// console.log(value);

// const password = "Admin";
// alert(password);

// const valueA = "5";
// console.log(Number (valueA));
// console.log(typeof Number(valueA));

// const valueB = "random string";
// console.log(valueB.length);
// console.log(Number(valueB));
// console.log(typeof Number(valueB));

// const message = "Odessa";
// console.log(message.toUpperCase());
// console.log(message);

//*-------Метод indexOf(), includes()

// const message = "Welcome to Bahamas!";
// console.log(message.indexOf("to"));
// console.log(message.indexOf("hello"));
// console.log(message.includes("come"));
// console.log(message.includes("wel"));

//*-------Метод endWith(), replace(), replaseAll()

// const jsFileName = "script.js";
// console.log(jsFileName.endsWith(".js"));
// console.log(jsFileName.endsWith(".css"));

// const jsFileName = "script.js";
// const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
// console.log(minifiedJsFileName);

// const cssFileNames = "styles.css, about.css, portfolio.css";
// const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
// console.log(minifiedCssFileNames);

/*--------Задача------------------*/

// let weight = "88,3";
// let height = "1.75";

// weight = Number(weight.replace(",", ".")); // делаем, чтоб в переменных точно была точка и приводим к числу
// height = Number(height.replace(",", "."));

// console.log(weight);
// console.log(height);

// const bmi = Number((weight / Math.pow(height, 2)).toFixed(1)); // по формуле вес делим на квадрат роста, ответ должен быть с одним знаком после точки и приводим к числу, т.к. toFixed возвращает строку
// console.log(bmi);

/*-----------Сравнение через Unicode--------------*/

// console.log("2" > "12"); // true - Unicode table
// console.log("2" >= "22"); // false

// console.log("2".charCodeAt(0)); // можно вызвать номер значения в таблице Unicode
// console.log("0".charCodeAt(0));
// console.log("p".charCodeAt(0));
// console.log("P".charCodeAt(0));

//*---Введення користувача та разголуження---------*/

// const userAnswer = prompt("Яка офіційна назва JavaScript?");

// if (userAnswer === "ECMAscript") {
//     alert("Правильно");
// } else {
//     alert("Не знаєте? ECMAscript!");
// }

// if (userAnswer === "ECMAscript") alert("Правильно"); // без фігурних дужок
// else alert("Не знаєте? ECMAscript!");

// userAnswer === "ECMAscript"
//   ? alert("Правильно")
//   : alert("Не знаєте? ECMAscript!"); //тернарний оператор

// let msg = "";
// userAnswer === "ECMAscript"
//   ? msg = "Правильно"
//   : msg = "Не знаєте? ECMAscript!"; // робимо додаткову змінну, щоб не писати 2 рази alert і далі змінну msg можна було використовувати в іншому місці

// alert(msg);

// let msg = userAnswer === "ECMAscript" ? "Правильно" : "Не знаєте? ECMAscript!";

// alert(msg);

//! =====================================

//*---Відображення часу (if...else)---------*/

//TODO: 1 спосіб
// const hours = 14;
// const minutes = 26;
// let timeStr = ""; // ініціалізація змінної

// if (minutes === 0) timeStr = `${hours} г.`; // тут вже відбувається перезапис змінної
// else timeStr = `${hours} г. ${minutes} хв.`;

// console.log(timeStr);

//TODO: 2 спосіб
// const hours = 14;
// const minutes = 26;

// let timeStr = minutes === 0 ? `${hours} г.` : `${hours} г. ${minutes} хв.`; // тернарний оператор

// console.log(timeStr);

//! =====================================

//*---Вкладені розгалуження---------*/
//Напиши скрипт, який порівнює числа у змінних a та b

// const a = 20;
// const b = 80;

// if (a > 100 && b > 100) {
//   if (a > b) console.log(a); // чрез терн опер  a > b ? console.log(a) : console.log(b);
//   else console.log(b);       // або console.log(Math.max(a, b));
// } else {
//     console.log(b + 512);
// }

//! =====================================

//*---Вкладені розгалуження (РЕПЕТА)---------*/
// Напиши скрипт, который подсчитывает сумму всех чётных чисел, которые входят в диапазон
// чисел в переменных от min до max

// const min = 0;
// const max = 5;
// let total = 0;

//TODO: 1 спосіб
// for от min до max с шагом 1

// for (let i = min; i <= max; i += 1) {
//     console.log(i);

//     if (i % 2 === 0) {
//       console.log("чётное: ", i); // проверяем остаток от деления, чтоб выявить все чётные и тогда выполняется 176 строка

//       total += i;
//     }
// }

// console.log('total: ', total);

//TODO: 2 спосіб - этот способ более ОПТИМАЛЬНЫЙ / ПРАВИЛЬНЫЙ с точки зрения кода

// for (let i = min; i <= max; i += 1) {
//     if (i % 2 !== 0) {
//     console.log("Не чётное: ", i); // тут идём от обратного, проверяем плохой кейс и когда он не выполнился идём дальше через continue
//     continue;
//     }

//     console.log("чётное: ", i);
//     total += i;
//   }

// console.log("total: ", total);

//*---Дедлайн здачі проекту (switch)---------*/
//Виконай рефакторинг коду задачі номер 5 використовуючи switch

// const daysUntilDeadline = 2;

// switch (daysUntilDeadline) {
//   case 0: {
//     console.log("Сьогодні");
//     break;
//   }
//   case 1: {
//     console.log("Завтра");
//     break;
//   }
//   case 2: {
//     console.log("Післязавтра");
//     break;
//   }
//   default: {
//     console.log("Дата у майбутньому");
//   }
// }

//*---Цикл for---------*/
//Напиши цикл for, який виводить числа за зростанням від min до max, але тільки якщо число кратне 5

// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i += 1) {
//   if (i % 5 === 0) console.log(i);
// }

// for (let i = min; i <= max; i += 5) {  // эта запись подходит только если значения min и max не будут меняться, иначе при min = 21 кратность 5 сломается
//  console.log(i);
// }

// let total = 0;

// for (let i = min; i <= max; i += 1) {   // сумма всех значений внутри цикла
//   total += i;
// }

// console.log(total);

//*--------Розгалуження---------*/
//Напиши скрипт, який питатиме логін за допомогою prompt та логувати результат у консоль браузера

//*--------Розгалуження---------*/
//Напиши скрипт обработки покупки в магазине

// let balance = 10000;
// const payment = 2000;

// console.log(
//   `Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету.`
// );

// if (balance >= payment) {
//   balance -= payment;

//   console.log("Всё хорошо, снимаем деньги.");
//   console.log(`На счету осталось ${balance} кредитов.`);
// } else {
//   console.log("На счету недостаточно средств  для проведения операции!");
// }

// console.log("Оперция завершена.");

//! =====================================

//*--------Розгалуження---------*/
//Напиши скрипт, який питатиме логін за допомогою prompt та логувати результат у консоль браузера

// const login = prompt("Введіть логін: ")?.trim(); // trim скасовує непотрібні пробіли (перетворює строку з пробілами на пусту строку), які можуть буди введені під час логіна

// console.log(login);

// if (login === "Адмін") {
//   const password = prompt("Введіть пароль: ");
//   if (password === "Я адмін") console.log("Здрастуйте!");
//   else onsole.log("Невірний пароль");
// } else if (!login) {
//   // else if (login === "" || login === undefined)
//   console.log("Скасовано");
// } else {
//   console.log("Я вас не знаю");
// }









