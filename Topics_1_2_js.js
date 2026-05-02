/* Данные:
Пользователь 1: Имя — 'Алиса', Правильных ответов — 17
Пользователь 2: Имя — 'Карл', Правильных ответов — 22
Максимально возможное количество правильных ответов — 25
Необходимо выполнить следующие шаги
Объявить переменные для хранения данных пользователей и максимального балла с использованием const
Описать структуру кода с помощью комментариев, разделив логику на блоки.
Использовать console.log() для вывода в консоль:
Заголовка отчета.
Процентного результата каждого пользователя (с помощью математических операций).
Проверки, кто из пользователей набрал больше 20 баллов (вывести в консоль true или false).
Простое приветствие в начале скрипта. */

console.log("Добро пожаловать в систему отчётов!");

const user1Name = "Алиса";
const user1Score = 17;

const user2Name = "Карл";
const user2Score = 22;

const maxScore = 25;

console.log("Отчёт по результатам: ");

const user1Percent = (user1Score / maxScore) * 100;
const user2Percent = (user2Score / maxScore) * 100;

console.log(`${user1Name}: ${user1Percent} %`);
console.log(`${user2Name}: ${user2Percent} %`);

const user1Above20 = user1Score > 20;
const user2Above20 = user2Score > 20; // Проверка

console.log("Больше 20 баллов:");
console.log(`${user1Name}: ${user1Above20}`);
console.log(`${user2Name}: ${user2Above20}`);
