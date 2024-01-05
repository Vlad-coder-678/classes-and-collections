/**
 * Функция, которая поверхностно находит пересечения объектов и возвращает объект пересечений.
 * Пример: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }
 * @param {Object<string | number>} firstObject - объект с примитивными значениями
 * @param {Object<string | number>} secondObject - объект с примитивными значениями
 *
 * @returns {Object}
 */
const intersection = (firstObject, secondObject) => {
  if (!firstObject || !secondObject) return {};

  return Object
    .keys(firstObject)
    .reduce((res, key) => (
      {
        ...res,
        ...((typeof secondObject[key] !== "undefined" && firstObject[key] === secondObject[key]) ? { [key]: firstObject[key] } : {}),
      }),
      {},
    );
};

module.exports = intersection;
