/**
 * 1. Using anchor runner iteration while runner < array length
 *    - The anchor starts at 0, the runner at 1
 *    - If the anchor's value * 3 equals the runner's value return true
 *    - Else if it's greater than the runner's value increment the runner
 *    - Else increment the anchor
 *      - If the anchor and runner are equal, increment the runner
 * 2. Return false
 */

function checkTripleMatch(nums) {
  let anchor = 0;
  let runner = 1;

  while (runner < nums.length) {
    let triple = nums[anchor] * 3;

    if (triple === nums[runner]) {
      return true;
    } else if (triple > nums[runner]) {
      runner++;
    } else {
      anchor++;
    }
  }

  return false;
}

console.log(checkTripleMatch([1, 3, 9, 28]) === true);
console.log(checkTripleMatch([1, 2, 4, 10, 11, 12]) === true);
console.log(checkTripleMatch([0, 5, 7, 55]) === false);
console.log(checkTripleMatch([4, 5, 7, 9, 13, 15, 17]) === true);
console.log(checkTripleMatch([2, 6, 13, 54]) === true);
console.log(checkTripleMatch([1, 5, 17, 51]) === true);
console.log(checkTripleMatch([1, 2, 4, 8]) === false);

// All test cases should log true.
