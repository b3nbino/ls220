/**
 * 1. Perform a binary search using a range from 1 to the number provided
 *    - If the current number squared is equal to the number provided, return true
 *    - If the current number squared is to small make the number bigger, else make is smaller
 * 2. Return false
 */

function isSquareInteger(num) {
  let left = 1;
  let right = num;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (mid * mid === num) {
      return true;
    } else if (mid * mid < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

console.log(isSquareInteger(1) === true);
console.log(isSquareInteger(4) === true);
console.log(isSquareInteger(16) === true);
console.log(isSquareInteger(14) === false);
console.log(isSquareInteger(25) === true);
console.log(isSquareInteger(26) === false);

// All test cases should log true.
