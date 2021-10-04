let arr = [
    { name: 'Ivan', country: 'Ukraine' },
    { name: 'Petro', country: 'Ukraine' },
    { name: 'Miguel', country: 'Cuba' }
];

const check = arr.every(value => value.country === 'Ukraine')
console.log(check);

// Завдання 3. Every

// Заданий масив об’єктів. Перевірте, чи всі ключі country мають значення 'Ukraine'.

// let arr = [{name: 'Ivan', country: 'Ukraine'},

//            {name: 'Petro', country: 'Ukraine'},

//            {name: 'Miguel', country: 'Cuba'}

//           ]

// Результат вивести в консоль.