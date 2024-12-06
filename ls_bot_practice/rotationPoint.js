/**
 * Implement a function that finds the rotation point in a sorted but rotated array.
 * The rotation point is the index where the smallest element is located. Assume
 * all elements in the array are unique.
 *
 * Problem:
 *  - Return the rotation point from a sorted, rotated array
 *  - Rotation point is the index of the smallest element in the array
 *  - There are no duplicate elements in the array
 *  - The array may be empty, if so return -1
 *  - The elements will always be integers, never NaN
 *  - The array will not be sparse
 *
 * DSA:
 *  - Use binary seach algorithm for O(logN) time complexity
 *  - Input is an array
 *
 * Crude algorithm:
 *  1. Find smallest number
 *  2. Find index of smallest number and return it
 *
 * Algorithm:
 * 1. Begin binary search
 *    - If the current value is less than its surrounding elements return its index
 *    - If mid >= right move right, else move left
 */

function findRotationPoint(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let leftSide = arr[mid - 1] ?? arr[arr.length - 1];
    let rightSide = arr[mid + 1] ?? arr[0];

    if (arr[mid] <= leftSide && arr[mid] <= rightSide) {
      return mid;
    } else if (arr[mid] > arr[arr.length - 1]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

// Example usage:
console.log(findRotationPoint([])); // Should return -1
console.log(findRotationPoint([10])); // Should return 0
console.log(findRotationPoint([10, 5])); // Should return 1
console.log(findRotationPoint([1, 4])); // Should return 0
console.log(findRotationPoint([1, 2, 4, 6, 8, 10, 15])); // Should return 0
console.log(findRotationPoint([4, 5, 6, 7, 0, 1, 2])); // Should return 4
console.log(findRotationPoint([2, 3, 4, 5, 6, 7, 1])); // Should return 6
