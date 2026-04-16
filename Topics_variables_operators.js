// 1. Переменные

let firstName = "John";
let lastName = "Adams";

console.log(firstName + " " + lastName);

firstName = "Brandon";
lastName = "Smith";

console.log(firstName + " " + lastName);

// 2. Выведите в консоль тип данных следующих переменных (использовать метод typeof()):

// Блок присвоения
let a;
let c = 9;
let str = "Hi 5!";
let b = true;
let y = 9 + "1";
let x = "a" / 6;

console.log();
console.log(typeof a);
console.log(typeof c);
console.log(typeof str);
console.log(typeof b);
console.log(typeof y);
console.log(typeof x);

// 3. Придумайте, какие переменные логично объявить через const, пропишите их и выведите на экран

const userName = "Stepan";
const PI = 3.14159;
const themeColor = "dark";
const birthYear = 2002;

console.log();
console.log(userName);
console.log(PI);
console.log(themeColor);
console.log(birthYear);
console.log();

// 4. Проверьте какие числа находятся между 10 и 20 и выведете на печать для каждой цифры true или false

for (let i = 0; i <= 30; i++) {
  const result = i >= 10 && i <= 20; // проверка: находится ли число между 10 и 20
  console.log(i + ": " + result);
}
