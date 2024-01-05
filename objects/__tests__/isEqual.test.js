const isEqual = require('../isEqual');

describe('Тестирование задачи "isEqual"', () => {
  test('Базовые случаи', () => {
    expect(isEqual({}, {})).toBe(true);
    expect(isEqual({ a: 1 }, {})).toBe(false);
    expect(isEqual({ a: undefined }, { a: undefined })).toBe(true);
    expect(isEqual({ a: null }, { a: null })).toBe(true);
    expect(isEqual({ a: "" }, { a: "" })).toBe(true);
    expect(isEqual({ a: 1, b: undefined }, { a: 1, b: undefined })).toBe(true);
    expect(isEqual({ a: 1, b: 1 }, { a: 1, b: 1 })).toBe(true);
    expect(isEqual({ a: 1, b: 1 }, { a: 1, b: 2 })).toBe(false);
  });
});
