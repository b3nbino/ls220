// Write a function `longestSubstringLength` that finds the
// length of the longest substring without duplicates in a
// given string. The function should take a string as input
// and return an integer representing the length of the longest
// substring without any repeating characters. The input
// string will only contain lowercase characters.

/**
 * Anchor runner strategy:
 *  - Both the anchor and runner start at zero
 *  - The runner increments each times
 *    - The runner adds each letter to a 'seen' set
 *  - If the distance between the anchor and runner is greater than the current longest substring, replace longest with distance
 *  - If the runner encounters a 'seen' character
 *    - Set the anchor and runner index to the character after the seen character
 *    - Clear 'seen'
 */

// Example:
// Input: s = "helloworld"
// Output: 5
// Explanation: The longest substring without repeating characters is "world",
// which has a length of 5.

function longestSubstringLength(string) {
  let anchor = 0;
  let runner = 0;
  let longest = 0;
  let seen = new Map();

  while (runner < string.length) {
    if (seen.has(string[runner])) {
      anchor = seen.get(string[runner]) + 1;
      runner = anchor;
      seen.clear();
    }

    let distance = runner - anchor + 1;
    if (distance > longest) {
      longest = distance;
    }

    seen.set(string[runner], runner);
    runner++;
  }

  return longest;
}

console.log(longestSubstringLength("a") === 1);
console.log(longestSubstringLength("aa") === 1);
console.log(longestSubstringLength("ab") === 2);
console.log(longestSubstringLength("abba") === 2);
console.log(longestSubstringLength("abc") === 3);
console.log(longestSubstringLength("helloworld") === 5);
console.log(longestSubstringLength("dvdf") === 3);
console.log(longestSubstringLength("tmmzuxt") === 5);
console.log(longestSubstringLength("thisishowwedoit") === 6);
console.log(longestSubstringLength("longestsubstring") === 8);
console.log(longestSubstringLength("aabbccddeffghijklmno") === 10);
console.log(longestSubstringLength("abcdefghijklmnopqrstuvwxyz") === 26);
