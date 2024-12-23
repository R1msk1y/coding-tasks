// 1. Сколько раз каждый элемент встречается в массиве:
// {kiwi: 3, apple: 2, orange: 1}

// 2. Создать массив который содержит только уникальные значения
// ['kiwi', 'apple', 'orange']

const myFruits = ["kiwi", "apple", "kiwi", "orange", "kiwi", "apple"];

// 3. Создать функцию, которая сгруппирует студентов по возрасту.
// На выходе получить объект, где ключ - возраст,
// а значение - массив студентов
// {
//   '20': [{ name: 'alex', age: 20 }, { name: 'masha', age: 20 }],
//   '24': [{ name: 'mike', age: 24 }],
//   '18': [{ name: 'stas', age: 18 }],
// }
const students = [
  { name: "alex", age: 20 },
  { name: "mike", age: 24 },
  { name: "masha", age: 20 },
  { name: "stas", age: 18 },
];

// 4. Получить единый массив из любимых пицц каждого друга
// ['cheese', 'pepperoni', 'meat', 'fish']
const friends = [
  { name: "alex", pizzas: ["cheese", "pepperoni"] },
  { name: "mike", pizzas: ["salami", "margarita"] },
  { name: "stas", pizzas: ["meat"] },
  { name: "anna", pizzas: ["fish"] },
];
const reduceResult = friends.reduce((prevValue, curValue) => {
  return [...prevValue, ...curValue.pizzas];
}, []);
console.log(reduceResult);

// 6. Записать строку (символы строки) в обратном порядке (2 способа)
// pizza => azzip
const myStr = "pizza";

const anyArray = [60, 20, 100, 1, 2, 3];
