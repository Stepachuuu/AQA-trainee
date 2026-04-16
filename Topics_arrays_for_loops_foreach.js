// Task #1.

const testerPositions = [
  "Quality Assurance Engineer",
  "Software Tester",
  "Test Automation Engineer",
  "Quality Analyst",
  "QA Tester",
  "Test Engineer",
  "Quality Control Analyst",
];

testerPositions.push("SDET", "Lead SDET"); // добавляем в конец массива с помощью метода push()

console.log(testerPositions);

/* Task #4. Задача с интервью*
У вас есть массив со скобками. Количество элементов и последовательность может быть разной.
Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).
Решение должно работать для всех массивов внизу.

Первая последовательность: [ '(', ')', '(', ')', ')']
Вторая последовательность:  ['(', ')', '(', ')', '{', '(', '}', ')', 2, 'a']
Еще: ['(', ')', '(', '(', '(', ')', '}', '(', ')', ')'] */

function check(arr) {
  let skob = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") skob++;
    if (arr[i] === ")") skob--;

    if (skob < 0) return false; // закрывающая раньше открывающей
  }

  return skob === 0;
}

console.log(check(["(", ")", "(", ")", ")"])); // false
console.log(check(["(", ")", "(", ")", "{", "(", "}", ")", 2, "a"])); // true
console.log(check(["(", ")", "(", "(", "(", ")", "}", "(", ")", ")"])); // false

// Task #5. Найти самое маленькое число из массива [4, 81, 3, -12, 99, 14].

let arr1 = [4, 81, 3, -12, 99, 14];

let min = arr1[0];

for (let i = 1; i < arr1.length; i++) {
  if (arr1[i] < min) {
    min = arr1[i];
  }
}

console.log(min); // -12

//Task #6.Найти самое большое число из массива [4, 81, 3, -12, 99, 14].

let arr2 = [4, 81, 3, -12, 99, 14];

let max = arr2[0];

for (let i = 1; i < arr2.length; i++) {
  if (arr2[i] > max) {
    max = arr2[i];
  }
}

console.log(max); // 99

//Task #7. Найти сумму всех элементов массива [[1, 2], [3, 4, 5], [6, 7, 8], 9, [10], [0, 11], "Hello"]

let arr3 = [[1, 2], [3, 4, 5], [6, 7, 8], 9, [10], [0, 11], "Hello"];

let sum = 0;

for (let i = 0; i < arr3.length; i++) {
  if (Array.isArray(arr3[i])) {
    for (let j = 0; j < arr3[i].length; j++) {
      if (typeof arr3[i][j] === "number") {
        sum += arr3[i][j];
      }
    }
  } else {
    if (typeof arr3[i] === "number") {
      sum += arr3[i];
    }
  }
}

console.log(sum); // 66

//Task #8. При помощи цикла for выведите чётные числа от 2 до 10.

for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

/* Task #9. Переделайте задачку с улиткой используя циклы.
Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает вверх на 3 метра, а каждую ночь съезжает вниз на 2 метра. 
За сколько дней она доползет до вершины стены. */

let height = 5;
let current = 0;
let days = 0;

while (current < height) {
  days++;
  current += 3;
  if (current < height) {
    current -= 2;
  }
}

console.log(days); // 3

// Task #10. Нарисуйте ромб

let n = 3; // половина ромба

// верхняя часть (включая середину)
for (let i = 1; i <= n; i++) {
  let line = "";

  // пробелы
  for (let j = 1; j <= n - i; j++) {
    line += " ";
  }

  // звёзды
  for (let k = 1; k <= 2 * i - 1; k++) {
    line += "*";
  }

  console.log(line);
}

// нижняя часть
for (let i = n - 1; i >= 1; i--) {
  let line = "";

  // пробелы
  for (let j = 1; j <= n - i; j++) {
    line += " ";
  }

  // звёзды
  for (let k = 1; k <= 2 * i - 1; k++) {
    line += "*";
  }

  console.log(line);
}

//Task #11.  Нарисуйте прямоугольный треугольник

let rows = 5;

for (let i = 1; i <= rows; i++) {
  let line = "";

  for (let j = 1; j <= i * 2 - 1; j++) {
    line += "* ";
  }

  console.log(line.trim());
}

// Task #12. Нарисуйте треугольник с цифрами - лево:

for (let i = 9; i >= 0; i--) {
  let line = "";

  for (let j = 0; j <= i; j++) {
    line += j + " ";
  }

  console.log(line.trim());
}

// Task #13. Нарисуйте треугольник с цифрами - право

for (let i = 9; i >= 0; i--) {
  let line = "";

  for (let s = 0; s < 9 - i; s++) {
    line += "  ";
  }

  for (let j = 0; j <= i; j++) {
    line += j + " ";
  }

  console.log(line.trimEnd());
}
