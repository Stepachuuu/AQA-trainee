/* 1. Создать класс Машина со свойствами Модель, Цвет и Год выпуска. 
 Создать класс Жигули, который наследует от класса Машина. Класс Жигули имеет свойства Место выпуска и Максимальная скорость. 
 Вывести на печать печать всю информацию о Жигулях. */

class Mashina {
  constructor(model, color, year) {
    this.model = model;
    this.color = color;
    this.year = year;
  }

  info() {
    return `Модель: ${this.model}, Цвет: ${this.color}, Год выпуска: ${this.year}`;
  }
}

class Zhiguli extends Mashina {
  constructor(model, color, year, placeOfManufacture, maxSpeed) {
    super(model, color, year);
    this.placeOfManufacture = placeOfManufacture;
    this.maxSpeed = maxSpeed;
  }

  info() {
    return `${super.info()}, Место выпуска: ${this.placeOfManufacture}, Максимальная скорость: ${this.maxSpeed} км/ч`;
  }
}

const car = new Zhiguli("ВАЗ-2106", "белый", 1985, "Москва", 150);

console.log(car.info());

/* 2. Дополнение к задаче №2 из предыдущего домашнего задания
Создать Square класс, который наследуется от Shape, и добавляет calcArea() метод, вычисляющий площадь квадрата. 
Настройте конструктор экземпляров объекта Square так, чтобы свойству name автоматически присваивалось значение square, 
а sides для свойства автоматически устанавливалось значение 4. Поэтому при вызове конструктора вам нужно просто предоставить свойство sideLength.
Создайте экземпляр класса Square, вызываемого square с соответствующими значениями свойств, и вызовите его методы calcPerimeter() 
и calcArea(), чтобы показать, что он работает нормально. */

class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    const perimeter = this.sides * this.sideLength;
    console.log(`Perimeter: ${perimeter}`);
  }
}

class Square extends Shape {
  constructor(sideLength) {
    super("square", 4, sideLength);
  }

  calcArea() {
    const area = this.sideLength * this.sideLength;
    console.log(`Area: ${area}`);
  }
}

const square = new Square(5);

square.calcPerimeter();
square.calcArea();

/* 3.Создать абстрактный класс Human со свойствами Имя, Возраст и Интерес и методом info. Метод Info возвращает все свойства в формате предложения.
Вывести на печать печать все свойства для двух людей, Кати и Юры. */

class Human {
  constructor(name, age, interest) {
    if (this.constructor === Human) {
      throw new Error(
        "Human это абстрактный класс и не может быть создан напрямую",
      );
    }

    this.name = name;
    this.age = age;
    this.interest = interest;
  }

  info() {
    return `Меня зовут ${this.name}. Мне ${this.age} лет. Мой интерес: ${this.interest}.`;
  }
}

class Person extends Human {
  // Дочерний класс (будем создавать людей через него)
  constructor(name, age, interest) {
    super(name, age, interest);
  }
}

const katya = new Person("Катя", 21, "рисование");
const yura = new Person("Юра", 26, "футбол");

console.log(katya.info());
console.log(yura.info());

/* 4.Создать метод getFood, который может принимать аргумент foodType (сухая или консервная). 
Переписать метод так чтобы он мог также принимать аргументы количество и/или бренд.  
Вывести на печать следующие фразы:

Метод без аргументов: "All dogs love to eat!"
Метод с foodType: "Shepherd Masha eats dry food."
Метод с foodType и количеством: "Poodle Demi eats 2 bowls a day of wet food."
Метод с foodType, количеством и брендом: "Corgi Henry eats 3 bowls a day of dry food by Royаl Canin." */

class Dog {
  constructor(breed, name) {
    this.breed = breed;
    this.name = name;
  }

  getFood(foodType, amount, brand) {
    if (!foodType) {
      return "All dogs love to eat!";
    }

    let result = `${this.breed} ${this.name} eats ${foodType} food`;

    if (amount) {
      result += `, ${amount} bowls a day`;
    }

    if (brand) {
      result += ` by ${brand}`;
    }

    return result + ".";
  }
}

const dog1 = new Dog("Shepherd", "Masha");
const dog2 = new Dog("Poodle", "Demi");
const dog3 = new Dog("Corgi", "Henry");

console.log(dog1.getFood());
console.log(dog1.getFood("dry"));
console.log(dog2.getFood("wet", 2));
console.log(dog3.getFood("dry", 3, "Royal Canin"));

/* 5. Создать классы пользователя и администратора
В этом задании мы будем использовать приватные свойства, чтобы скрыть определенные значения и предотвратить прямой доступ к ним. 
Приватные свойства могут быть доступны только внутри объявления класса.
Мы обозначаем частную переменную или функцию символом решетки (#).
Например, если бы у нас был класс Person с номером социального 
страхования и функцией для расчета их налоговой категории, мы бы не 
обязательно хотели, чтобы эта информация была общедоступной. Поэтому мы можем сделать эти поля приватными, как в примере ниже:

class Person {
    #socialSecurityNumber;

    #calculateTaxBracket() {
    }
}

Ваша задача:
Создайте классы User и Admin. Класс Admin расширяет класс User. Класс User имеет закрытую функцию updatePassword() и 
публичную функцию resetPassword(). Класс Admin имеет публичную функцию deleteUser().

Параметры для класса User
    username: String
    (private) password: String

Параметры для класса Admin
    username: String
    (private) password: String

Свойства класса Admin
Следующие свойства также должны быть добавлены в класс Admin. Они не являются параметрами.
    isAdmin = true;

Функции класса User
resetPassword(newPassword)
Вызывает закрытую функцию updatePassword с новым паролем. 

updatePassword(newPassword)
Устанавливает пароль пользователя на newPassword. Это частная функция.

Функции класса Admin
deleteUser(userToDelete): Принимает строку userToDelete и возвращает строковое сообщение: "Пользователь [userToDelete] был удален."

Результат
[testUser, testAdmin]: Массив, содержащий экземпляр класса User и экземпляр класса Admin

Ограничения
Пароль должен быть частной переменной
updatePassword должен быть частной функцией
Вы должны использовать ключевое слово extends для создания связи между пользователем и администратором. */

class User {
  #password;

  constructor(username, password) {
    this.username = username;
    this.#password = password;
  }

  resetPassword(newPassword) {
    this.#updatePassword(newPassword);
  }

  #updatePassword(newPassword) {
    this.#password = newPassword;
  }
}

class Admin extends User {
  isAdmin = true;

  constructor(username, password) {
    super(username, password);
  }

  deleteUser(userToDelete) {
    return `Пользователь ${userToDelete} был удален.`;
  }
}

const testUser = new User("user1", "12345");
const testAdmin = new Admin("admin1", "adminpass");

const result = [testUser, testAdmin];

console.log(result);

const message = testAdmin.deleteUser("user1");
console.log(message);

/* 6. Креативное задание. Создать структуру школы.
В школе есть люди, студенты, учителя, декан, директор школы. 
У каждого свои свойства, некоторые повторяющиеся, как например имя, возраст, пол, можно больше.
Но так же есть и не повторяющиеся, например, 
студенты - номер курса (1-ый год, 2-й год, и т.д.)
студенты - специальность (major)
студенты - средний бал (gpa, от 1 до 4, 1 - студент плохо учиться, 4 - очень хорошо)
учителя - имеют зарплату
декан - зарплата в 2 раза больше чем у учителей, плюс годовой бонус в размере 1 зарплаты
учитель и декан - часы работы
директор школы - зарплата в 1.5 раза больше чем у декана, плюс годовой бонус в размере 2х зарплат
Использовать 4 принципа ООП
Вывести на печать имена и позицию каждого человека
Вывести на печать зарплату директора школы
Вывести на печать имя студента valedictorian (лучший студент школы, студент с лучшим gpa). */

class Person1 {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  getRole() {
    return "Person";
  }
}

// Student
class Student extends Person1 {
  constructor(name, age, gender, course, major, gpa) {
    super(name, age, gender);
    this.course = course;
    this.major = major;
    this.gpa = gpa;
  }

  getRole() {
    return "Student";
  }
}

// Teacher
class Teacher extends Person1 {
  #salary;

  constructor(name, age, gender, salary, workHours) {
    super(name, age, gender);
    this.#salary = salary;
    this.workHours = workHours;
  }

  getSalary() {
    return this.#salary;
  }

  getRole() {
    return "Teacher";
  }
}

// Dean
class Dean extends Teacher {
  constructor(name, age, gender, teacherSalary, workHours) {
    super(name, age, gender, teacherSalary * 2, workHours);
  }

  getSalary() {
    const base = super.getSalary();
    return base + base; // зарплата + бонус (1 зарплата)
  }

  getRole() {
    return "Dean";
  }
}

// Director
class Director extends Dean {
  constructor(name, age, gender, teacherSalary, workHours) {
    super(name, age, gender, teacherSalary, workHours);
  }

  getSalary() {
    const deanSalary = super.getSalary();
    const base = deanSalary * 1.5;
    return base + base * 2; // + бонус 2 зарплаты
  }

  getRole() {
    return "Director";
  }
}

const people = [
  new Student("Anna", 20, "female", 2, "Computer Science", 3.8),
  new Student("Max", 22, "male", 4, "Math", 3.95),
  new Student("Kirill", 19, "male", 1, "Physics", 3.2),
  new Teacher("Mrs. Lore", 40, "female", 3000, 40),
  new Dean("Dr. Brown", 50, "male", 3000, 45),
  new Director("Mr. White", 55, "male", 3000, 50),
];

console.log("Список всех людей:");
people.forEach((person) => {
  console.log(`${person.name} - ${person.getRole()}`);
});

const director = people.find((p) => p instanceof Director);
console.log("Зарплата директора:");
console.log(director.getSalary());

const students = people.filter((p) => p instanceof Student);

const valedictorian = students.reduce((best, current) => {
  return current.gpa > best.gpa ? current : best;
});

console.log("Лучший студент:");
console.log(valedictorian.name);
