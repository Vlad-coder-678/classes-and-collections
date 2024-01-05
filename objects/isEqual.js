/**
 * Функция, которая поверхностно сравнивает два объекта.
 * Пример: True если объекты идентичны, false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
 * @param {Object<string | number>} firstObject - объект с примитивами
 * @param {Object<string | number>} secondObject - объект с примитивами
 * @returns {boolean}
 */
const isEqual = (firstObject, secondObject) => {
  const getKeyCount = (object) => Object.keys(object).length;
  if (getKeyCount(firstObject) !== getKeyCount(secondObject)) return false;

  return Object.entries(firstObject).every(([key, value]) => secondObject.hasOwnProperty(key) && secondObject[key] === value);
};

module.exports = isEqual;
