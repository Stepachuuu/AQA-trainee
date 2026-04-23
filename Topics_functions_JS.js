// 5. Напишите функцию, которая выводит в консоль индивидуальное приветствие с именем, которое вы передаете в функцию

function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Stepan");
greet("Maria");

/* 6. Напишите функцию с калькулятором (можно использовать код с предыдущей домашней работы), в которую, в качестве параметров, 
передаются три переменные, две - числовые и третья отвечает за знак арифметической операции (*, /, -, +). Проверьте работу функции.
Пример:  
function calculate(a, b, operator)
{
   //code
}  */

function calculate(a, b, operator) {
  let resultCalc;

  switch (operator) {
    case "+":
      resultCalc = a + b;
      break;

    case "-":
      resultCalc = a - b;
      break;

    case "*":
      resultCalc = a * b;
      break;

    case "/":
      if (b === 0) {
        return "Ошибка: деление на 0!";
      }
      resultCalc = a / b;
      break;

    default:
      return "Неизвестный оператор";
  }

  return resultCalc;
}

console.log(calculate(10, 2.2, "*"));
console.log(calculate(10, 5, "+"));
console.log(calculate(-3, 5, "-"));
console.log(calculate(10, 2, "/"));
console.log(calculate(10, 0, "/"));
console.log(calculate(200, 2, "%"));

/* 7. Создать функцию getGreetings, возвращающую массив, содержащий строки "Hello, World" на разных языках.

    "Hello world!"
    "!Hola mundo!"
    "Hallo wereld!"
    "Пpивeт мир!"

Создать декларируемую функцию (function Declaration), функцию выражение (function Expression) и стрелочную функцию. */

function getGreetings() {
  return ["Hello world!", "!Hola mundo!", "Hallo wereld!", "Привет мир!"];
}

const getGreetings1 = function () {
  return ["Hello world!", "!Hola mundo!", "Hallo wereld!", "Привет мир!"];
};

const getGreetings2 = () => {
  return ["Hello world!", "!Hola mundo!", "Hallo wereld!", "Привет мир!"];
};

console.log(getGreetings());
console.log(getGreetings1());
console.log(getGreetings2());

// 9. Внедрите в свой код с Кофе (из дз 3, задача 11), как минимум 2 функции (на ваше усмотрение) и вызовите их в коде.
// Функция 1: выбор кофе
function getCoffeeInfo(coffeeType) {
  let name;
  let recipe;
  let basePrice;

  switch (coffeeType) {
    case "latte":
      name = "Latte";
      recipe = "Espresso + Milk";
      basePrice = 3;
      break;

    case "cappuccino":
      name = "Cappuccino";
      recipe = "Espresso + Milk Foam";
      basePrice = 3.5;
      break;

    case "espresso":
      name = "Espresso";
      recipe = "Pure Espresso";
      basePrice = 2.5;
      break;

    default:
      name = "Unknown coffee";
      recipe = "No recipe";
      basePrice = 0;
  }

  return { name, recipe, basePrice };
}

// Функция 2: расчёт цены по размеру
function calculatePrice(basePrice, size) {
  switch (size) {
    case "small":
      return basePrice;

    case "medium":
      return basePrice + 1;

    case "large":
      return basePrice + 2;

    default:
      return basePrice;
  }
}

let coffeeType = "latte";
let size = "medium";

const coffee = getCoffeeInfo(coffeeType);
const priceCoffe = calculatePrice(coffee.basePrice, size);

console.log("Coffee:", coffee.name);
console.log("Recipe:", coffee.recipe);
console.log("Price:", priceCoffe);

/* 10. Переделайте задачку с улиткой используя функции (подсказка - используем вложенные функции).
Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает вверх на 3 метра, а каждую ночь съезжает вниз на 2 метра. 
За сколько дней она доползет до вершины стены. */

function snailClimb() {
  function getOneDayResult(current) {
    current = current + 3; // днём поднимается

    if (current >= 5) {
      return current; // если дошла — сразу конец
    }

    current = current - 2; // ночью спускается
    return current;
  }

  let current = 0;
  let days = 0;

  while (current < 5) {
    days++;
    current = getOneDayResult(current);
  }

  return days;
}

console.log(snailClimb());

// 11. Напишите функцию, которая принимает массив чисел как параметр и возвращает сумму всех чисел этого массива.
//  Если элемент массива не число, пропускаем этот элемент.

function sumNumbers(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      sum += arr[i];
    }
  }

  return sum;
}

console.log(sumNumbers([1, 2, "a", 3]));
console.log(sumNumbers([10, "hello", 5, true, 2]));
console.log(sumNumbers([]));

// 12. Напишите функцию, которая принимает массива строк как параметр и возвращает строки длиннее 5 букв.

function filterLongStrings(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string" && arr[i].length > 5) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(filterLongStrings(["hello", 1234567, null, "javascript"]));
