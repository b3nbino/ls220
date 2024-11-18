// Given an array `nums` sorted in ascending order, determine
// the minimum between the count of positive integers and the
// count of negative integers.

// Please note that the number `0` is neither positive nor negative.

/**
 * - Find the index of the rightmost negative and add one to get the negative count
 * - Find the index of the leftmost positive and subtract that from the array length to find the positive count
 * - Return the smaller of the two
 */

function minimumCount(nums) {
  return Math.min(negativeCount(nums), positiveCount(nums));
}

function negativeCount(nums) {
  let left = 0;
  let right = nums.length - 1;
  let rightmost = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] < 0) {
      rightmost = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return rightmost < 0 ? 0 : rightmost + 1;
}

function positiveCount(nums) {
  let left = 0;
  let right = nums.length - 1;
  let leftmost = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] > 0) {
      leftmost = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return leftmost < 0 ? 0 : nums.length - leftmost;
}

console.log(minimumCount([-4, -3, -2, -1, 3, 4]) === 2);
console.log(minimumCount([-3, 1, 2, 3, 4, 5]) === 1);
console.log(minimumCount([-5, -4, -3, -2, -1]) === 0);
console.log(minimumCount([1, 2, 3, 4, 5]) === 0);
console.log(minimumCount([-2, -1, 1, 2]) === 2);
console.log(minimumCount([-7, -5, -4, 1, 2, 6, 10]) === 3);
console.log(minimumCount([-3, -2, -1, 0, 5, 6]) === 2);
console.log(minimumCount([-1, 0, 1]) === 1);
console.log(minimumCount([]) === 0);

// All test cases should log true.
