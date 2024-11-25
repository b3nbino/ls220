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
 * 1. Use binary search to determine the length of the subarray that we will test for
 *    - Bias a smaller array
 *    - Min is 1
 *    - Max is length of nums
 *
 *    a. Each time we try a new subarray length, determine if it can contain a sum greater than or equal to target
 *       - Start at the beggining and move the slice down each time
 *       - If sum is equal to or greater than target return true
 *       - Else return false
 */

function isViableLength(nums, target, subArrLength) {
  for (let i = 0; i + subArrLength <= nums.length; i++) {
    let currSubArr = nums.slice(i, i + subArrLength);
    let sum = currSubArr.reduce((acc, curr) => acc + curr);

    if (sum >= target) {
      return true;
    }
  }

  return false;
}

function minLengthForTargetSum(nums, target) {
  let min = 1;
  let max = nums.length;
  let smallestArrLength = 0;

  while (min <= max) {
    let subArrLength = Math.floor((min + max) / 2);

    if (isViableLength(nums, target, subArrLength)) {
      smallestArrLength = subArrLength;
      max = subArrLength - 1;
    } else {
      min = subArrLength + 1;
    }
  }

  return smallestArrLength;
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
