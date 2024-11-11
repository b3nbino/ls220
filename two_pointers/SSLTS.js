// Write a function named `minLengthForTargetSum` that
// determines the minimal length of a contiguous subarray
// within an array of positive integers, `nums`. This
// subarray should have a sum that is greater than or
// equal to a specified positive integer, `target`. The
// function should return the length of this subarray.
// If no such subarray exists, return 0.

// Example:
// Input: nums = [4, 2, 5, 7], target = 10
// Output: 2
// Explanation: In this example, the shortest subarray that
//              meets or exceeds the target sum of 10 is [5, 7].
//              This subarray sums to 12, which is greater than
//              the target sum of 10. The length of this
//              subarray is 2.

function minLengthForTargetSum(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let minSub = [-Infinity];

  while (start <= end) {
    let currSub = nums.slice(start, end + 1);
    let sum = currSub.reduce((acc, curr) => acc + curr);

    if (sum === target) {
      return currSub.length;
    }

    //Find small subarray
    if (sum < target) {
      break;
    } else {
      minSub = currSub;
    }

    //Pointer movement
    if (nums[start] <= nums[end]) {
      start++;
    } else {
      end--;
    }
  }

  let minSubSum = minSub.reduce((acc, curr) => acc + curr);
  return minSubSum >= target ? minSub.length : 0;
}

console.log(minLengthForTargetSum([1, 2, 3], 5) === 2);
console.log(minLengthForTargetSum([1, 1, 1], 4) === 0);
console.log(minLengthForTargetSum([8, 2, 1, 4], 8) === 1);
console.log(minLengthForTargetSum([1, 2, 3, 4, 5], 9) === 2);
console.log(minLengthForTargetSum([1, 4, 1, 3, 6, 2], 9) === 2);
console.log(minLengthForTargetSum([1, 2, 3, 4], 10) === 4);
console.log(minLengthForTargetSum([1, 2, 6, 1, 1, 7], 9) === 3);
console.log(minLengthForTargetSum([4, 2, 2, 1, 5, 2], 14) === 5);

// All test cases should log true
