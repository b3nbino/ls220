/**
 * 1. Using runner anchor starting from the end of nums
 *    - Both pointers start at the end where runner is one further back (anchor - 1)
 *    - The runner moves back until the sum is < the target
 *      - For each pair greater than the target, add one to a counter
 *    - The anchor moves back one once the sum is < the target
 *    - If the first pair after the anchor moves is not a greater sum then stop iterating
 *    - Add each pair to a map to keep track of duplicates
 */

function countPairs(nums, target) {
  let anchor = nums.length - 1;
  let runner = anchor - 1;
  let pairs = new Set();

  while (anchor > 0) {
    let sum = nums[anchor] + nums[runner];
    if (sum > target) {
      if (!pairs.has(`${nums[anchor]}, ${nums[runner]}`)) {
        pairs.add(`${nums[anchor]}, ${nums[runner]}`);
        pairs.add(`${nums[runner]}, ${nums[anchor]}`);
      }
    } else {
      anchor--;
      runner = anchor - 1;
      if (nums[anchor] + nums[runner] <= target) {
        break;
      }
      continue;
    }
    runner--;
  }

  return pairs.size / 2;
}

console.log(countPairs([1, 2, 3, 4, 5], 6) == 4);
// Pairs: (2, 5), (3, 4), (3, 5), (4, 5)

console.log(countPairs([1, 2, 3, 4, 5], 8) == 1);
// Pair: (4, 5)

console.log(countPairs([1, 3, 5, 7], 6) == 4);
// Pairs: (1, 7), (3, 5), (3, 7), (5, 7)

console.log(countPairs([1, 2, 3, 4], 5) == 2);
// Pairs: (2, 4), (3, 4)

console.log(countPairs([1, 2, 3, 4, 5], 10) == 0);
// No pairs
