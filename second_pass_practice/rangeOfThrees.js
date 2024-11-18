// Implement a function `findRange` that takes in an array of
// integers sorted in ascending order. The function should
// return an array containing the starting and ending
// positions of the number 3 within the array. If the number 3
// is not found, return [-1, -1].

// Example:
// Input: nums = [1, 2, 3, 3, 3, 3, 3, 4, 5]
// Output: [2, 6]

// Example:
// Input: nums = [1, 2, 5, 5, 6, 9, 10]
// Output: [-1, -1]

/**
 * Perform two binary searches, one to find the rightmost and one to find the leftmost
 */

function findRangeOfThrees(nums) {
  return [findLeft(nums), findRight(nums)];
}

function findLeft(nums) {
  let left = 0;
  let right = nums.length - 1;
  let leftmost = -1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === 3) {
      leftmost = mid;
      right = mid - 1;
    } else if (nums[mid] < 3) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return leftmost;
}

function findRight(nums) {
  let left = 0;
  let right = nums.length - 1;
  let rightmost = -1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === 3) {
      rightmost = mid;
      left = mid + 1;
    } else if (nums[mid] < 3) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return rightmost;
}

console.log(findRangeOfThrees([1, 2, 3, 3, 3, 3, 3, 4, 5])); // [2, 6]
console.log(findRangeOfThrees([1, 2, 5, 5, 6, 9, 10])); // [-1, -1]
console.log(findRangeOfThrees([])); // [-1, -1]
