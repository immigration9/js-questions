const assert = require('assert');

/**
 * Sum Only Vowels
 * @param {string} word
 * 문자열 안에 있는 문자를 반복하며, 안에 있는 내용 중 모음만 출력한다
 * 예를들어, "hello, world!" 문자열에서는 "eoo"가 반환된다
 * - 모음에는 a, e, i, o, u가 있다
 * - for loop을 이용하여 구현하시오
 * - string type에는 해당 문자열의 길이를 저장하는 length 프로퍼티가 있다.
 */

function sumOnlyVowels(word) {
  let result = '';

  /** implement function */

  return result;
}

/**
 * DO NOT MODIFY TEST CASES.
 */
assert.equal(sumOnlyVowels('hello,world!'), 'eoo');
assert.equal(sumOnlyVowels('lorem ipsum dolor sit amet'), 'oeiuooiae');
assert.equal(sumOnlyVowels('abcdefghijklmnopqrstuvwxyz'), 'aeiou');

console.log(`
  ** TEST FINISHED: if you are seeing this message,
  you can proceed to the next step
`);
