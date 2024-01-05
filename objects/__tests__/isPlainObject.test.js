const isPlainObject = require('../isPlainObject');

describe('Тестирование задачи "isPlainObject"', () => {
  test('Базовые случаи', () => {
    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject({ a: 1 })).toBe(true);
    expect(isPlainObject(undefined)).toBe(false);
    expect(isPlainObject(null)).toBe(false);
    expect(isPlainObject("")).toBe(false);
    expect(isPlainObject(NaN)).toBe(false);
  });
});
