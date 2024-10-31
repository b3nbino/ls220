// Given a string `str`, reverse only all the consonants in the string and return it.
// Consonants are all alphabetic characters except for the vowels `'a'`, `'e'`, `'i'`,
// `'o'`, and `'u'`, which can appear in both lower and upper cases.
// The consonants can appear more than once in the string.

/**
 * Using start and end pointers:
 *  - Start at index 0 and last index
 *  - Increase start when element is not a consonant
 *  - Decrease end when element is not a consonant
 *  - If both start and end point to consonants, swap
 *  - End when both start and end meet
 */

function reverseConsonants(str) {
  let start = 0;
  let end = str.length - 1;
  str = str.split("");

  while (start < end) {
    if (!/[aeiou]/i.test(str[start]) && !/[aeiou]/i.test(str[end])) {
      [str[start], str[end]] = [str[end], str[start]];
      start++;
      end--;
    }

    if (/[aeiou]/i.test(str[start])) {
      start++;
    }

    if (/[aeiou]/i.test(str[end])) {
      end--;
    }
  }

  return str.join("");
}

console.log(reverseConsonants("") === "");
console.log(reverseConsonants("s") === "s");
console.log(reverseConsonants("HELLO") === "LELHO");
console.log(reverseConsonants("leetcode") === "deectole");
console.log(reverseConsonants("example") === "elapmxe");
console.log(reverseConsonants("Consonants") === "sotnonasnC");

// All test cases should log true
