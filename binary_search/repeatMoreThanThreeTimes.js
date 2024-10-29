/**
 * Given an array nums, sorted in ascending order (where elements are equal to or increase as you move through the array),
 * determine if a specified number, target, appears more than three times in the array. The function should return true if
 * target is found at least four times, and false otherwise.
 */

function findLeftIndex(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let index;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      index = mid;
      right = mid - 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return index;
}

function findRightIndex(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let index;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      index = mid;
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return index;
}

function isTargetFrequent(nums, target) {
  let leftMost = findLeftIndex(nums, target);
  let rightMost = findRightIndex(nums, target);

  return rightMost - leftMost + 1 > 3;
}

console.log(isTargetFrequent([1, 2, 3, 3, 3, 3, 4], 3) === true);
console.log(isTargetFrequent([1, 1, 1, 1, 2, 3, 4], 1) === true);
console.log(isTargetFrequent([1, 2, 3, 4, 5], 2) === false);
console.log(isTargetFrequent([1, 1, 3, 4, 5], 2) === false);
console.log(isTargetFrequent([2, 2, 2, 3, 3, 3, 4], 3) === false);
console.log(isTargetFrequent([4, 4, 4, 4, 4, 4, 4], 4) === true);

// All test cases should log true.
