'use strict';
//1. Написать функцию, которая принимает 2 строки и сравнивает их длину. Функция возвращает 1, если в первой строке больше символов,
//чем во второй; -1 – если во второй больше символов, чем в первой; или 0 – если строки одинаковой длины.
function Сomparison(str1, str2) {
    if (str1.length > str2.length) {
        return 1;
    } else if (str1.length < str2.length) {
        return -1;
    } else {
        return 0;
    }
}
function RandomNumbers(n, c) {
    const numbers = [];
    for (let i = 0; i < n; i++) {
        numbers.push(Math.floor(Math.random() * c) + 1);
    }
    return numbers;
}
function generateRandomString(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
const randomString1 = generateRandomString(RandomNumbers(1, 20));
const randomString2 = generateRandomString(RandomNumbers(1, 20));
const result = Сomparison(randomString1, randomString2);
document.getElementById("str1").textContent = "Строка первая: " + randomString1;
document.getElementById("str2").textContent = "Строка вторая: " + randomString2;
document.getElementById("z1").textContent = "1. " + result;
///2. Написать функцию, которая переводит в верхний регистр первый символ переданной строки
function UpString() {
    return randomString1.charAt(0).toUpperCase() + randomString1.slice(1);
}
const results = UpString();
document.getElementById("z2").textContent = "2. " + results;
//3. Написать функцию, которая считает количество гласных букв в переданной строке.
function Vowels() {
    const characters = 'aeiouy';
    let gg = 0;
    for (let i = 0; i < characters.length; i++) {
        for (let j = 0; j < randomString2.length; j++) {
            if (characters[i] == randomString2[j]) {
                gg += 1;
            }
        }
    }
    return gg;
}
const vowels = Vowels();
document.getElementById("z3").textContent = "3. В строке " + randomString2 + " " + vowels + " гласных";
//4. Написать функцию для проверки спама в переданной строке. Функция возвращает true, если строка содержит спам. Спамом считать
//следующие слова: 100% бесплатно,увеличение продаж, только сегодня, не удаляйте, ххх. Функция должна быть нечувствительна к регистру

function CheckSpam(str) {
    const spam = ["100% бесплатно", "увеличение продаж", "только сегодня", "не удаляйте", "хxх"];
    str = str.toLowerCase();
    for (const word of spam) {
        if (str.includes(word)) {
            return true;
        }
    }
    return false;
}
const spam = ["100% бесплатно", "увеличение продаж", "только сегодня", "не удаляйте", "хxх"];
const RN = RandomNumbers(1, 8);
let str = randomString1 + spam[RN - 1];
const check = CheckSpam(str);
document.getElementById("z4").textContent = "4. Cтрока: " + str + " " + check;
//5. Написать функцию сокращения строки. Функция принимает строку и ее максимальную длину. Если длина строки больше,
// чем максимальная, то необходимо отбросить лишние символы, добавив вместо них троеточие.
// Например: truncate(“Hello, world!”, 8) должна вернуть “Hello...”.
function Сontraction(max, str) {
    if (str.length <= max) {
        return str;
    }
    else {
        return str.substring(0, max) + "...";
    }
}
const RN2 = RandomNumbers(1, 20);
const cont = Сontraction(RN2, randomString2);
document.getElementById("z5").textContent = "5. Изначальная строка: " + randomString2 + " максимальная длина " + RN2;
document.getElementById("z5_2").textContent = "Результат " + cont;
//6. Написать функцию, которая проверяет, является ли переданная строка палиндромом
function Palindrom(str) {
    const cleanStr = str.toLowerCase();
    return cleanStr == cleanStr.split('').reverse().join('');
}
const palindrom = Palindrom(randomString2);
document.getElementById("z6").textContent = "6. Строка: " + randomString2 + " " + palindrom + " палиндром";
//7. Написать функцию, которая считает количество слов в предложении
function Word(str) {
    str = str.trim();
    const words = str.split(/\s+/);
    return words.length;
}
const sentence = "Это предложение с новым словом " + randomString1;
const wordCount = Word(sentence);
document.getElementById("z7").textContent = "7. В строке: " + sentence + " " + wordCount + " слов";
//8. Написать функцию, которая возвращает самое длинное слово из предложения.
function longestWord(sentence) {
    const words = sentence.split(' ');
    let longestWord = "";
    let longestLength = 0;
    for (const word of words) {
        if (word.length > longestLength) {
            longestWord = word;
            longestLength = word.length;
        }
    }
    return longestWord;
}
const longest = longestWord(sentence);
document.getElementById("z8").textContent = "8. В строке: " + sentence + " самое длинное слово = " + longest;
//9. Написать функцию, которая считает среднюю длину слова в предложении.
function AverageWordLength(str) {
    const words = str.split(' ');
    let s = 0;
    for (const word of words) {
        s += word.length;
    }
    return (s / words.length).toFixed(1);
}
const average = AverageWordLength(sentence);
document.getElementById("z9").textContent = "9. В строке: " + sentence + " средняя длина слова = " + average;
//10. Написать функцию, которая принимает строку и символ и выводит индексы, по которым находится этот символ в строке.
//Также вывести, сколько всего раз встречается этот символ в строке.
function findSymbolIndexes(str, symbol) {
    const indexes = [];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == symbol) {
            indexes.push(i);
            count++;
        }
    }
    if (count == 0) {
        indexes[0] = "нету";
        count="вообще нету";
    }
    document.getElementById("z10").textContent = "10. В строке: " + str;
    document.getElementById("z10_1").textContent = "Индексы символа " + symbol + " : " + indexes.join(', ');
    document.getElementById("z10_2").textContent = "Количество символов " + symbol + " : " + count;
}
findSymbolIndexes(randomString2, generateRandomString(1));