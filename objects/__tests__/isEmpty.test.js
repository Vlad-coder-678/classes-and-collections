const isEmpty = require('../isEmpty');

describe('Тестирование задачи "isEmpty"', () => {
test('Базовые случаи', () => {
    expect(isEmpty({})).toBe(true);
    expect(isEmpty({ a: 1 })).toBe(false);
    expect(isEmpty({ a: undefined })).toBe(true);
    expect(isEmpty({ a: NaN })).toBe(true);
    expect(isEmpty({ a: null })).toBe(true);
    expect(isEmpty({ a: "" })).toBe(true);
    expect(isEmpty({ a: 1, b: undefined })).toBe(false);
  });
});
