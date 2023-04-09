//* метод REDUCE

// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => {
//     console.log(number);
//     console.log("🚀 ~ acc:", acc);
//     return acc + number;
// }, 0);

// в одну строку

// const total = numbers.reduce((acc, number) => acc + number, 0);

// console.log("🚀 ~ total:", total);

//** Считаем общую ЗП

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const totalSalary = Object.values(salary).reduce(
//   (total, value) => total + value,
//   0
// );

// console.log(totalSalary);

//!=======МОДУЛЬ 4 (урок 2)=============================================

//*Перебираючі методи масиву

// const cars = [
//   {
//     make: "Honda",
//     model: "CR-V",
//     type: "suv",
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   },
//   {
//     make: "Honda",
//     model: "Accord",
//     type: "sedan",
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     make: "Mazda",
//     model: "Mazda 6",
//     type: "sedan",
//     amount: 8,
//     price: 24195,
//     onSale: false,
//   },
//   {
//     make: "Mazda",
//     model: "CX-9",
//     type: "suv",
//     amount: 7,
//     price: 31520,
//     onSale: true,
//   },
//   {
//     make: "Toyota",
//     model: "4Runner",
//     type: "suv",
//     amount: 19,
//     price: 34210,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Sequoia",
//     type: "suv",
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Tacoma",
//     type: "truck",
//     amount: 4,
//     price: 24320,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "F-150",
//     type: "truck",
//     amount: 11,
//     price: 27110,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Fusion",
//     type: "sedan",
//     amount: 13,
//     price: 22120,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Explorer",
//     type: "suv",
//     amount: 6,
//     price: 31660,
//     onSale: false,
//   },
// ];

// //* Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.

// const getModels = (cars) => cars.map((car) => car.model);

// 1. Спочатку вызываем метод MAP  cars => cars.map()
// 2. MAP принимает колбек-ф., нам нужна только текущая машина cars => cars.map(car =>)
// 3. И теперь car я могу заменить колбек-функцией на madel: cars => cars.map(car => car.model)

// 4. Запись через return

// const getModels = (cars) =>
//   cars.map((car) => {
//     return car.model;
//   });

// 5. Деструктуризируем, чтоб уйти от записи car.model - не звертатися через крапку

// const getModels = (cars) => cars.map(({ model }) => model);

// console.table(getModels(cars));

//!====================================================

//*Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним значенням властивості price залежно від переданої знижки.

//1. Вызываем метод map   (cars, dicount) => cars.map()
//2. map принимает колб-ф., а та в свою очередь принимает текущий элемент массива объект car (cars, dicount) => cars.map(car =>)
//3. Далее нам надо записать, что заменит поле price
//4. Т.к. нам нужно вносить изменения в массив (будет новая цена), мы должны сделать сначал копию оригинального массива объектов при помощи ...spread,
//   а т.к. это будет новый объект, то берём в фигурные скобки (cars, dicount) => cars.map((car) => ({...car, }))
//5. Чтоб записать новую цену со скидкой используем формулу: car.price * (1 - discount)
//6. В новом объекте нам надо перезаписать свойство price, поэтому обращаеися через двоеточие price: car.price * (1 - discount)
//7. CСоответственно записаем новую цену в новый объект (cars, dicount) => cars.map((car) => ({...car, price: car.price * (1 - discount)}))

// const makeCarsWithDiscount = (cars, discount) =>
//   cars.map((car) => ({ ...car, price: car.price * (1 - discount) }));

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

//!=================FILTER================================

//* Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж значення параметра threshold.

// const filterByPrice = (cars, threshold) => cars.filter(({price}) => price <= threshold);

// без деструктуризации
// const filterByPrice = (cars, threshold) =>
//   cars.filter((car) => {
//     if (car.price <= threshold) {
//       return car.price;
//     }
//   });

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 23000));

//!====================================================

//* Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.

// const getCarsWithDiscount = (cars) =>
//     cars.filter(({ onSale }) => onSale); // под капотом onSale === true

// console.table(getCarsWithDiscount(cars));

//!====================================================

//* Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається зі значенням параметра type.

// const getCarsWithType = (cars, type) => cars.filter(({ type: carType }) => type === carType);
// здесь у нас совпадают параметр type и свойство объекта type, поэтому делаем деструктуризацию
// переменной колбек-ф. type: carType, т.е. присваиваем новое имя

// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));

//!===============FIND==================================

//* Метод find(). Ищем машины определённой модели.

// const getCarByModel = (cars, model) =>
//   cars.find(({ model: carModel }) => model === carModel); // под капотом идёт проверка - если колб-ф возвращает true, элемент подходит
// и мы его сразу возвращаем, а если false - поиск продолжается

// если записать через точку  (car) => car.model === model

// console.log(getCarByModel(cars, "F-150"));
// console.log(getCarByModel(cars, "CX-9"));

//!==============SORT===================

//* сортировка, когда значение "слово"

// const arr = ['b', 'r', 's', 'a', 'c'];

// arr.sort((a, b) => a.localeCompare(b)); // за зростанням
// arr.sort((a, b) => b.localeCompare(a)); // за спаданням

// console.log(arr);

//* Нехай функція sortByDescendingPrice повертає новий масив автомобілів відсортований за зменшенням значення властивості price.

// const sortByDescendingPrice = cars => [...cars].sort((a, b) => a.amount - b.amount);

// console.table(sortByDescendingPrice(cars));

//* Нехай функція sortByDescendingPrice повертає новий масив автомобілів відсортований за зменшенням значення властивості price.

// const sortByDescendingPrice = cars => [...cars].sort((a, b) => b.price - a.price);

// console.table(sortByDescendingPrice(cars));

//* Нехай функція sortByModel повертає новий масив автомобілів відсортований за назвою моделі в алфавітному та
//* зворотному алфавітному порядку, в залежності від значення параметра order.

// const sortByModel = (cars, order) =>
//   [...cars].sort((a, b) => {
//     switch (order) {
//       case "asc":
//         return a.model.localeCompare(b.model);
//       case "desc":
//         return b.model.localeCompare(a.model);
//     }
//   });

// console.table(sortByModel(cars, "asc"));
// console.table(sortByModel(cars, "desc"));

//!==============REDUCE===================

//* Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення властивостей amount).

// const getTotalAmount = (cars) =>
//   cars.reduce((acc, { amount }) => acc + amount, 0);

// console.log(getTotalAmount(cars));

//!==============Ланцюжки методів===================

//* Нехай функція getAvailableCarNames повертає масив моделей автомобілів, але тільки тих, які зараз на розпродажі.

// const getModelsOnSale = (cars) =>
//   cars.filter(({ onSale }) => onSale).map(({ model }) => model);

// console.table(getModelsOnSale(cars));

//* Нехай функція getSortedCarsOnSale повертає масив автомобілів на розпродажі (властивість onSale), відсортованих за зростанням ціни.

// const getSortedCarsOnSale = (cars) =>
//   cars.filter(({ onSale }) => onSale).sort((a, b) => a.price - b.price);

// console.table(getSortedCarsOnSale(cars));

//!====================================================

//* Треба вивести новий масив з унікальними значеннями елементів масиву

// const numbers = [1, 1, 2, 2, 3, 3, 4, 4];

// const uniqueNumbers = numbers.filter(
//   (number, index, numbers) => numbers.indexOf(number) === index
// );

// console.log(uniqueNumbers);

// console.log(new Set(numbers)); // структура даних new Set повертає колекцію унікальних значень, отримаємо {1, 2, 3, 4},
// потім можна перетворити на масив

//!=================findIndex=================================

// const subjects = ["Math", "PE", "Physics"];

// const index = subjects.findIndex((subject) => subject == "Physics");

// console.log(index);

// const arr = [3, 4, 2, 35, 99, 7, 15];

// const i = arr.findIndex((el) => el > 40);

// console.log(i);
// console.log(arr[i]);

//!====================================================

//* дз 45/48

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];

// const MIN_BOOK_RATING = 8;

// const names = (books) => {
//   return books
//     .filter((book) => book.rating > MIN_BOOK_RATING)
//     .map((book) => book.author)
//     .sort((a, b) => a.localeCompare(b));
// };

// console.table(books);
// console.table(names(books, MIN_BOOK_RATING));
