function isPalindrome(word) {
  // Write your algorithm here
  const reverseWord = reverseString(word);
  return word === reverseWord;
}
function reverseString(word){
  return word.split("").reverse().join("")
}

/* 
  Add your pseudocode here
  reverse the string
  if the reversed string is the same as the input return true
  else return false
*/

/*
  Add written explanation of your solution here
  The reverseString function reverses a word by splitting, reversing and rejoining it.
  The isPalindrome function uses the reverseString function to compare the word with its reverse determining if its a palindrome
  If the word matches the reverse the return is true otherwise the return is false
*/

// You can run `node index.js` to view these console logs
@@ -20,6 +31,17 @@ if (require.main === module) {

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));


}

module.exports = isPalindrome;