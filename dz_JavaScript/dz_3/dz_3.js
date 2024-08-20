'use strict';
////0. Функция возвращает массив из n случайных чисел.
function generateRandomNumbers(n) {
    const numbers = [];
    for (let i = 0; i < n; i++) {
      numbers.push(Math.floor(Math.random(),100) + 1); // Генерация случайного числа от 1 до 100
    }
    return numbers;
  }
  
  const numCount = 5; // Количество случайных чисел
  const randomNumbers = generateRandomNumbers(numCount);
  
  const outputParagraph = document.createElement("zero");
  outputParagraph.textContent = "Случайные числа: " + randomNumbers.join(", ");
  document.body.appendChild(outputParagraph);
//////////////////