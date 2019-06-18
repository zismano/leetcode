/*
#6 ZigZag Conversion
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:

P     I    N
A   L S  I G
Y A   H R
P     I
*/
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (s.length < numRows || numRows === 1) return s;
    
    let currRow = 0;
    let asc = true;
    let hash = {};
    let result = "";
    for (let i = 0; i < s.length; i++) {
        if (!hash[currRow]) {
            hash[currRow] = "";
        } 
        hash[currRow] = hash[currRow] + s[i];
       if (asc) {
            if (currRow + 1 < numRows) {
                currRow++;
            } else {
                asc = false;
                currRow--;
            }           
       } else {
         if (currRow - 1 >= 0) {
            currRow--;
         } else {
            asc = true;
             currRow++;
         } 
       }
    }
    for (let i = 0; i < numRows; i++) {
        result = result + hash[i]
    };
    return result;
};
