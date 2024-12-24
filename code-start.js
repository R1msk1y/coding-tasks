// 2. Создать массив который содержит только уникальные значения
// ['kiwi', 'apple', 'orange']

//Решение один
const myFruits = ["kiwi", "apple", "kiwi", "orange", "kiwi", "apple"];
function getUniqueFruits(list) {
  const unique = {};
  list.forEach((f) => {
    if (!unique[f]) {
      unique[f] = true;
    }
  });
  return Object.keys(unique);
}
// console.log(getUniqueFruits(myFruits));

//Решение два
const setFruits = new Set(myFruits);
const arrayWithFruits = Array.from(setFruits);
console.log(arrayWithFruits);
