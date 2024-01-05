/**
 * Функция, которая возвращает вложенный массив вида `[[key, value], [key, value]]`.
 * Пример: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
 * @param {Object} object - любой объект для трансформации
 * @returns {Array} - вложенный массив
 */
const makePairs = (object) => {
  if (!object) return;

  return Object.entries(object);
};

module.exports = makePairs;
