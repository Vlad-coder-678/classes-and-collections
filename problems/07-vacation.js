/**
 * Лена планирует свой двухнедельный отпуск.
 *
 * Напишите функцию vacation(date) вычисляющую день следующий за отпуском Лены
 *
 * Примечание: вместо ручного подсчета используй класс Date и его методы
 *
 * Пример:
 *
 * vacation('01.01.2020') === '15.01.2020'
 * vacation('27.01.2020') === '10.02.2020'
 *
 * @param {string} date
 * @returns {string}
 */
function vacation(date) {
  const vacationTime = 14;
  const [d, m, y] = date.split(".");
  const startDate = new Date(`${m}.${d}.${y}Z`);
  const endDate = new Date(startDate.setDate(startDate.getUTCDate() + vacationTime));
  return endDate.toLocaleDateString();
}

module.exports = vacation;
