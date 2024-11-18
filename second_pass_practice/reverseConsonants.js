// Given a string `str`, reverse only all the consonants in the string and return it.
// Consonants are all alphabetic characters except for the vowels `'a'`, `'e'`, `'i'`,
// `'o'`, and `'u'`, which can appear in both lower and upper cases.
// The consonants can appear more than once in the string.

/**
 * 1. Split the string into an array of characters
 * 2. Using start and end pointers, iterate through the characters until end < start
 *    - Move start until it encounters a consonant
 *    - Move end until it encounters a consonant
 *    - Once both are pointing to a consonant, swap them and move both
 */

function reverseConsonants(str) {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let strArr = str.split("");
  let start = 0;
  let end = str.length - 1;

  while (start <= end) {
    //Put start and end pointers on a consonant
    while (!consonants.includes(strArr[start].toLowerCase())) {
      start++;
    }
    while (!consonants.includes(strArr[end].toLowerCase())) {
      end--;
    }

    //Swap the characters
    [strArr[start], strArr[end]] = [strArr[end], strArr[start]];
    start++;
    end--;
  }

  return strArr.join("");
}

console.log(reverseConsonants("") === "");
console.log(reverseConsonants("s") === "s");
console.log(reverseConsonants("HELLO") === "LELHO");
console.log(reverseConsonants("leetcode") === "deectole");
console.log(reverseConsonants("example") === "elapmxe");
console.log(reverseConsonants("Consonants") === "sotnonasnC");

// All test cases should log true
