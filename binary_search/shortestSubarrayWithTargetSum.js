// Write a function named `minLengthForTargetSum` that
// determines the minimal length of a contiguous subarray
// within an array of positive integers, `nums`. This
// subarray should have a sum that is greater than or
// equal to a specified positive integer, `target`.
// The function should return the length of this
// subarray. If no such subarray exists, return 0.

// The time complexity of your solution should be O(NlogN).

// Example:
// Input: nums = [4, 2, 5, 7], target = 10
// Output: 2
// Explanation: In this example, the shortest subarray that
//              meets or exceeds the target sum of 10 is [5, 7].
//              This subarray sums to 12, which is greater than
//              the target sum of 10. The length of this subarray is 2.
/**
 * Brute force:
 *  Check all combinations for sum greater than the target starting with length of 1 and increasing until we find one.
 */

function sumGreaterOrEqual(nums, target, midLength) {
  for (let i = 0; i < nums.length - (midLength - 1); i++) {
    let subArr = nums.slice(i, i + midLength);

    if (subArr.reduce((acc, curr) => acc + curr) >= target) {
      return true;
    }
  }

  return false;
}

function minLengthForTargetSum(nums, target) {
  let maxLength = nums.length;
  let minLength = 1;
  let result = 0;

  while (minLength <= maxLength) {
    let midLength = Math.floor((maxLength + minLength) / 2);
    if (sumGreaterOrEqual(nums, target, midLength)) {
      result = midLength;
      maxLength = midLength - 1;
    } else {
      minLength = midLength + 1;
    }
  }

  return result;
}

console.log(minLengthForTargetSum([1, 2, 3], 5) === 2);
console.log(minLengthForTargetSum([1, 1, 1], 4) === 0);
console.log(minLengthForTargetSum([8, 2, 1, 4], 8) === 1);
console.log(minLengthForTargetSum([1, 2, 5, 4, 3], 9) === 2);
console.log(minLengthForTargetSum([1, 4, 1, 3, 6, 2], 9) === 2);
console.log(minLengthForTargetSum([1, 2, 3, 4], 10) === 4);
console.log(minLengthForTargetSum([1, 2, 6, 1, 1, 7], 9) === 3);
console.log(minLengthForTargetSum([4, 2, 2, 1, 5, 2], 14) === 5);

// All test cases should log true
