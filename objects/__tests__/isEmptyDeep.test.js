const isEmptyDeep = require('../isEmptyDeep');

describe('Тестирование задачи "isEmptyDeep"', () => {
  test('Базовые случаи', () => {
    expect(isEmptyDeep({})).toBe(true);
    expect(isEmptyDeep({ a: { b: undefined } })).toBe(true);
    expect(isEmptyDeep({ a: { b: [] } })).toBe(true);
    expect(isEmptyDeep({ a: { b: null } })).toBe(true);
    expect(isEmptyDeep({ a: { b: "" } })).toBe(true);
    expect(isEmptyDeep({ a: { b: {} } })).toBe(true);
    expect(isEmptyDeep({ a: { b: 1 } })).toBe(false);
    expect(isEmptyDeep({ a: { b: 1, c: undefined } })).toBe(false);
  });
});
