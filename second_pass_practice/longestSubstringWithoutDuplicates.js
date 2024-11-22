// Write a function `longestSubstringLength` that finds the
// length of the longest substring without duplicates in a
// given string. The function should take a string as input
// and return an integer representing the length of the longest
// substring without any repeating characters. The input
// string will only contain lowercase characters.

// Example:
// Input: s = "helloworld"
// Output: 5
// Explanation: The longest substring without repeating characters is "world",
// which has a length of 5.

/**
 * Use a map to keep track of the last occurence of all characters
 * 1. Use anchor runner iteration
 *    - Runner always moves
 *    - Anchor moves if a duplicate is found
 *    - If a character is already in the map set the
 *    - Each time we encounter a character add it to the map and its location
 */

function longestSubstringLength(string) {
  let anchor = 0;
  let runner = 0;
  let longest = 0;
  let seen = new Map();

  while (runner < string.length) {
    if (seen.has(string[runner])) {
      anchor = seen.get(string[runner]) + 1;
      seen.clear();
    }
    seen.set(string[runner], runner);

    longest = Math.max(runner - anchor + 1, longest);
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
