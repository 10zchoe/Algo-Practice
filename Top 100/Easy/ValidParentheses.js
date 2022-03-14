/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false
 */

/**
 * @param {string} s
 * @return {boolean}
 */

/* 
PsuedoCode
//create a stack
//store open strings in stack 
//if we encounter a closed one that matches the top open string 
//pop off the top open string 
//continue until the length of stack is 0
//if length of stack is 0, return true since they all match
//else return false
*/

var isValid = function (str) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
      stack.push(str[i]);
    }

    if (str[i] === ")") {
      if (stack.pop() === "(") {
      } else return false;
    }

    if (str[i] === "}") {
      if (stack.pop() === "{") {
      } else return false;
    }

    if (str[i] === "]") {
      if (stack.pop() === "[") {
      } else return false;
    }
  }
  if (stack.length === 0) {
    return true;
  } else return false;
};
