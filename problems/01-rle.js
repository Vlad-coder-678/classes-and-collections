/**
 * Напишите функцию rle(value) реализующую алгоритм сжатия строки.
 *
 * Пример:
 *
 * rle('AAABC') === '3ABC'
 * rle('AAAaaB') === '3A2aB'
 *
 * @param {string} value
 * @returns {string}
 */
function rle(value) {
  if (!value.length) return "";

  const firstChar = value[0];
  const regexp = new RegExp(`${firstChar}+`);
  const [repeatingLetters] = value.match(regexp);
  const repeatedLettersLength = repeatingLetters.length;
  const restValue = value.replace(regexp, "");

  return `${repeatedLettersLength > 1 ? repeatedLettersLength : ""}${firstChar}${rle(restValue)}`;
}

module.exports = rle;
