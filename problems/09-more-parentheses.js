/**
 * Ранее мы уже решали задачу валидации последовательности скобок в строке.
 *
 * На этот раз напишите функцию parentheses(value) валидирующую строку с несколькими типами скобок.
 *
 * Пример:
 *
 * parentheses('<>') === true
 * parentheses('<}') === false
 *
 * @param {string} value – строка из набора символов (, ), {, }, <, >.
 * @returns {boolean}
 */
function parentheses(value) {
  if (value === "()" || value === "{}" || value === "<>") return true;

  const regexp = /\(\)|\{\}|\<\>/;
  if (!value || (value.length > 0 && !regexp.test(value))) return false;

  return parentheses(value.replace(regexp, ""));
}

module.exports = parentheses;
