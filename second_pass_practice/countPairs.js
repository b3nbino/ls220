function countPairs(nums, target) {
  let validPairs = new Set();

  for (let i = 0; i + 1 <= nums.length; i++) {
    let currSum = nums.slice(i, i + 2).reduce((acc, curr) => acc + curr, 0);

    if (currSum > target && !validPairs.has(`${nums[i]}, ${nums[i + 2]}`)) {
      validPairs.add(`${nums[i]}, ${nums[i + 2]}`);
      validPairs.add(`${nums[i + 2]}, ${nums[i]}`);
    }
  }

  console.log(validPairs);

  return validPairs.size / 2;
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
