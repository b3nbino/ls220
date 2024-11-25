// Write a function `findMax` that finds the maximum element in
// a rotated sorted array.

// A rotated sorted array is an array that was originally sorted
// in ascending order, but has been rotated (shifted) by some
// number of positions. The function should take an array of
// integers as input, representing the rotated sorted array,
// and it should return the maximum element in the array.
// The array is guaranteed to have at least one element.

// The solution should be in O(logN) time complexity.

// Example:
// Input: nums = [8, 9, 10, 2, 5, 6]
// Output: 10
// Explanation: The original sorted array [2, 5, 6, 8, 9, 10]
//              was rotated 3 times.

function findMax(nums) {
  if (nums.length === 1) return nums[0];
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let leftOfMid = nums[mid - 1] || nums[nums.length - 1];
    let rightOfMid = nums[mid + 1] || nums[0];

    if (nums[mid] > leftOfMid && nums[mid] > rightOfMid) {
      return nums[mid];
    } else if (nums[mid] < nums[0]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
}

console.log(findMax([8, 9, 10, 2, 5, 6]) === 10);
console.log(findMax([15, 18, 2, 3, 6, 12]) === 18);
console.log(findMax([7, 8, 2, 3, 4, 5, 6]) === 8);
console.log(findMax([3, 1]) === 3);
console.log(findMax([5]) === 5);
console.log(findMax([9, 10, 11, 12, 13, 14, 15, 1, 2, 3]) === 15);
console.log(findMax([4, 5, 1, 2, 3]) === 5);
console.log(
  findMax([23, 34, 38, 40, 41, 14, 15, 16, 17, 18, 19, 20, 21]) === 41
);
console.log(findMax([100, 200, 300, 400, 500]) === 500);
console.log(findMax([45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 44]) === 63);
console.log(findMax([11, 13, 15, 17, 19, 21, 1, 3, 5, 7, 9]) === 21);
