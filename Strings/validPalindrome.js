// Problem: Valid Palidrome

/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.


Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

*/


// Solution: (Time Complexity - O(n/2) and Space Complexity - O(1))

const isPalindrome = function(s) {

    const newString = s.toLowerCase().replace(/([^a-z0-9]|\s)+/g, "");
    console.log(newString);

    if(s.length === 0) return true;
    
    let left = 0;
    let right = newString.length - 1;

    while(left <= right){

        if(newString[left] === newString[right]){
            left++;
            right--;
        }
        else {
            return false;
        }
    }

    return true;
}; 


// Testing:

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("   "));
console.log(isPalindrome("a bc dcb a  "));
console.log(isPalindrome("Hello  World  "));
