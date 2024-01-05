/**
 * Функция, которая вызывает метод массива на заданный путь объекта.
 * Пример: ({ a: { b: [1, 2, 3] } }, 'a.b', splice, [1, 2]) => [2, 3]
 * @param {Object} object
 * @param {String} path - путь в объекте
 * @param {String} func - метод массива для исполнения
 * @param {Array} [args] - список аргументов
 * @returns {any}
 */
const invoke = (object, path, func, args) => {
  const array = path.split(".").reduce((result, path) => result[path], object);
  return array[func](...args);
};

module.exports = invoke;
