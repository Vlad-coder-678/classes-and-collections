/**
 * Функция, которая возвращает новый объект без указанных значений.
 * Пример: ({ a: 1, b: 2 }, 'b') => { a: 1 }
 * @param {Object} object - любой объект
 * @param {?} args - список значений для удаления
 * @returns {Object} - новый объект без удаленных значений
 */
const without = (object, ...args) => {
  args.map(arg => delete object[arg]);
  return object;
};

module.exports = without;
