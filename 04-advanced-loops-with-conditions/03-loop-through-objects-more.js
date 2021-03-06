const assert = require('assert');

/**
 * Loop Through Objects More
 * @param { { id: number, value: number }[] } target
 * 매개변수로 숫자 id와 숫자 value를 프로퍼티로 갖는 객체 배열이 주어진다 (아래와 같이)
 * [
 *  { id: 2, value: 4 },
 *  { id: 3, value: 5 },
 *  { id: 4, value: 10 }
 * ]
 * 해당 배열을 순회하여, id값이 '짝수'인 항목들에 대해서만
 * 그 해당 객체의 value 값을 전부 더하여 반환하시오
 *
 * 즉, 위의 케이스는 다음과 같다
 * - id가 2인 경우 -> 짝수기 때문에 value값인 4를 더해줌
 * - id가 3인 경우 -> 홀수기 때문에 pass
 * - id가 4인 경우 -> 짝수기 때문에 value값인 10을 더해줌
 * - 4 + 10인 14가 반환된다
 */

function loopThroughObjectsMore(targets) {
  let result = 0;

  /** implement function */

  return result;
}

/**
 * DO NOT MODIFY TEST CASES.
 */
assert.equal(
  loopThroughObjectsMore([
    { id: 2, value: 4 },
    { id: 3, value: 5 },
    { id: 4, value: 10 }
  ]),
  14
);
assert.equal(
  loopThroughObjectsMore([
    { id: 4, value: 6 },
    { id: 5, value: 2 },
    { id: 6, value: 20 }
  ]),
  26
);
assert.equal(
  loopThroughObjectsMore([
    { id: 1, value: 4 },
    { id: 3, value: 2 },
    { id: 5, value: 2 }
  ]),
  0
);

console.log(`
  ** TEST FINISHED: if you are seeing this message,
  you can proceed to the next step
`);
