let arr = [
    { name: 'Ivan', country: 'Ukraine' },
    { name: 'Petro', country: 'Ukraine' },
    { name: 'Miguel', country: 'Cuba' }
];

const check = arr.some(value => value.country === 'Cuba')
console.log(check);


// Завдання 4. Some

// Заданий масив об’єктів. Перевірте, чи всі хоч один ключ country має значення 'Cuba'.

// let arr = [{name: 'Ivan', country: 'Ukraine'},

//            {name: 'Petro', country: 'Ukraine'},

//            {name: 'Miguel', country: 'Cuba'}

//           ]

// Результат вивести в консоль.