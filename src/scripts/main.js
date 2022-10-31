'use strict';
// TASK!!
// Напишіть функцію, яка прийматиме масив arr і сортуватиме його в порядку за спаданням

// let arr = [5, 2, 1, -10, 8];

// Очікуваний результат:

// alert(arr); // 8, 5, 2, 1, -10

function getSortList(arr) {
    console.log(arr.sort((a, b) => (a - b)));
    return arr.sort((a, b) => (a - b));
}

getSortList([-34, 8, 19, -5, 1, 84, -99, 56]);