/**
 * Функция, которая делает глубокую проверку на пустоту объекта.
 * Пустые значения: '', null, NaN, undefined, [], {}
 * Пример: ({}) => true,
 * ({ a: { b: undefined } }) => true,
 * ({ a: { b: [] } }) => true
 * @param {Object} object - любой объект
 * @returns {boolean}
 */
const isEmptyDeep = (object) => {
  if (!object) return true;
  return !Object.keys(object).some((key) => (typeof object[key] !== "object") ? !!object[key] : !isEmptyDeep(object[key]));
};

module.exports = isEmptyDeep;
