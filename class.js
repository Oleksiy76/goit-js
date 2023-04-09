//!===========Прототипи та класи=============================

//*Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:

// email - пошта, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// topics - масив тем на яких спеціалізується блогер
// Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.

// Додай метод getInfo(), який, повертає рядок: User ${пошта} is ${вік} years old and has ${кількість постів} posts.

// Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.

// class Blogger {
//   constructor({ name, age, numberOfPosts, topics }) {
//     this.name = name;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//     }

//     getInfo() {
//         return `Blogger ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts.`
//     }

//     updatePostCount(value) {
//         this.numberOfPosts += value;
//     }
// }

// const mango = new Blogger({
//   name: "mango@mail.com",
//   age: 24,
//   numberOfPosts: 20,
//   topics: ["tech", "cooking"],
// });
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

// const poly = new Blogger({
//   name: "poly@mail.com",
//   age: 19,
//   numberOfPosts: 17,
//   topics: ["sports", "gaming", "health"],
// });
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts

//!====================================================

// Напиши клас Storage який створює об'єкти для керування складом товарів. При виклику отримуватиме один аргумент -
// початковий масив товарів і записуватиме його властивість items.

// Додай методи класу:

// getItems() - повертає масив товарів.
// addItem(item) - отримує новий товар і додає його до поточних.
// removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.
// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// class Storage {
//     constructor(arr) {
//         this.items = arr;
//     }

//     getItems() {
//         return this.items;
//     }

//     addItem(item) {
//         this.items.push(item);
//     }

//     removeItem(item) {
//         this.items = this.items.filter((el) => el !== item);
//     }
// }

// TODO: всі три публічні методи (getItems, addItem, removeItem) будуть називатися інтрфейсом, тому що ми можемо ними користуватися за межами самого класу
// при роботі з екземпляром

// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem("🍌");
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem("🍋");
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]

//!====================================================

//*Напиши клас User який створює об'єкт із властивостями login та email. Оголоси приватні властивості #login та #email,
// доступ до яких зроби через гетер та сетер login та email.

// class User {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login; // геттер
//   }

//   set login(newLogin) {
//     if (!Number.isNaN(Number(newLogin))) {
//       console.log("Логін не може бути числом!");
//     } else this.#login = newLogin; // сеттери потрібні для якихось додаткових перевірок під час задання якихось властивостей
//   }

//   get email() {
//     return this.#email; // геттер
//   }

//   set email(newEmail) {
//     this.#email = newEmail; // сеттери потрібні для якихось додаткових перевірок під час задання якихось властивостей
//   }
// }

// const mango = new User({
//   login: "Mango",
//   email: "mango@dog.com",
// });

// console.log(mango);

// console.log(mango.login); // Mango
// mango.login = "Mangodoge";
// mango.login = "9";
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: "Poly",
//   email: "poly@mail.com",
// });

// console.log(poly.login); // Poly
// poly.login = "Polycutie";
// console.log(poly.login); // Polycutie

//!====================================================

//* Напиши клас Notes який керує колекцією нотаток у властивості items.
//* Замітка це об'єкт із властивостями text та priority. Додай класу статичну властивість Priority, у якому зберігатиметься об'єкт із пріоритетами:

// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }

//* Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).

// class Notes {
//   static Priority = {
//     LOW: "low",
//     NORMAL: "normal",
//     HIGH: "high",
//   };

//   constructor(items = []) {
//     this.items = items;
//   }

//   addNote(note) {
//     this.items.push(note);
//   }

//   removeNote(text) {
// const index = this.items.findIndex(
//   ({ text: noteText }) => text === noteText
// );
// this.items.splice(index, 1);
// this.items = this.items.filter(({ text: noteText }) => text !== noteText); // TODO: удалить заметку можно 2 способами: 1) находим индекс элемента и затем
// TODO: вырезаем методом splice; 2) через метод filter, т.е. мы получим новый массив без требуемого элемента
//   }

//   updatePriority(text, newPriority) {
//     const targetObj = this.items.find(
//       ({ text: noteText }) => text === noteText
//     );
//     targetObj.priority = newPriority;
//   }
// }

// const myNotes = new Notes([]);

// myNotes.addNote({ text: "Моя перша замітка", priority: Notes.Priority.LOW });
// console.log(myNotes.items);

// myNotes.addNote({
//   text: "Моя друга замітка",
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeNote("Моя перша замітка");
// console.log(myNotes.items);

// myNotes.updatePriority("Моя друга замітка", Notes.Priority.HIGH);
// console.log(myNotes.items);

//!==============Наслідування класів======================

// class Rectangle {
//   constructor(a, b) {
//     this.name = "Rectangle";
//     this.a = a;
//     this.b = b;
//   }

//   greeting() {
//     console.log(`Hello! I am ${this.name}`);
//   }

//   calculateArea() {
//     return this.a * this.b;
//   }
// }

// class Square extends Rectangle {
//   constructor(length) {
//     super(length, length);
//     this.name = "Square";
//   }
// }

// const rec = new Rectangle(4, 3);
// console.log(rec);

// rec.greeting();
// console.log(rec.calculateArea());

// const square = new Square(20);
// console.log(square);

// square.greeting();
// console.log(square.calculateArea());
