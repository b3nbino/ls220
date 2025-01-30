/**
 * Given n non-negative integers representing an elevation map where the width of each bar is 1,
 * compute how much water it can trap after raining.
 *
 * Problem:
 * - Given an array that represents an elevation map
 * - Return the greatest area of water between two bars that can be trapped after a rainfall
 * 
 * Algorithm:
 * 1. Using start and end pointers
 *    - Find the distance between two posts
 *    - Multiply the distance with the height of the smaller pole to find the area
 *    - Assign the greatest area value to a variable
 *    - Increment the smaller of the two poles
 * 2. Return the greatest area found
 */

function maxArea(height) {
  let start = 0;
  let end = height.length - 1;
  let max = 0;

  while (start < end) {
    let distance = end - start;
    let area = Math.min(height[start], height[end]) * distance;
    max = Math.max(area, max);

    if (height[start] < height[end]) {
      start++;
    } else {
      end--;
    }
  }

  return max;
}

console.log(maxArea([1, 2])); // 1
console.log(maxArea([1, 2, 3])); // 2
console.log(maxArea([4, 1, 2, 3])); // 9
console.log(maxArea([4, 1, 2, 15, 1, 10, 4])); // 24

// Example usage:
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Should return 49
// From 8 -> 7 we have a height of 7 and a length(distance) of 7
// 7 * 7 = 49
