// Problem: Valid parentheses

/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

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

var isValid = function(s) {

    const stack = [];
    const openBrackets = ['[', '(', '{'];
    const closeBrackets = [']', ')', '}'];

    for(let i = 0; i < s.length; i++){
        if(openBrackets.includes(s[i])){
            stack.push(s[i]);
        }
        else if(closeBrackets.includes(s[i])){
            if(closeBrackets.indexOf(s[i]) === openBrackets.indexOf(stack[stack.length - 1])){
                stack.pop();
            }
            else {
                return false
            }
        }
    }

    return (stack.length === 0)? true : false;
    
};


// Testing:

console.log(isValid("[(({}{})(({})))][{()}]"));
console.log(isValid("[(({}{})(({})))][{()]"));
console.log(isValid("[]"));
console.log(isValid("[]]]]]"));
