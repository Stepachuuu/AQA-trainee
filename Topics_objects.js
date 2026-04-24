// 1. Создайте объект cars, где будут 3-4 разные машины с их названиями, моделями, годом выпуска и цветом.

const cars = {
  car1: {
    name: "Toyota",
    model: "Camry",
    year: 2020,
    color: "white",
  },

  car2: {
    name: "BMW",
    model: "X5",
    year: 2022,
    color: "black",
  },

  car3: {
    name: "Audi",
    model: "A6",
    year: 2019,
    color: "gray",
  },

  car4: {
    name: "Tesla",
    model: "Model 3",
    year: 2023,
    color: "red",
  },
};

/* 2. Работа с объектом room. Выполняйте пошагово.
    а. Создайте объект room и его параметры:
        	ключ height со значением 3
        	ключ tv со значением samsung
        	ключ big со значением true
    b. Выведите в console все параметры объекта room по очереди
    c. Выведите в console тип данных параметра big
    d. Выведите в console количество символов в строке параметра tv (длину строки)
    e. Выведите в console результат расчёта: длина строки параметра tv минус 1
    f. Поменяйте samsung на все заглавные буквы и выведите в console.
    g. Замените samsung на LG в нашем объекте room
    h. Добавьте в наш объект room ещё одну пару ключ-значение: 
        ключ furniture, значение - массив из 3 строк: "table", "chair", "sofa"
    i. выведите chair в console (путем обращения к массиву)
    j. Удалите из нашего объекта room параметр big */

let room = {
  height: 3, // a
  tv: "samsung",
  big: true,
};

console.log(room.height); // b
console.log(room.tv);
console.log(room.big);

console.log(typeof room.big); // c
console.log(room.tv.length); // d
console.log(room.tv.length - 1); // e
console.log(room.tv.toLocaleUpperCase()); // f

room.tv = "LG"; // g
console.log(room.tv);

room.furniture = ["table", "chair", "sofa"]; // h
console.log(room.furniture[1]); // i
delete room.big; // j

console.log(room);

/* 3. Создайте функцию, которая принимает следующий объект как параметр:
    {name: "dog", legs: 4, color: "yellow"}
    Возвратите строку: "This yellow dog has 4 legs." */

function describeAnimal(obj) {
  let color = obj.color;
  let name = obj.name;
  let legs = obj.legs;

  return "This " + color + " " + name + " has " + legs + " legs.";
}

console.log(describeAnimal({ name: "dog", legs: 4, color: "yellow" }));

/* 7. Задача для сладкоежек. Есть массив десертов. Выведите самый дешевый десерт и самый дорогой десерт.
    const desserts = [
        { name: "Пирожное", price: 65 },
        { name: "Мороженое", price: 35 },
        { name: "Торт Наполеон", price: 250 },
        { name: "Песочное Печенье", price: 50 },
        { name: "Пудинг", price: 80 },
        { name: "Фруктовый Тарт", price: 40 },
        { name: "Желе Земляничное", price: 40 },
        { name: "Вафли Шоколадные", price: 36 },
        { name: "Булочка с Изюмом", price: 28 }
    ]; */

const desserts = [
  { name: "Пирожное", price: 65 },
  { name: "Мороженое", price: 35 },
  { name: "Торт Наполеон", price: 250 },
  { name: "Песочное Печенье", price: 50 },
  { name: "Пудинг", price: 80 },
  { name: "Фруктовый Тарт", price: 40 },
  { name: "Желе Земляничное", price: 40 },
  { name: "Вафли Шоколадные", price: 36 },
  { name: "Булочка с Изюмом", price: 28 },
];

let minDessert = desserts[0];
let maxDessert = desserts[0];

for (let i = 1; i < desserts.length; i++) {
  if (desserts[i].price < minDessert.price) {
    minDessert = desserts[i];
  }

  if (desserts[i].price > maxDessert.price) {
    maxDessert = desserts[i];
  }
}

console.log("Самый дешевый:", minDessert);
console.log("Самый дорогой:", maxDessert);

/* 8. Креативное задание.
Создайте библиотеку книг Стивена Кинга, Марка Твена и Александра Сергеевича. В библиотеке должно быть по 5 книг каждого писателя. Каждая книга должна иметь идентификатор (isbn), имя книги, имя автора, год выпуска, жанр, количество страниц, популярность книги у этого автора (от 1 до 5) и 
первое предложение/строку.
    a. Выведите в console названия всех книг.
    b. Выведите в console имена самой популярной книги каждого из авторов в читабельном формате
    c. Отсортируйте библиотеку по году выпуска книг */

const library = [
  // King
  {
    isbn: "SK1",
    title: "It",
    author: "Stephen King",
    year: 1986,
    genre: "Horror",
    pages: 1138,
    rating: 5,
    firstLine: "The terror began in Derry.",
  },
  {
    isbn: "SK2",
    title: "The Shining",
    author: "Stephen King",
    year: 1977,
    genre: "Horror",
    pages: 447,
    rating: 5,
    firstLine: "Jack Torrance thought of snow.",
  },
  {
    isbn: "SK3",
    title: "Misery",
    author: "Stephen King",
    year: 1987,
    genre: "Thriller",
    pages: 320,
    rating: 4,
    firstLine: "Paul woke up in the wreck.",
  },
  {
    isbn: "SK4",
    title: "Carrie",
    author: "Stephen King",
    year: 1974,
    genre: "Horror",
    pages: 199,
    rating: 4,
    firstLine: "Carrie knew she was different.",
  },
  {
    isbn: "SK5",
    title: "The Stand",
    author: "Stephen King",
    year: 1978,
    genre: "Apocalypse",
    pages: 823,
    rating: 5,
    firstLine: "The virus spread fast.",
  },

  // Twain
  {
    isbn: "MT1",
    title: "Tom Sawyer",
    author: "Mark Twain",
    year: 1876,
    genre: "Adventure",
    pages: 274,
    rating: 5,
    firstLine: "Tom was always in trouble.",
  },
  {
    isbn: "MT2",
    title: "Huckleberry Finn",
    author: "Mark Twain",
    year: 1884,
    genre: "Adventure",
    pages: 366,
    rating: 5,
    firstLine: "Huck ran away at night.",
  },
  {
    isbn: "MT3",
    title: "The Prince and the Pauper",
    author: "Mark Twain",
    year: 1881,
    genre: "Historical",
    pages: 300,
    rating: 4,
    firstLine: "Two boys were identical.",
  },
  {
    isbn: "MT4",
    title: "A Connecticut Yankee",
    author: "Mark Twain",
    year: 1889,
    genre: "Satire",
    pages: 450,
    rating: 4,
    firstLine: "A man woke in the past.",
  },
  {
    isbn: "MT5",
    title: "Pudd’nhead Wilson",
    author: "Mark Twain",
    year: 1894,
    genre: "Drama",
    pages: 240,
    rating: 3,
    firstLine: "Identity was everything.",
  },

  // Pushkin
  {
    isbn: "AP1",
    title: "Eugene Onegin",
    author: "Alexander Pushkin",
    year: 1833,
    genre: "Novel in verse",
    pages: 224,
    rating: 5,
    firstLine: "My uncle was a man of honor.",
  },
  {
    isbn: "AP2",
    title: "Ruslan and Ludmila",
    author: "Alexander Pushkin",
    year: 1820,
    genre: "Poetry",
    pages: 180,
    rating: 4,
    firstLine: "In Kiev there was a feast.",
  },
  {
    isbn: "AP3",
    title: "The Captain’s Daughter",
    author: "Alexander Pushkin",
    year: 1836,
    genre: "Historical",
    pages: 200,
    rating: 5,
    firstLine: "Peter left his home early.",
  },
  {
    isbn: "AP4",
    title: "Boris Godunov",
    author: "Alexander Pushkin",
    year: 1825,
    genre: "Drama",
    pages: 150,
    rating: 4,
    firstLine: "The throne was empty.",
  },
  {
    isbn: "AP5",
    title: "The Bronze Horseman",
    author: "Alexander Pushkin",
    year: 1837,
    genre: "Poetry",
    pages: 120,
    rating: 5,
    firstLine: "Peter the Great stood firm.",
  },
];

library.forEach((book) => {
  console.log(book.title);
}); // a

let authors = {};

for (let book of library) {
  if (!authors[book.author] || book.rating > authors[book.author].rating) {
    authors[book.author] = book;
  }
}

for (let author in authors) {
  console.log(`Самая популярная книга ${author}: ${authors[author].title}`); // b
}

library.sort((a, b) => a.year - b.year);

console.log(library.map((book) => `${book.title} (${book.year})`)); // c
