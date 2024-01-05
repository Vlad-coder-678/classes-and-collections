/**
 * Функция, которая делает глубокое сравнение объектов.
 * Пример: True если объекты идентичны ({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true
 * @param {Object} firstObject - Объект с любыми значениями
 * @param {Object} secondObject - Объект с любыми значениями
 * @returns {boolean}
 */
const isEqualDeep = (firstObject, secondObject) => {
  if (firstObject === secondObject) return true;

  const getKeyCount = (object) => Object.keys(object).length;
  if (getKeyCount(firstObject) !== getKeyCount(secondObject)) return false;

  return Object.entries(firstObject).every(([key, value]) => {
    if (!secondObject.hasOwnProperty(key)) return false;
    if (typeof value !== "object") return secondObject[key] === value;
    return isEqualDeep(value, secondObject[key]);
  });
};

module.exports = isEqualDeep;
