'use strict';
////0. Функция возвращает массив из n случайных чисел.
////1. Функция принимает массив и возвращает его в виде строки (используйте ее для последующего вывода результатов)
function RandomNumbers(n, c) {
    const numbers = [];
    for (let i = 0; i < n; i++) {
        numbers.push(Math.floor(Math.random() * c) + 1);
    }
    return numbers;
}
const RN = RandomNumbers(10, 100);
document.getElementById("zero").textContent = "Ваши числа: " + RN.join(", ");
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
///3. Функция принимает массив и возвращает сумму всех элементов массива.
function SumNumbers() {
    let sum = 0;
    for (let i = 0; i < RN.length; i++) {
        sum += RN[i];
    }
    return sum;
}
const Sum = SumNumbers();
document.getElementById("sum").textContent = "Общая сумма = " + Sum;
///3*  Функция принимает массив и возвращает сумму всех элементов массива (если в массиве встретилось не число - оно не учитывается)
function SumNumbers2() {
    let sumeven = 0;
    for (let i = 0; i < RN.length; i++) {
        if (RN[i] > 9) {
            sumeven += RN[i];
        }
    }
    return sumeven;
}
const Sum2 = SumNumbers2();
document.getElementById("sum2").textContent = "\n Общая сумма чисел = " + Sum2;
////4. Функция принимает массив и возвращает его максимальный элемент.
function MaxNumber() {
    let max = RN[0];
    for (let i = 1; i < RN.length; i++) {
        if (RN[i] > max) {
            max = RN[i];
        }
    }
    return max;
}
const Max = MaxNumber();
document.getElementById("max").textContent = "Максимальный элемент массива = " + Max;
/////5. Функция добавления нового элемента в массив по указанному индексу.
////функция имеет три параметра: исходный массив, индекс, и новый элемент, и возвращает новый массив с результатом вставки.
let index = RandomNumbers(1, 10);
const newnum = RandomNumbers(1, 100);
function NewNumber() {
    const news = [];
    for (let i = 0; i < RN.length; i++) {
        if (i == index) {
            news.push(newnum);
        }
        news.push(RN[i]);
    }
    return news;
}
const news = NewNumber();
document.getElementById("new").textContent = "Добавлен новый элемент " + newnum + " в позицию " + parseInt(parseInt(index) + 1);
document.getElementById("new2").textContent = news.join(", ");
///6. Функция удаления элемента из массива по указанному индексу.Функция имеет два параметра:
///исходный массив, индекс,и возвращает новый массив без элемента с указанным индексом.
let indexdel = RandomNumbers(1, 10);
let delnum = 0;
function DelNum() {
    const del = [];
    for (let i = 0; i < RN.length; i++) {
        if (i == indexdel) {
            delnum = RN[i];
            i += 1;
        }
        del.push(RN[i]);
    }
    return del;
}
const del = DelNum();
document.getElementById("del").textContent = "Удалён элемент " + delnum + " c позиции " + parseInt(parseInt(indexdel) + 1);
document.getElementById("del2").textContent = del.join(", ");
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
document.getElementById("mas1").textContent = mas1.join(", ");
document.getElementById("mas2").textContent = mas2.join(", ");
//1. Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из двух массивов без повторений.
function FullNum() {
    let news = [];
    for (let i = 0; i < mas1.length; i++) {
        let gg = false;
        for (let j = 0; j < news.length; j++) {
            if (mas1[i] == news[j]) {
                gg = true;
            }
        }
        if (!gg) {
            news.push(mas1[i]);
        }
    }
    for (let i = 0; i < mas2.length; i++) {
        let gg = false;
        for (let j = 0; j < news.length; j++) {
            if (mas2[i] == news[j]) {
                gg = true;
            }
        }
        if (!gg) {
            news.push(mas2[i]);
        }
    }
    return news;
}
const Massivs = FullNum();
document.getElementById("masivs").textContent = Massivs.join(", ");
///2. Функция принимает 2 массива и возвращает новый массив,в котором собраны общие элементы (то есть элементы,
///которые встречаются и в первом и во втором массивах), без повторений
function FullNumRepeat() {
    const news = [];
    for (let i = 0; i < mas1.length; i++) {
        for (let j = 0; j < mas2.length; j++) {
            if (mas1[i] == mas2[j]) {
                let gg = false;
                for (let k = 0; k < news.length; k++) {
                    if (news[k] == mas1[i]) {
                        gg = true;
                    }
                }
                if (!gg) {
                    news.push(mas1[i]);
                }
            }
        }
    }
    return news;
}
const Repeat = FullNumRepeat();
document.getElementById("repeat").textContent = Repeat.join(", ");
///3. Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из первого массива,
/// которых нет во втором массиве, без повторений.
function FullNumOne() {
    const news = [];
    for (let i = 0; i < mas1.length; i++) {
        let gg = false;
        for (let j = 0; j < mas2.length; j++) {
            if (mas1[i] == mas2[j]) {
                gg = true;
            }
        }
        if (!gg) {
            let gp = false;
            for (let k = 0; k < news.length; k++) {
                if (news[k] == mas1[i]) {
                    gp = true;
                }
            }
            if (!gp) {
                news.push(mas1[i]);
            }
        }
    }
    return news;
}
const mas1s = FullNumOne();
document.getElementById("one").textContent = mas1s.join(", ");
