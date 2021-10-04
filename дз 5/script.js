let arr = [1, 'string', [3, 4], 5, [6, 7]];

const indexes = [2, 4];

const mass = arr.filter((value, i) => indexes.indexOf(i) > -1)
console.log(mass);


// Завдання 5. Filter

// Заданий масив значень, в ньому можуть бути звичайні елементи і підмасиви. Залиште в ньому тільки підмасиви.

//     let arr = [1, 'string', [3, 4], 5, [6, 7]];

// Результат вивести в консоль.