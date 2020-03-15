const assert = require('assert');

/**
 * Multiple Loops - 03
 * (row x row) 의 격자를 생성한다. 매개변수로 제공되는 rows를 이용하시오
 * 완성된 격자의 모양은 다음과 같다. 각 줄 마다 특정 위치에는 글자가 들어가지 않고 빈칸이 들어간다. 그 위치는 아래 그림을 참고하시오
 * 격자의 글자는 알파벳 소문자 o를 사용하며, 각 줄은 개행문자 '\n'을 이용하여 개행하시오
 *  oooo
 * o ooo
 * oo oo
 * ooo o
 * oooo
 * @param {number} rows
 */
function multipleLoopsParams(rows) {
  let result = '';

  /** implement details */

  return result;
}

assert.equal(multipleLoopsParams(1), ` \n`);
assert.equal(multipleLoopsParams(3), ` oo\no o\noo \n`);
assert.equal(multipleLoopsParams(5), ` oooo\no ooo\noo oo\nooo o\noooo \n`);

console.log(`
  ** TEST FINISHED: if you are seeing this message,
  you can proceed to the next step
`);
