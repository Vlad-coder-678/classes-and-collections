const without = require('../without');

describe('Тестирование задачи "without"', () => {
  test('Базовые случаи', () => {
    expect(without({ a: 1, b: 2, c: 3 }, 'a', 'b')).toStrictEqual({ c: 3 });
    expect(without({ a: 1, b: 2, c: 3 }, 'b', 'c')).toStrictEqual({ a: 1 });
    expect(without({ a: 1 }, 'a')).toStrictEqual({});
  });
});
