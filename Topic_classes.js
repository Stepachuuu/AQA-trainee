// 1. Есть класс Song. Выведите на печать автора песни.

class Song {
  constructor(name, author) {
    this._name = name;
    this._author = author;
  }

  get author() {
    return this._author;
  }

  set author(writer) {
    this._author = writer;
  }
}

const song = new Song("Not Like Us", "Kendrick Lamar");

console.log(song.author);

/* 2. Определите класс Shape. 
    - Он имеет три свойства: name, sides, и sideLength. 
    - Этот класс моделирует только фигуры, все стороны которых имеют одинаковую длину, 
        например квадрат или равносторонний треугольник.
    - Добавьте конструктор в этот класс. 
    - Конструктор принимает аргументы для свойств name, sides и sideLength и инициализирует их.
    - Добавьте в класс новый метод calcPerimeter(), который вычисляет ее периметр 
        (длину внешнего края фигуры) и записывает результат в консоль.
    - Создайте новый экземпляр класса Shape с именем square. 
    - Дайте name ему square, sides = 4 и sideLength = 5​
    - Вызовите свой calcPerimeter() метод в экземпляре, чтобы проверить, 
        записывает ли он результаты вычислений в консоль браузера, как ожидалось.
    - Создайте новый экземпляр Shape Called triangle с name -  triangle и sides of = 3,  sideLength = 3
    - Вызовите triangle.calcPerimeter(), чтобы убедиться, что все работает. */

class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    const perimeter = this.sides * this.sideLength;
    console.log(perimeter);
  }
}

const square = new Shape("square", 4, 5);
square.calcPerimeter();

const triangle = new Shape("triangle", 3, 3);
triangle.calcPerimeter();

/* 3. Создайте класс "Employee", представляющий работника. У работника должны быть следующие свойства:
    1. "name" - строка, представляющая имя работника.
    2. "age" - число, представляющее возраст работника.
    3. "position" - строка, представляющая должность работника.
    4. "salary" - число, представляющее зарплату работника. 
      Требования:
    1. Создайте конструктор класса "Employee", который принимает аргументы 
        "name", "age", "position", "salary" и инициализирует соответствующие свойства объекта.
    2. Создайте геттеры и сеттеры для свойств "age", "position" и "salary".
    3. Геттеры должны возвращать значения свойств, а сеттеры должны устанавливать 
        новые значения свойств. */

class Employee {
  constructor(name, age, position, salary) {
    this.name = name;
    this._age = age;
    this._position = position;
    this._salary = salary;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value;
  }

  get position() {
    return this._position;
  }

  set position(value) {
    this._position = value;
  }

  get salary() {
    return this._salary;
  }

  set salary(value) {
    this._salary = value;
  }
}

const worker = new Employee("Stepan", 23, "Trainee", 1500);

console.log(worker.age); // выводим возраст

worker.salary = 3000; // меняем salary
console.log(worker.salary); // выводим новую

/* 4. Создайте класс Person со следующими свойствами:
    a. Конструктор который принимает 4 аргумента: 
        - First Name (по умолчанию значение "John") 
        - Last Name (по умолчанию значение "Doe")
        - Age (по умолчанию значение 0) 
        - Gender (по умолчанию значение "Male"). 
            
    b. Метод sayFullName без аргументов и возвращает полное имя человека
    c. Статический метод greetExtraTerrestrials который принимает один аргумент, raceName 
        и возвращает "Welcome to Planet Earth <raceName>". 
        
        Пример: если значение raceName "Martians", результат должен быть 
        "Welcome to Planet Earth Martians" */

class Person {
  // a.
  constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male") {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  sayFullName() {
    // b
    return this.firstName + " " + this.lastName;
  }

  static greetExtraTerrestrials(raceName) {
    // c.
    return "Welcome to Planet Earth " + raceName;
  }
}

const person1 = new Person(); // Примеры использования
console.log(person1.sayFullName());

const person2 = new Person("Ilya", "Malkov", 30, "Male");
console.log(person2.sayFullName());

console.log(Person.greetExtraTerrestrials("Martians"));

/* 5. Переделайте креативное задание из урока 7 в класс. Потом, используя класс, сделайте те же задания: 
a. Выведите в console названия всех книг. 
b. Выведите в console имена самой популярной книги каждого из авторов в читабельном формате 
c. Отсортируйте библиотеку по году выпуска книг */

class Book {
  constructor(isbn, title, author, year, genre, pages, rating, firstLine) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
    this.pages = pages;
    this.rating = rating;
    this.firstLine = firstLine;
  }
}

class Library {
  constructor(books) {
    this.books = books;
  }

  // a. вывести все названия книг
  printTitles() {
    this.books.forEach((book) => {
      console.log(book.title);
    });
  }

  // b. самая популярная книга каждого автора
  printBestBooks() {
    let authors = {};

    for (let book of this.books) {
      if (!authors[book.author] || book.rating > authors[book.author].rating) {
        authors[book.author] = book;
      }
    }

    for (let author in authors) {
      console.log(`Самая популярная книга ${author}: ${authors[author].title}`);
    }
  }

  // c. сортировка по году
  sortByYear() {
    this.books.sort((a, b) => a.year - b.year);

    console.log(this.books.map((book) => `${book.title} (${book.year})`));
  }
}

const books = [
  new Book("SK1", "It", "Stephen King", 1986, "Horror", 1138, 5, ""),
  new Book("SK2", "The Shining", "Stephen King", 1977, "Horror", 447, 5, ""),
  new Book("MT1", "Tom Sawyer", "Mark Twain", 1876, "Adventure", 274, 5, ""),
  new Book(
    "AP1",
    "Eugene Onegin",
    "Alexander Pushkin",
    1833,
    "Novel",
    224,
    5,
    "",
  ),
];

const library = new Library(books);

library.printTitles(); // a
library.printBestBooks(); // b
library.sortByYear(); // c
