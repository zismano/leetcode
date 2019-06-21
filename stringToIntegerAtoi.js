/*
#8 String to Integer (atoi)
The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

If no valid conversion could be performed, a zero value is returned.

Note:

Only the space character ' ' is considered as whitespace character.
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.
Example 1:

Input: "42"
Output: 42
Example 2:

Input: "   -42"
Output: -42
Explanation: The first non-whitespace character is '-', which is the minus sign.
             Then take as many numerical digits as possible, which gets 42.
Example 3:

Input: "4193 with words"
Output: 4193
Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.
Example 4:

Input: "words and 987"
Output: 0
Explanation: The first non-whitespace character is 'w', which is not a numerical 
             digit or a +/- sign. Therefore no valid conversion could be performed.
Example 5:

Input: "-91283472332"
Output: -2147483648
Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer.
             Thefore INT_MIN (−231) is returned.
*/
const getFirstString = str => {
    let newStr = '';
    let i = 0;
    while (i < str.length) {
        if (str[i] === ' ') {
            i++;
        } else {
            const nextSpaceIndex = str.indexOf(' ', i);
            return nextSpaceIndex === -1 ? str.substring(i) : str.substring(i, nextSpaceIndex)
        }
    }
    return '';  // all spaces
}

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let num = 0;
    let strWithNoSpaces = getFirstString(str);
    if (strWithNoSpaces.length) {
        let index = 0;
        if (strWithNoSpaces[index] === '-' || strWithNoSpaces[index] === '+' ||    
            Number(strWithNoSpaces[index]) >= 0) {
            let multiplier = 1;
            if (strWithNoSpaces[index] === '-') {
                multiplier *= -1;
                index++;
            } else if (strWithNoSpaces[index] === '+') {
                index++;
            }
            while (index < strWithNoSpaces.length && Number(strWithNoSpaces[index]) >= 0) {
                if (Number(strWithNoSpaces[index]) === 0 && num === 0) {
                    index++;
                } else {
                    const maxInt = Math.pow(2, 31);
                    num = num * 10 + Number(strWithNoSpaces[index++]);
                    if (num * multiplier < -maxInt) {
                        return -maxInt;
                    } else if (num * multiplier > maxInt - 1) {
                        return maxInt - 1;
                    }                
                } 
            }
            return multiplier * num;
        } 
    }
    return 0;
};