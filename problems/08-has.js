/**
 * Напишите функцию has(path, object) возвращающую true, если в объекте есть свойство
 * описанное массивом path, иначе false
 *
 * Пример:
 *
 * has(['a'], { a: 1 }) === true
 * has(['b'], { a: 1 }) === false
 * has(['o', 'a'], { o: { a: 2 } }) === true
 *
 * @param {string[]} path
 * @param {object} object
 * @returns {boolean}
 */
function has(path, object) {
  if (!path || !Array.isArray(path) || !object || typeof object !== "object" || Object.keys(object).length === 0) return false;

  const [firstKey, ...restKeys] = path;
  return object.hasOwnProperty(firstKey) && (restKeys.length > 0 ? has(restKeys, object[firstKey]) : true);
}

module.exports = has;
