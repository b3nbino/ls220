/**
 * Create a recursive function that counts the number of digits in a given integer. The function should accept an
 * integer and return the count of its digits. For instance, if the input is 12345, the function should return 5.
 *
 * Base Case: There is only one digit left
 */
function countDigits(num) {
  if (num < 10) {
    return 1;
  }

  return 1 + countDigits(Math.floor(num / 10));
}

console.log(countDigits(12345) === 5);
console.log(countDigits(7) === 1);
console.log(countDigits(100000) === 6);
console.log(countDigits(99999) === 5);
console.log(countDigits(0) === 1);

// All test cases should log true.
