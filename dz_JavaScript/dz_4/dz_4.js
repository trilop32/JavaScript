'use strict';
//0. Создайте массив из n случайных чисел и сохраните его в переменной для дальнейшего использования
//1. Функция принимает массив и возвращает его в виде строки (используйте ее для последующего вывода результатов)
function RandomNumbers(n, c) {
    const numbers = Array.from({ length: n }, () => Math.floor(Math.random() * c) + 1);
    return numbers;
}
const RN = RandomNumbers(10, 100);
document.getElementById('zero').textContent = "Ваши числа: " + RN;
//2. Получите и выведите массив, содержащий  только четные элементы из исходного.
function EvenNumbers() {
    const even = RN.filter(number => number % 2 == 0);
    return even;
}
const evens = EvenNumbers();
document.getElementById("chet").textContent = "Чётные числа: " + evens;
//3. Найти и напечатать сумму всех элементов массива.
function SumNumbers() {
    const sum = RN.reduce((left, right) => left + right, 0);
    return sum;
}
const Sum = SumNumbers();
document.getElementById("sum").textContent = "Общая сумма = " + Sum;
//4. Найти и напечатать максимальный элемент исходного массива.
function MaxNumber() {
    const max = Math.max(...RN);
    return max;
}
const Max = MaxNumber();
document.getElementById("max").textContent = "Максимальный элемент массива = " + Max;
//5.Получите и выведите массив, добавив новый элемент в исходный массив по указанному индексу.
//тут не надо писать свою функцию, просто правильно вызовите splice
let index = RandomNumbers(1, 10);
const newnum = RandomNumbers(1, 100);
function NewNumber() {
    const news = [RN.slice(0, index), newnum, RN.slice(index)];
    return news;
}
const newss = NewNumber();
document.getElementById("new").textContent = "Добавлен новый элемент " + newnum + " в позицию " + parseInt(parseInt(index) + 1);
document.getElementById("new2").textContent = newss;
//6. Получите и выведите массив, удалив элемент из исходного массива по указанному индексу.
//тут не надо писать свою функцию, просто правильно вызовите splice
let indexdel = RandomNumbers(1, 10);
let delnum = 0;
function DelNum() {
    delnum = RN.splice(indexdel, 1);
    const del = [RN.slice(0, indexdel), RN.slice(indexdel)];
    return del;
}
const del = DelNum();
document.getElementById("del").textContent = "Удалён элемент " + delnum + " c позиции " + parseInt(parseInt(indexdel) + 1);
document.getElementById("del2").textContent = del;
/////
const Scip = document.getElementById('scip');
const Part1 = document.getElementById('part1');
const Part2 = document.getElementById('part2');
Scip.addEventListener('click', () => {
    Part1.style.display = 'none';
    Part2.style.display = 'block';
});
/////////////
///часть 2///
/////////////
const mas1 = RandomNumbers(10, 100);
const mas2 = RandomNumbers(10, 100);
document.getElementById("mas1").textContent = mas1;
document.getElementById("mas2").textContent = mas2;
//1. Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из двух массивов без повторений.
function FullNum() {
    const combinedSet = new Set([...mas1, ...mas2]);//уник знач
    return Array.from(combinedSet);
}
const Massivs = FullNum();
document.getElementById("masivs").textContent = Massivs;
//2. Функция принимает 2 массива и возвращает новый массив,в котором собраны общие элементы (то есть элементы,
//которые встречаются и в первом и во втором массивах),без повторений.
function FullNumRepeat() {
    const news = new Set(mas1);
    return [...new Set(mas2.filter(num => news.has(num)))];//ищем повторки
}
const Repeat = FullNumRepeat();
document.getElementById("repeat").textContent = Repeat.join(", ");
//Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из первого массива,
//которых нет во втором массиве, без повторений.
function FullNumOne() {
    const set2 = new Set(mas2);
    return [...new Set(mas1.filter(element => !set2.has(element)))];
}
const mas1s = FullNumOne();
document.getElementById("one").textContent = mas1s.join(", ");