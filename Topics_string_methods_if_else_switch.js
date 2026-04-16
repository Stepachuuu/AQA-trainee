// Task #2

const str = "Hello, my name is John";

console.log(str.at()); // H
console.log(str.charAt()); // H
console.log(str.charCodeAt()); // 72
console.log(str.concat("!")); // Hello, my name is John!
console.log(str.includes("name")); // true
console.log(str.indexOf("l")); // 2
console.log(str.lastIndexOf("l")); // 3
console.log(str.padEnd(25, ".")); // Hello, my name is John...
console.log(str.padStart(25, ".")); // ...Hello, my name is John
console.log(str.repeat(2)); // Hello, my name is JohnHello, my name is John
console.log(str.replace("o", "O")); // HellO, my name is John
console.log(str.replaceAll("o", "O")); // HellO, my name is JOhn
console.log(str.slice(0, 5)); // Hello
console.log(str.split(" ")); // [ 'Hello,', 'my', 'name', 'is', 'John' ]
console.log(str.endsWith("John")); // true
console.log(str.startsWith("Hello")); // true
console.log(str.substring(0, 5)); // Hello
console.log(str.substr(0, 5)); // Hello
console.log(str.toUpperCase()); // HELLO, MY NAME IS JOHN
console.log(str.toLowerCase()); // hello, my name is john
console.log(str.toString()); // Hello, my name is John
console.log(" hi ".trim()); // hi
console.log(" hi ".trimEnd()); //  hi
console.log(" hi ".trimStart()); // hi

// Task #3.

const monthNumber = 1;
let result3 = "";

switch (monthNumber) {
  case 1:
    result3 = "January";
    break;
  case 2:
    result3 = "February";
    break;
  case 3:
    result3 = "March";
    break;
  case 4:
    result3 = "April";
    break;
  case 5:
    result3 = "May";
    break;
  case 6:
    result3 = "June";
    break;
}

console.log(result3); // January

// Task #4

let day = "Monday";
let message;

if (day === "Monday") {
  message = "It's Monday!";
} else if (day === "Tuesday") {
  message = "It's Tuesday!";
} else if (day === "Wednesday") {
  message = "It's Wednesday!";
} else if (day === "Thursday") {
  message = "It's Thursday!";
} else if (day === "Friday") {
  message = "It's Friday!";
} else if (day === "Saturday") {
  message = "It's Saturday!";
} else if (day === "Sunday") {
  message = "It's Sunday!";
} else {
  message = "Invalid day!";
}

console.log(message);

// Task #5. Используя switch, напишите программу перевода дней недели из цифр в названия (перевести дни 1-7 в Пон-Вос).

let dayNumber = 1; // Число дня
let dayName; // Название дня

switch (dayNumber) {
  case 1:
    dayName = "Понедельник";
    break;
  case 2:
    dayName = "Вторник";
    break;
  case 3:
    dayName = "Среда";
    break;
  case 4:
    dayName = "Четверг";
    break;
  case 5:
    dayName = "Пятница";
    break;
  case 6:
    dayName = "Суббота";
    break;
  case 7:
    dayName = "Воскресенье";
    break;
  default:
    dayName = "Некорректный день";
}

console.log(dayName);

// Task #6. Напишите программу по согласованию отпуска в зависимости от месяца. Если месяц “July” или “August”, то программа должна показать - “approved”, если другие месяцы, то - “denied”.

let month = "July";
let result;

switch (month) {
  case "July":
    result = "approved";
    break;
  case "August":
    result = "approved";
    break;
  default:
    result = "denied";
}

console.log(result);

// Task #7. Напишите простенький калькулятор (*, /, +, -). У вас должны быть две переменные для исходных чисел и одна для оператора. В зависимости от оператора, должно происходить то или иное арифметическое действие и выводиться результат в консоль. Проверьте ваш код с разными значениями, положительными, отрицательными, дробными и т.д.

let num1 = 10;
let num2 = 2.2;
let operator = "*";

let resultCalc;

switch (operator) {
  case "+":
    resultCalc = num1 + num2;
    break;
  case "-":
    resultCalc = num1 - num2;
    break;
  case "*":
    resultCalc = num1 * num2;
    break;
  case "/":
    if (num2 === 0) {
      resultCalc = "Ошибка: деление на 0!";
    } else {
      resultCalc = num1 / num2;
    }
    break;
  default:
    resultCalc = "Неизвестный оператор";
}

console.log(resultCalc);

// Task #7. Напишите программу, которая определяет, является ли заданный год високосным по правилам Григорианского календаря. Високосный год делится на 4, за исключением случаев, когда он делится на 100, но не на 400.

let year = 2024;
let result2;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  result2 = "Год високосный";
} else {
  result2 = "Год невисокосный";
}

console.log(result2);

/* Task #8. Напишите программу, которая рассчитывает стоимость билета в зависимости от возраста.
Дети до 2х лет - бесплатно
Дети до 10 лет - скидка в 50%
Пожилые (после 65) - скидка в 15%
Студенты - скидка в 10% */

let age = 20;
let isStudent = true;
let price = 1000;
let finalPrice;

if (age <= 2) {
  finalPrice = 0;
} else if (age < 10) {
  finalPrice = price * 0.5;
} else if (age > 65) {
  finalPrice = price * 0.85;
} else if (isStudent) {
  finalPrice = price * 0.9;
} else {
  finalPrice = price;
}

console.log(finalPrice);

/* Task #10. Решите задачу с помощью пройденных тем (исключительно с помощью пройденных тем): Улитка ползёт вверх по стене высотой 5 метров.
 Каждый день она проползает вверх на 3 метра, а каждую ночь съезжает вниз на 2 метра. За сколько дней она доползет до вершины стены.  */

let height = 5;
let current = 0;
let days = 0;

while (current < height) {
  //день
  current = current + 3;
  days = days + 1;
  if (current >= height) {
    // проверка: если уже достигла вершины - выходим
    break;
  }
  //ночь
  current = current - 2;
}

// Нельзя просто считать +1 в день, потому что последний день будет без ночного спуска
console.log(days);

/* Task #11. Креативное задание:
Напишите следующую программу:
У клиента должен быть выбор из двух (или трех) видов кофе (на ваш выбор).
Дайте названия вашим видам кофе.
Установите цену на кофе в зависимости от величины стаканчика (small, medium, large).
Выведите на экран название, затем рецепт выбранного кофе (используйте переменные для изменения рецепта и названия) и его стоимость (в зависимости от размера стаканчика). 
Компоненты кофе не влияют на стоимость.
Используйте подходящую комбинацию условий - if, else if, else - для решения задачи. */

let coffeeType = "latte"; // latte, cappuccino, espresso
let size = "medium"; // small, medium, large

let name;
let recipe;
let priceCoffe;

let basePrice;

// выбор кофе
if (coffeeType === "latte") {
  name = "Latte";
  recipe = "Espresso + Milk";
  basePrice = 3;
} else if (coffeeType === "cappuccino") {
  name = "Cappuccino";
  recipe = "Espresso + Milk Foam";
  basePrice = 3.5;
} else if (coffeeType === "espresso") {
  name = "Espresso";
  recipe = "Pure Espresso";
  basePrice = 2.5;
} else {
  name = "Unknown coffee";
  recipe = "No recipe";
  basePrice = 0;
}

// выбор размера
if (size === "small") {
  priceCoffe = basePrice;
} else if (size === "medium") {
  priceCoffe = basePrice + 1;
} else if (size === "large") {
  priceCoffe = basePrice + 2;
} else {
  priceCoffe = basePrice;
}

console.log("Coffee:", name);
console.log("Recipe:", recipe);
console.log("Price:", priceCoffe);

/* Task #12. Создайте программу, которая определяет, имеет ли человек право на определенное мероприятие, на основе нескольких критериев: возраста, статуса членства и посещения предыдущих мероприятий.
Критерии участия:
Возраст должен быть не менее 18 лет.
Для членов клуба другие ограничения не применяются.
Если человек не является членом клуба, необходимо посетить не менее 3 предыдущих мероприятий.
Если человек не является членом клуба, но посетил 5 или больше предыдущих мероприятий, он получает специальный VIP-пропуск. */

let age1 = 20;
let isMember = false;
let eventsAttended = 5;

let result4;

if (age1 < 18) {
  result4 = "Access denied: under 18";
} else if (isMember) {
  result4 = "Access granted (member)";
} else {
  // не член клуба
  if (eventsAttended >= 5) {
    result4 = "VIP access granted";
  } else if (eventsAttended >= 3) {
    result4 = "Access granted";
  } else {
    result4 = "Access denied: not enough events attended";
  }
}

console.log(result4);
