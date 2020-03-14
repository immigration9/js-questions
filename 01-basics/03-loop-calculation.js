const assert = require('assert');

/**
 * Sum of Numbers
 * @param {number} start
 * @param {number} finish
 * 시작 숫자와 종료 숫자가 매개변수로 주어진다
 * 시작부터 종료까지의 숫자들의 합을 출력하시오
 */
function sumOfNumbers(start, finish) {
  let result = 0;
  /** implement function */

  return result;
}

/**
 * Sum of Even Numbers
 * @param {number} start
 * @param {number} finish
 * 시작 숫자와 종료 숫자가 매개변수로 주어진다
 * 시작부터 종료까지의 숫자들 중 '짝수'들의 합을 출력하시오
 */
function sumOfEvenNumbers(start, finish) {
  let result = 0;
  /** implement function */

  return result;
}

assert.equal(sumOfNumbers(0, 10), 55);
assert.equal(sumOfNumbers(5, 12), 68);
assert.equal(sumOfNumbers(7, 15), 99);
assert.equal(sumOfNumbers(3, 20), 207);
assert.equal(sumOfEvenNumbers(0, 10), 30);
assert.equal(sumOfEvenNumbers(5, 12), 36);
assert.equal(sumOfEvenNumbers(7, 15), 44);
assert.equal(sumOfEvenNumbers(3, 20), 108);

console.log(`
  ** TEST FINISHED: if you are seeing this message,
  you can proceed to the next step
`);
