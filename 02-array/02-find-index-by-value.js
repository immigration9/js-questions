const assert = require('assert');

/**
 * Find Array Index by Value
 * @param {number[]} array
 * @param {number} target
 * 검색을 진행할 배열과 찾고자 하는 target값이 주어진다
 * 해당 target값의 배열 상의 순서 (index값)를 구하시오
 */
function findIndexByValue(array, target) {
  /** implement function */
}

assert.equal(findIndexByValue([3, 6, 9, 12, 15, 18], 12), 3);
assert.equal(findIndexByValue([1, 2, 3, 4, 5, 6], 5), 4);
assert.equal(findIndexByValue([2, 4, 6, 7, 8, 9], 9), 5);

console.log(`
  ** TEST FINISHED: if you are seeing this message,
  you can proceed to the next step
`);
