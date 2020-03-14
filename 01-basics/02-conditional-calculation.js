const assert = require('assert');

/**
 * Conditional Calculation
 * @param {number} a
 * @param {number} b
 * @param {string} equation
 * @description
 * a, b 숫자와 equation 문자열을 매개변수로 받는다
 * equation은 add, subtract, multiply, divide 중 하나의 키워드가 제공되며,
 * 조건문 (if - else if - else) 를 이용하여 사칙연산을 수행하는 계산기를 구현하시오
 */

function calculation(a, b, equation) {
  /** implement function */
}

/**
 * DO NOT MODIFY TEST CASES.
 */
assert.equal(calculation(3, 5, 'add'), 8);
assert.equal(calculation(5, 12, 'add'), 17);
assert.equal(calculation(10, 5, 'subtract'), 5);
assert.equal(calculation(8, 2, 'subtract'), 6);
assert.equal(calculation(3, 5, 'multiply'), 15);
assert.equal(calculation(10, 3, 'multiply'), 30);
assert.equal(calculation(10, 2, 'divide'), 5);
assert.equal(calculation(100, 20, 'divide'), 5);

console.log(`
  ** TEST FINISHED: if you are seeing this message,
  you can proceed to the next step
`);
