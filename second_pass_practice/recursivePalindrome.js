// Given a string, determine whether it is a valid palindrome or not.

// A palindrome string is a string that reads the same backwards as forwards.

// You may assume that the input will be in lowercase, containing
// valid English alphabet characters without white spaces.

// Input: "madam"
// Output: true

// Input: "abcbea"
// Output: false

function isPalindrome(str) {
  if (str.length < 2) {
    return true;
  }

  return (
    str[0] === str[str.length - 1] && isPalindrome(str.slice(1, str.length - 1))
  );
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("adam"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("launchschool"));
