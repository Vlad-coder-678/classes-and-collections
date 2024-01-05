/**
 * Hex и RGB - текстовые форматы для представления цвета в коде.
 *
 * Напишите функцию hexToRgb(color) конвертирующую цвет закодированный в формате HEX
 * в RGB кодированную строку.
 *
 * Пример:
 *
 * hexToRgb('#000000') === 'rgb(0, 0, 0)'
 * hexToRgb('#fff') === 'rgb(255, 255, 255)'
 * hexToRgb('#800080') === 'rgb(128, 0, 128)'
 *
 * @param {string} color
 * @returns {string}
 */
function hexToRgb(color) {
  const shortHexColorNameLength = 4;
  const shortToLong = value => value.split("").map(item => `${item}${item}`).join("");

  const isShortHex = color.length === shortHexColorNameLength;
  const formattedHexColor = color.replace("#", "").toLowerCase();
  const [red, green, blue] = (isShortHex ? shortToLong(formattedHexColor) : formattedHexColor).match(/.{2}/g).map(hex => parseInt(hex, 16));
  return `rgb(${red}, ${green}, ${blue})`;
}

module.exports = hexToRgb;
