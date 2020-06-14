const { sum, binary_search } = require('./math')
const { getRandArray, getRand } = require('../utils/array.js')

it('check if 1 + 2 eq 3', () => {
  expect(sum(1, 2)).toBe(3);
});

for (let i = 0; i < 20; i++) {
  const arr = getRandArray(200);
  it(`binary search on array ${arr}`, () => {
    arr.forEach((el, index) => {
      expect(binary_search(arr, el)).toBe(index);
    });
  });
}