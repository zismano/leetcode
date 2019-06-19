/*
#7 Reverse Integer
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

const getReversed = posNum => Number(posNum.toString().split('').reverse().join(''))

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const maxNumCapableToStore = Math.pow(2, 31); 
    const multiplier = x < 0 ? -1 : 1;
    const reversedNum = multiplier * getReversed(x * multiplier);
    return reversedNum <= -maxNumCapableToStore || reversedNum >= maxNumCapableToStore - 1 ? 0 : reversedNum;
};