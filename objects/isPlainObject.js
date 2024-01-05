/**
 * Функция, которая проверяет, является ли элемент именно простым объектом, а не массивом, null и т.п.
 * Пример: true если это объект, false в противном случае. ({ a: 1 }) => true, ([1, 2, 3]) => false
 * @param element - элемент для проверки
 * @returns {boolean}
 */
const isPlainObject = (element) => {
  return typeof element === "object" && !Array.isArray(element) && element !== null;
};

module.exports = isPlainObject;
