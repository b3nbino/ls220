/**
 * In this problem, you're given an array of integers nums and a target integer target. Your objective is to
 * find the maximum sum that can be obtained by adding two distinct elements from the array, where this sum
 * is less than the target.
 *
 * Requirements:
 *
 * The input will be an array of integers, nums, and a target integer, target.
 * You need to find the maximum value of nums[i] + nums[j] where i != j and nums[i] + nums[j] < target.
 * If no such pair exists, return -1.
 */

// function twoSumLessThanTarget(nums, target) {
//   let anchor = 0;
//   let biggestSum = -Infinity;

//   while (anchor < nums.length - 1) {
//     let runner = anchor + 1;

//     while (runner < nums.length) {
//       let sum = nums[anchor] + nums[runner];

//       if (sum > biggestSum && sum < target) {
//         biggestSum = sum;
//       }
//       runner++;
//     }
//     anchor++;
//   }

//   return biggestSum === -Infinity ? -1 : biggestSum;
// }

function twoSumLessThanTarget(nums, target) {
  nums.sort((a, b) => a - b);
  let start = 0;
  let end = nums.length - 1;
  let biggestSum = -Infinity;

  while (start < end) {
    let currSum = nums[start] + nums[end];
    if (currSum < target && currSum > biggestSum) {
      biggestSum = currSum;
      start++;
    } else if (currSum < biggestSum) {
      start++;
    } else {
      end--;
    }
  }

  return biggestSum === -Infinity ? -1 : biggestSum;
}

console.log(twoSumLessThanTarget([3, 1, 4], 5) === 4);
console.log(twoSumLessThanTarget([8, 2, 4, 9, 5, 10, 1, 7], 16) === 15);
console.log(twoSumLessThanTarget([5, 8, 3, 2, 1], 6) === 5);
console.log(twoSumLessThanTarget([6, 8, 10, 12], 5) === -1);
console.log(twoSumLessThanTarget([1, 2, 3, 4, 5], 100) === 9);
console.log(twoSumLessThanTarget([10, 20, 30, 40, 50], 40) === 30);
console.log(twoSumLessThanTarget([7, 4, 15, 11, 21, 9], 24) === 22);
// All test cases should log true
