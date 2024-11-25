/**
 * 1. Find leftmost index
 *    - Binary search biased left
 * 2. Find rightmost index
 *    - Binary search biased right
 * 3. Return difference from rightmost to leftmost and add one
 */

function isTargetFrequent(nums, target) {
  let leftmost = findLeftIndex(nums, target);
  let rightmost = findRightIndex(nums, target);

  return rightmost - leftmost + 1 > 3;
}

function findLeftIndex(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let leftmost = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] >= target) {
      if (nums[mid] === target) {
        leftmost = mid;
      }
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return leftmost;
}

function findRightIndex(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let rightmost = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] <= target) {
      if (nums[mid] === target) {
        rightmost = mid;
      }
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return rightmost;
}

console.log(isTargetFrequent([1, 2, 3, 3, 3, 3, 4], 3) === true);
console.log(isTargetFrequent([1, 1, 1, 1, 2, 3, 4], 1) === true);
console.log(isTargetFrequent([1, 2, 3, 4, 5], 2) === false);
console.log(isTargetFrequent([1, 1, 3, 4, 5], 2) === false);
console.log(isTargetFrequent([2, 2, 2, 3, 3, 3, 4], 3) === false);
console.log(isTargetFrequent([4, 4, 4, 4, 4, 4, 4], 4) === true);

// All test cases should log true.
