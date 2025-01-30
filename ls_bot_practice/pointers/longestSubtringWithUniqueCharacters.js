/**
 * Given a string s, find the length of the longest substring without repeating characters.
 * 
 * Problem:
 * - Input is a string
 * - Output is the length of the longest substring with distinct characters
 * - String may be empty, if so return 0
 * - Spaces count as characters
 * - Ignore capitalization
 * 
 * DSA:
 * - Use a map to keep track of seen characters and their index
 * - Everything else can done with a string
 * 
 * Algorithm:
 * 1/2. Make str lowercase
 * 1. Use anchor runner pointers to iterate through the string
 *    - Anchor will start at 0
 *    - The runner will start at 0
 *    - The runner will increment every iteration
 *    - The anchor will move when a duplicate is found
 *      - The anchor will move to the duplicates index + 1
 *    - Every iteration check if the runners character has been seen if not add to map, 
 *      if so move anchor to last index of that char + 1
 *    - Each iteration set the longest var to the longest or runner - anchor + 1 (AKA the current substring length)
 * 2. Return the longest substring length
 */

function lengthOfLongestSubstring(str) {
  str = str.toLowerCase();
  let seen = new Map();
  let longest = 0;
  let anchor = 0;
  let runner = 0;

  while(runner < str.length) {
    let currChar = str[runner];
    if(seen.has(currChar)) {
      anchor = seen.get(currChar) + 1;
      seen.clear();
      runner = anchor;
    }

    seen.set(currChar, runner);
    
    longest = Math.max(longest, runner - anchor + 1);
    runner++;
  }

  return longest;
}

// Example usage:
console.log(lengthOfLongestSubstring("")); // Should return 0
console.log(lengthOfLongestSubstring("abcabcbb")); // Should return 3
console.log(lengthOfLongestSubstring("bbbbb")); // Should return 1
console.log(lengthOfLongestSubstring("Launch School")); // Should return 8
