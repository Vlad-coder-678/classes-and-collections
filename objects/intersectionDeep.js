/**
 * Функция, которая глубоко находит пересечения объектов и возвращает объект пересечений.
 * Пример: ({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }) => { b: { c: 3 } }
 * @param {Object} firstObject - объект любых значений
 * @param {Object} secondObject - объект любых значений
 * @returns {Object}
 */
const intersectionDeep = (firstObject, secondObject) => {
  if (!firstObject || !secondObject) return {};

  return Object
    .keys(firstObject)
    .reduce((res, key) => {
      if (typeof secondObject[key] === "undefined") return res;
      if (firstObject[key] === secondObject[key]) return ({ ...res, [key]: firstObject[key] });
      return ({ ...res, [key]: intersectionDeep(firstObject[key], secondObject[key]) });
    }, {});
};

module.exports = intersectionDeep;
