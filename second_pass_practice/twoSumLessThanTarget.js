/**
 * 1. Sort the nums
 * 2. Start and end pointers iteration
 *    - If the curr sum is less than the target and greater than the current max
 *      - Max = cuu sum
 *    - Else if the curr sum is less than the target increase start
 *    - Else decrease end
 * 3. Return max
 */

function twoSumLessThanTarget(nums, target) {
  let sortedNums = nums.sort((a, b) => a - b);
  let max = -1;
  let start = 0;
  let end = sortedNums.length - 1;

  while (start < end) {
    let currSum = nums[start] + nums[end];
    if (currSum < target && currSum > max) {
      max = currSum;
    }
    if (currSum < target) {
      start++;
    } else {
      end--;
    }
  }

  return max;
}

console.log(twoSumLessThanTarget([3, 1, 4], 5) === 4);
console.log(twoSumLessThanTarget([8, 2, 4, 9, 5, 10, 1, 7], 16) === 15);
console.log(twoSumLessThanTarget([5, 8, 3, 2, 1], 6) === 5);
console.log(twoSumLessThanTarget([6, 8, 10, 12], 5) === -1);
console.log(twoSumLessThanTarget([1, 2, 3, 4, 5], 100) === 9);
console.log(twoSumLessThanTarget([10, 20, 30, 40, 50], 40) === 30);
console.log(twoSumLessThanTarget([7, 4, 15, 11, 21, 9], 24) === 22);
// All test cases should log true
