/**
 * Given two strings s and t, return the minimum window in s which will contain all the characters in t.
 * If there is no such window in s that covers all characters in t, return the empty string "".
 * 
 * Problem:
 * - Input is two strings, s and t
 * - Output is a substring of s that contains all of the characters included in t
 *    - Specifically the smallest substring
 * - The order of the characters doesn't matter
 * - If s doens't contain all characters from t return ""
 * - Case does matter
 * - The input will always be two strings, nothing else
 * 
 * DSA:
 * - Using two pointers sliding window technique?
 * - t chars could be put into array
 * 
 * Algorithm:
 * 1. Make t into an array of each character
 * 2. Iterate through the string
 *    - Check all substrings of a specified length
 *      - If one works, return it
 *      - If none work, increase the size of the window until its longer than the whole string
 * 3. Return ""
 *    
 */

function minWindow(s, t) {
  t = t.split("");
  for (let windowSize = t.length; windowSize <= s.length; windowSize++) {
    for (let start = 0; start + windowSize <= s.length; start++) {
      let currWindow = s.slice(start, start + windowSize);
      if(t.every(char => currWindow.includes(char))) {
        return currWindow;
      }
    }
  }

  return "";
}

// Example usage:
console.log(minWindow("", "c")); // Should return ""
console.log(minWindow("b", "")); // Should return ""
console.log(minWindow("a", "a")); // Should return "a"
console.log(minWindow("Ben", "eBn")); // Should return "Ben"
console.log(minWindow("NEB", "ebn")); // Should return ""
console.log(minWindow("ASJDNEBAKSJ", "BNE")); // Should return "NEB"
console.log(minWindow("ADOBECODEBANC   ABC", "ABC")); // Should return "BANC"
console.log(minWindow("MYCHOCOLATE", "ME")); // Should return "MYCHOCOLATE"
console.log(minWindow("ADOBECODEBANC", "ABZ")); // Should return ""
console.log(minWindow("LAUNCH SCHOOL", "FRL")); // Should return ""
