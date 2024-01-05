const makePairs = require('../makePairs');

describe('Тестирование задачи "makePairs"', () => {
  test('Базовые случаи', () => {
    expect(makePairs({})).toStrictEqual([]);
    expect(makePairs({ a: 1 })).toStrictEqual([["a", 1]]);
    expect(makePairs({ a: 1, b: 2 })).toStrictEqual([['a', 1], ['b', 2]]);
    expect(makePairs(undefined)).toStrictEqual(undefined);
    expect(makePairs(null)).toStrictEqual(undefined);
    expect(makePairs("")).toStrictEqual(undefined);
    expect(makePairs(NaN)).toStrictEqual(undefined);
  });
});
