const isEqualDeep = require('../isEqualDeep');

describe('Тестирование задачи "isEqualDeep"', () => {
  test('Базовые случаи', () => {
    expect(isEqualDeep({}, {})).toBe(true);
    expect(isEqualDeep({ a: 1 }, {})).toBe(false);
    expect(isEqualDeep({ a: undefined }, { a: undefined })).toBe(true);
    expect(isEqualDeep({ a: null }, { a: null })).toBe(true);
    expect(isEqualDeep({ a: "" }, { a: "" })).toBe(true);
    expect(isEqualDeep({ a: 1, b: undefined }, { a: 1, b: undefined })).toBe(true);
    expect(isEqualDeep({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } })).toBe(true);
    expect(isEqualDeep({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 2 } })).toBe(false);
  });
});
