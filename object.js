//* Перебор объекта

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeedback = 0;

// const keys = Object.keys(feedback); // получаем массив ключей из объекта
// console.log("🚀 ~ key:", keys)

// for (const key of keys) {
//     console.log(key);
//     console.log(feedback[key]);

//     totalFeedback += feedback[key];
// }

//  console.log("🚀 ~ totalFeedback:", totalFeedback);

// const values = Object.values(feedback); // получаем массив значений из объекта
// console.log("🚀 ~ values:", values);

// for (const value of values) {
//     console.log(value);

//     totalFeedback += value;
// }

// console.log("🚀 ~ totalFeedback:", totalFeedback);

//!====================================================

//* Имеется массив объектов

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: true },
//   { name: "Ajax", online: false },
// ];

// console.table(friends);

//* Будем искать друга по имени
//* перебираем массив через FOR и через IF сравниваем имена ключей объектов с именем в аргументе

// const findFriendByName = function (allFriends, friendName) {
//   for (const friend of allFriends) {
// получаем доступ к каждому элементу
// console.log(friend);
// console.log(friend.name);

//     if (friend.name === friendName) {
//       return "НАШЛИ !!!";
//     }
//   }

//   return "Не нашли!";
// };

// console.log(findFriendByName(friends, "Poly"));
// console.log(findFriendByName(friends, "Chelsy"));

//* Нужно получить массив всех имен наших друзей

// const getAllNames = function (allFriends) {

//   const names = [];

//   for (const friend of allFriends) {
//     console.log(friend.name);
//     names.push(friend.name);
//   }

//   return names;
// };

// console.log(getAllNames(friends));

//* Нужно получить всех друзей, которые онлайн

// const getOnlineFriends = function (allFriends) {
//   const onlineFriends = [];

//   for (const friend of allFriends) {
//     console.log(friend);
//     console.log(friend.online);

//     if (friend.online) {
//       onlineFriends.push(friend);
//     }
//   }
//   return onlineFriends;
// };

// console.log(getOnlineFriends(friends));

//!====================================================
//* SPRED и REST

// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);

// const numbers = [5, 10, ...[1, 2, 3], 4, 5, ...[7, 8, 9]]; // операция распыления spread - более современный синтаксис по сравнению с concat

// console.log(numbers);

//* Поиск самой маленькой и большой температуры

// const temps = [18, 14, 12, 21, 17, 29, 24];

// console.log(Math.max(...temps));
// console.log(Math.min(...temps)); // "распыляем" элементы массива и т.о. передаём их как отдельные аргументы, и среди аргументов уже определяем min / max

//* Сшиваем несколько массивов

// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];

// console.log(allTemps);

//* Распыление объектов

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = {
//   ...a,
//   ...b,
// };

// console.log(c);

//!====================================================

//* Глубокая деструктуризация (РЕПЕТА)

// const profile = {
//   name: "Oleg",
//   place: "Germany",
//   stats: {
//     followers: 5600,
//     views: 4522,
//     likes: 1320,
//   },
// };

// const { name, place, stats } = profile; // деструктуризация объекта

// const { followers, views, likes } = stats; // деструктуризация вложенного объекта

// две строки выше можно записать одной - это и есть ГЛУБОКАЯ деструктуризация

// const {
//   name,
//   place,
//   stats: { followers, views, likes },
// } = profile;

// console.log(name, place, followers, views, likes);

//!====================================================

//* Example 4
// Напиши скрипт управління особистим кабінетом інтернет банку.
// Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

//  * Типів транзакцій всього два.
//  * Можна покласти чи зняти гроші з рахунку.

// const TRANSACTIONS = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// const account = {
//   Поточний баланс рахунку
//   balance: 50,

//   Історія транзакцій
//   transactions: [],

/*
   * Метод створює та повертає об'єкт транзакції.
   * Приймає суму та тип транзакції.
   * Кожна транзакція це об'єкт із властивостями: id, type та amount
   
  createTransaction(amount, type) {
    return {
      amount,
      type,
      id: this.transactions.length,
    };
  },

  /*
   * Метод, що відповідає за додавання суми до балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій
  //  */
//   deposit(amount) {
//     const transaction = this.createTransaction(amount, TRANSACTIONS.DEPOSIT);
//     this.transactions.push(transaction);
//     this.balance += amount;
//   },

//   /*
//    * Метод, що відповідає за зняття суми з балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій.
//    *
//    * Якщо amount більше ніж поточний баланс, виводь повідомлення
//    * про те, що зняття такої суми не можливе, недостатньо коштів.
//    */
//   withdraw(amount) {
//     if (amount > this.balance) {
//       console.error("Недостатньо коштів!");
//       return;
//     }
//     const transaction = this.createTransaction(amount, TRANSACTIONS.WITHDRAW);
//     this.transactions.push(transaction);
//     this.balance -= amount;
//   },

//   /*
//    * Метод повертає поточний баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод шукає та повертає об'єкт транзакції по id
//    */
//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (id === transaction.id) {
//         return transaction;
//       }
//     }
//   },

//   /*
//    * Метод повертає кількість коштів
//    * певного типу транзакції з усієї історії транзакцій
//    */
//   getTransactionTotal(type) {
//     let total = 0;
//     for (const transaction of this.transactions) {
//       if (type === transaction.type) {
//         total += transaction.amount;
//       }
//     }
//     return total;
//   },
// };

// account.deposit(500);
// account.deposit(300);
// account.deposit(100);

// account.withdraw(200);

// console.log(account.transactions);
// console.log(account.getBalance());

// console.log(account.getTransactionDetails(2));
// console.log(account.getTransactionTotal(TRANSACTIONS.WITHDRAW));

//!====================================================

//* Деструктуризация массивов (РЕПЕТА)
//Нужно найти самы большой рейтинг

// const authors = {
//   kiwi: 4,
//   poly: 7,
//   mango: 6,
//   ajax: 9,
// };

// const entries = Object.entries(authors);

// // console.log(entries);

// // for (const entry of entries) {

// //   // const name = entry[0];
// //   // const rating = entry[1];

// //   //? лучше записать одной строкой

// //   const [name, rating] = entry;

// //   console.log(name, rating);
// // }

// // TODO // и ещё самый оптимальный вариант

// for (const [name, rating] of entries) {
//   console.log(name, rating);
// }

//!====================================================

//* Операция REST (РЕПЕТА)

// const profile = {
//   name: "Oleg",
//   tag: 'jgluke',
//   place: "Germany",
//   avatar: 'icon',
//   stats: {
//     followers: 5600,
//     views: 4522,
//     likes: 1320,
//   },
// };

// const { name, tag, place, ...restProps } = profile; // первые 3 cвойства локальной переменной деструктуризируем, а оставшиеся собираем в переменнeю с помощью ...rest

// console.log(name, tag, place);
// console.log(restProps);

//!====================================================

//* дз 19/41

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const arrayAllPropValues = [];

//   for (const product of products) {
//     if (product[propName]) {
//       arrayAllPropValues.push(product[propName]);
//     }
//   }
//   return arrayAllPropValues;
// }

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));

//!====================================================

//* дз 41/41

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],

//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     return this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     for (const potion of this.potions) {
//       const potionIndex = this.potions.indexOf(potion);
//       if (potion.name === potionName) {
//         return this.potions.splice(potionIndex, 1);
//       }
//     }

//     return `Potion ${potionName} is not in inventory!`;
//   },

//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
// };

// console.log(atTheOldToad.getPotions());
// console.table(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.table(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.table(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// console.table(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
// atTheOldToad.removePotion("Dragon breath");
// atTheOldToad.removePotion("Speed potion");
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion");
