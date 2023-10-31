Определение массива:
const items =[];
const animals = ['cats', 'dogs','birds'];


const animals = ['cats', 'dogs', 'birds'];
animals[0]; // 'cats'
animals[1]; // 'dogs'
// Последний индекс в массиве всегда меньше размера массива на единицу.
// В этом массиве три элемента, но последний индекс равен двум
animals[2]; // 'birds'

//Узнать размер массива можно с помощью свойства length:
const animals = ['cats', 'dogs', 'birds'];
animals.length; // 3

let i = 1;
let j = 1;
const animals = ['cats', 'dogs', 'birds'];
animals[i + j]; // 'birds'

//Чтобы узнать последний элемент массива используем:
const animals = ['cats', 'dogs', 'birds'];
animals[animals.length - 1]; // 'birds'

//С помощью вызова функции:
const getIndexOfSecondElement = () => 1;
const animals = ['cats', 'dogs', 'birds'];
animals[getIndexOfSecondElement()]; // 'dogs'

//Способ работы с индексами методом - at() , помогающий указывать отрицательные индексы , это позволяет брать элементы с конца без вычисления индексов.
const animals = ['cats', 'dogs', 'birds'];
animals.at(0); // 'cats'
animals.at(1); // 'dogs'
// Первый с конца
animals.at(-1); // 'birds'
// Второй с конца
animals.at(-2); // 'dogs'
