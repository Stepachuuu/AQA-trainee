// 1. Нарисуйте треугольник с цифрами - вниз

let i = 0; // Номер строки

while (i <= 9) {
  let line = "";

  let spaces = 0;
  while (spaces < i) {
    // Добавляем пробелы (сдвиг)
    line += "  "; // Два пробела (для выравнивая)
    spaces++;
  }

  let num = 9 - i;
  while (num >= 0) {
    // Убывающие числа
    line += num + " ";
    num--;
  }

  num = 1;
  while (num <= 9 - i) {
    line += num + " "; // Возрастающие числа
    num++;
  }

  console.log(line);
  i++;
}

// 2. Нарисуйте ромб из цифр (будьте внимательны!)

let a = 1;

// Upper
while (a <= 10) {
  let line = "";

  // 1. Пробелы
  let spaces = 10 - a;
  let s = 0;
  while (s < spaces) {
    line += " ";
    s++;
  }

  // 2. Возрастающие числа
  let num = 1;
  while (num <= a) {
    if (a === 10 && num === 10) {
      line += "0";
    } else {
      line += num;
    }
    num++;
  }

  // 3. Убывающие числа
  num = a - 1;
  while (num >= 1) {
    if (a === 10 && num === 10) {
      line += "0";
    } else {
      line += num;
    }
    num--;
  }

  console.log(line);
  a++;
}

// Lower
a = 9;

while (a >= 1) {
  let line = "";

  // пробелы
  let spaces = 10 - a;
  let s = 0;
  while (s < spaces) {
    line += " ";
    s++;
  }

  // вверх
  let num = 1;
  while (num <= a) {
    line += num;
    num++;
  }

  // вниз
  num = a - 1;
  while (num >= 1) {
    line += num;
    num--;
  }

  console.log(line);
  a--;
}

// 3. Нарисуйте горизонтальный треугольник из цифр

let k = 1;
let num = 1; // общий счётчик

while (k <= 5) {
  let line = "";

  let count = 1;
  while (count <= k) {
    line += num + " ";
    num++;
    count++;
  }

  console.log(line);
  k++;
}

// 4. Нарисуйте вертикальный треугольник из цифр

let n = 5;

let start = []; // 1. Находим старт каждого столбца
let num1 = 1;
let col = 0;

while (col < n) {
  start[col] = num1;
  num1 += n - col;
  col++;
}

let row = 0;

while (row < n) {
  // 2. Рисуем строки
  let line = "";

  let c = 0;
  while (c <= row) {
    line += start[c] + " ";
    start[c]++; // сдвигаемся вниз по столбцу
    c++;
  }

  console.log(line);
  row++;
}

/* 5. Креативное задание 1*

Имеется зашифрованное предложение 

“Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr”

Мы знаем, что оно означает “You are the best QA ever”.
Нам нужно придумать программу дешифратор. */

let str =
  "Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr";
let result = "";

let l = 0;

while (l < str.length) {
  if (str[l] === "b" && str[l + 1] === "r") {
    // проверяем: если встретили "br"
    l += 2; // пропускаем "br"
  } else {
    result += str[l];
    l++;
  }
}

console.log(result);

/* Креативное задание 2* (посложнее)

Придумайте свой собственный шифр, а также программу, которая будет шифровать и затем дешифровщик к нему. */

// Encrypt

function encrypt(str, shift) {
  let result = "";
  let p = 0;

  while (p < str.length) {
    let char = str[p];

    // если это буква
    if (char >= "a" && char <= "z") {
      let code = char.charCodeAt(0) - 97; // a = 0
      code = (code + shift) % 26;
      result += String.fromCharCode(code + 97);
    } else if (char >= "A" && char <= "Z") {
      let code = char.charCodeAt(0) - 65; // A = 0
      code = (code + shift) % 26;
      result += String.fromCharCode(code + 65);
    } else {
      // пробелы и символы не трогаем
      result += char;
    }

    p++;
  }

  return result;
}

// Decrypt

function decrypt(str, shift) {
  let result = "";
  let i = 0;

  while (i < str.length) {
    let char = str[i];

    if (char >= "a" && char <= "z") {
      let code = char.charCodeAt(0) - 97;
      code = (code - shift + 26) % 26;
      result += String.fromCharCode(code + 97);
    } else if (char >= "A" && char <= "Z") {
      let code = char.charCodeAt(0) - 65;
      code = (code - shift + 26) % 26;
      result += String.fromCharCode(code + 65);
    } else {
      result += char;
    }

    i++;
  }

  return result;
}

// Example:

let text = "You are the best QA ever";

let encoded = encrypt(text, 3);
console.log("Зашифровано:", encoded);

let decoded = decrypt(encoded, 3);
console.log("Расшифровано:", decoded);
