'use strict';
////0. Функция возвращает массив из n случайных чисел.
////1. Функция принимает массив и возвращает его в виде строки (используйте ее для последующего вывода результатов)
const numCount = 10;
function RandomNumbers(n) {
    const numbers = [];
    for (let i = 0; i < n; i++) {
        numbers.push(Math.floor(Math.random() * 100) + 1);
    }
    return numbers;
}
const RN = RandomNumbers(numCount);
document.getElementById("zero").textContent = "Ваши числа: " + RN.join(", ");
//////////////////
////2. Функция принимает массив и возвращает новый, содержащий  только четные элементы из исходного
function EvenNumbers() {
    const even = [];
    for (let i = 0; i < RN.length; i++) {
        if (RN[i] % 2 == 0) {
            even.push(RN[i]);
        }
    }
    return even;
}
const evens = EvenNumbers();
document.getElementById("chet").textContent = "Чётные числа: " + evens.join(", ");
/////////////////////////
///3. Функция принимает массив и возвращает сумму всех элементов массива.
function SumNumbers() {
    let sum = 0;
    for (let i = 0; i < RN.length; i++) {
        sum += RN[i];
    }
    return sum;
}
const Sum=SumNumbers();
document.getElementById("sum").textContent = "Общая сумма = " + Sum;