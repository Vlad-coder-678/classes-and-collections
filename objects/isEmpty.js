/**
 * Функция, которая делает поверхностную проверку объекта на пустоту.
 * Пустые значения: '', null, NaN, undefined
 *
 * Пример: ({}) => true,
 * ({ a: undefined }) => true,
 * ({ a: 1 }) => false
 *
 * @param {Object} object - объект с примитивами
 * @returns {boolean}
 */
const isEmpty = (object) => {
  return !Object.keys(object).some(key => !!object[key]);
};

module.exports = isEmpty;
