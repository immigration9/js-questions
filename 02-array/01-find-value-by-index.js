const assert = require('assert');

/**
 * Find Value by Index
 * @param {number[]} array
 * @param {number} index
 * 검색을 진행할 배열과 찾고자 하는 index값이 주어진다
 * for-loop을 통해 해당 index의 값을 구하시오
 * * 조건: index는 절대로 array의 길이를 넘을 수 없다. (그럴 경우 강제로 -1을 반환한다)
 */

function findValueByIndex(array, index) {
  if (index >= array.length) return -1;
  /** implement function */
}

assert.equal(findValueByIndex([3, 6, 9, 12, 15, 18], 3), 12);
assert.equal(findValueByIndex([1, 2, 3, 4, 5, 6], 5), 6);
assert.equal(findValueByIndex([2, 4, 6, 7, 8, 9], 0), 2);

console.log(`
  ** TEST FINISHED: if you are seeing this message,
  you can proceed to the next step
`);
