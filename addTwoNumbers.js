/*
Leetcode #2 - Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // 1st digit
    let remaining = 0;
    let num1 = l1.val;
    let num2 = l2.val;
    let num3 = num1 + num2 + remaining;
    remaining = Math.floor(num3 / 10);
    num3 = Math.floor(num3 % 10);
    
    // assigning 1st digit
    let result = new ListNode(num3);
    let resultHead = result;
    // other digits
    l1 = l1.next;
    l2 = l2.next;  
    while (l1 && l2) {
        num1 = l1.val;
        num2 = l2.val;
        num3 = num1 + num2 + remaining;
        remaining = Math.floor(num3 / 10);
        num3 = Math.floor(num3 % 10);
        let node = new ListNode(num3);
        result.next = node;
        result = result.next;
        l1 = l1.next;
        l2 = l2.next;
    }
    
    while (l1) {
        let num1 = l1.val;
        let num3 = num1 + remaining;
        remaining = Math.floor(num3 / 10);
        num3 = Math.floor(num3 % 10);
        let node = new ListNode(num3);
        result.next = node;
        result = result.next;
        l1 = l1.next;
    }
    
    while (l2) {
        let num2 = l2.val;
        let num3 = num2 + remaining;
        remaining = Math.floor(num3 / 10);
        num3 = Math.floor(num3 % 10);
        let node = new ListNode(num3);
        result.next = node;
        result = result.next;
        l2 = l2.next;
    }
    
    if (remaining) {
        let node = new ListNode(remaining);
        result.next = node;         
    }
    
    return resultHead;
}