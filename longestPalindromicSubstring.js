// #5 Longest Palindromic Substring
// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (!s.length) return "";
    
    let middle = Math.floor(s.length / 2);
    let result = s[middle];
    
    const findLongestPalindrome = (s, start, end) => {
        if (start >= 0 && end < s.length && s[start] === s[end]) {
            if (end + 1 - start > result.length) {
                    result = s.substring(start, end + 1);
            }
            findLongestPalindrome(s, --start, ++end);
        }
    }
 
    // palindrome odd length
    for (let i = middle; i < s.length; i++) {
        let start = i - 1;
        let end = i + 1;
        findLongestPalindrome(s, start, end);    
    }
    
    for (let i = middle - 1; i > 0; i--) {
        let start = i - 1;
        let end = i + 1;
        findLongestPalindrome(s, start, end);
    }
    
    // palindrome even length
     for (let i = middle; i < s.length; i++) {
         let start = i;
         let end = i + 1;
        findLongestPalindrome(s, start, end);    
    }
    
    for (let i = middle - 1; i >= 0; i--) {
        let start = i;
        let end = i + 1;
        findLongestPalindrome(s, start, end);
    }   
    

    return result;
};