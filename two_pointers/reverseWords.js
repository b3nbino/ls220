/**
 * You are given a sentence represented by a string str. Your objective is to reverse all the characters
 * in each word of the sentence while ensuring that the case of each character remains unchanged. The
 * spaces between words should be preserved as they are, and the overall order of the words in the
 * sentence must not be altered.
 *
 * You should solve the problem without using the Array#reverse method.
 *
 * Anchor Runner:
 *  - The anchor and runner should start at index 0
 *  - When a space is found, the anchor should point to the space
 *  - The runner should increment forward by 1 each time until a space is found or the end of the string
 */

function reverseWords(str) {
  let anchor = 0;
  let runner = 0;
  let result = "";

  while (runner <= str.length) {
    if (runner === str.length || str[runner] === " ") {
      anchor = runner - 1;
      while (anchor >= 0 && str[anchor] !== " ") {
        result += str[anchor];
        anchor--;
      }
      if (str[runner] === " ") {
        result += " ";
      }
    }
    runner++;
  }

  return result;
}

console.log(reverseWords("Hello World") === "olleH dlroW");
console.log(reverseWords("JavaScript is fun") === "tpircSavaJ si nuf");
console.log(reverseWords("Coding in the sun") === "gnidoC ni eht nus");
console.log(reverseWords("Launch School") === "hcnuaL loohcS");
