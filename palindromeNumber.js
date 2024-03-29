/*
#9 Palindrome Number
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Follow up:

Coud you solve it without converting the integer to a string?

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    let digits = [];
    while (x > 0) {
       digits.push(x % 10);
       x = Math.floor(x / 10);
    }
    for (let i = 0; i < Math.floor(digits.length / 2); i++) {
        if (digits[i] !== digits[digits.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

// var isPalindrome = function(x) {
//     return x === Number((x).toString().split('').reverse().join(''))
// };