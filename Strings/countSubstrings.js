// Problem: Palindromic Substrings

/*
Given a string s, return the number of palindromic substrings in it.
A string is a palindrome when it reads the same backward as forward.
A substring is a contiguous sequence of characters within the string. 

Example 1:

Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
Example 2:

Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

*/

// Solution-1 (Time complexity - O(n3) and Aux Space complexity - O(1)); 
// BRUTE FORCE APPROACH

// var countSubstrings = function(s) {

//     // Function for checking palindrome
//     function isPalindrome(inputString){

//         let left = Math.floor((inputString.length - 1) / 2);
//         let right = (inputString.length % 2 === 0)? left + 1 : left;

//         while(left >= 0 && right < inputString.length){

//             if(inputString[left] === inputString[right]){
//                 left--;
//                 right++;
//             }
//             else {
//                 return false;
//             }
//         }

//         return true;
//     }

//     //////////////////////////////////////////////////

//     // const result = [];
//     let count = 0;

//     for(let i = 0; i < s.length; i++){

//         for(let j = i+1; j < s.length + 1; j++){

//             let subString = s.slice(i, j);

//             if(isPalindrome(subString)){
//                 // result.push(subString);
//                 count++;
//             }
//         }
//     }

//     // return result;
//     return count;
// };

// Solution-1 (Time complexity - O(n2) and Aux Space complexity - O(1));

var countSubstrings = function(s){

    // Initialize variables
    let count = 0;
    let left, right;

    for(let i = 0; i < s.length; i++){

        // Odd palindrome condition
        // Setting pointers
        left = i;
        right = i;

        while(left >= 0 && right < s.length && s[left] === s[right]){
            
            count++;
            left--;
            right++;
        }

        // Even palindrome condition
        // Setting pointers
        left = i;
        right = i + 1;

        while(left >= 0 && right < s.length && s[left] === s[right]){
            
            count++;
            left--;
            right++;
        }
    }

    return count;
}

// Testing: 

console.log(countSubstrings('abc'));            // 3
console.log(countSubstrings('aaa'));            // 6
console.log(countSubstrings(''));               // 0
console.log(countSubstrings('aaabab'));         // 11
console.log(countSubstrings('aaabb'));          // 9
