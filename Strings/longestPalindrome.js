// Longest Palindromic Substring

/*

Given a string s, return the longest palindromic substring in s.

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"

*/

// Solution-1 Time complexity - O((n^3)/2) and Space complexity - O(1)

// var longestPalindrome = function(s) {

//     // It is function which checks string is palindromic.  - O(n/2)
//     function isPalindrome(inputString){

//         // Initialize pointers.
//         let left = 0;
//         let right = inputString.length - 1;

//         while(left <= right){

//             if(inputString[left] === inputString[right]){
//                 // Update pointers
//                 left++;
//                 right--;
//             }
//             else {
//                 return false;
//             }
//         }

//         return true;
//     }

//     // Initialize maxLen
//     let maxSubStringLen = 0;
//     let result = '';

//     for(let i = 0; i < s.length; i++){
        
//         for(let j = i+1; j < s.length + 1; j++){
            
//             let subString = s.slice(i, j);

//             if(isPalindrome(subString)){
//                 if(maxSubStringLen <= subString.length){
//                     result = subString;
//                     maxSubStringLen = subString.length;
//                 }
//             }
//         }

//     }

//     return result;
// };

// Solution-2 Time complexity - O((n^2)/2) - O(n^2) and Space complexity - O(1)

var longestPalindrome = function(s) {

    // Initialize variables
    let maxLen = 0;
    let result  = '';
    let left, right;

    // Iterate through every character in string
    for(let i = 0; i < s.length; i++){

        let palindromicSubString = '';

        // Odd palindrome condition
        // Initialize pointers
        left = i;
        right = i;

        while(left >= 0 && right < s.length && s[left] === s[right]){

            // Setting palindrome sub-string
            palindromicSubString = s.slice(left, right + 1);

            if(maxLen < palindromicSubString.length){
                result = palindromicSubString;
                maxLen = palindromicSubString.length;
            }
            
            // Updating pointers
            left--;
            right++;
        }

        // Even palindrome condition
        left = i;
        right = i + 1;

        while(left >= 0 && right < s.length && s[left] === s[right]){

            // Setting palindrome sub-string
            palindromicSubString = s.slice(left, right + 1);

            if(maxLen < palindromicSubString.length){
                result = palindromicSubString;
                maxLen = palindromicSubString.length;
            }
            
            // Updating pointers
            left--;
            right++;
        }
        
    }

    return result;
    
}

// Testing

console.log(longestPalindrome(''));                // ''
console.log(longestPalindrome('abba'));            // abba
console.log(longestPalindrome('aaaa'));            // aaaa
console.log(longestPalindrome('abaacbbcd'));       // cbbc 
console.log(longestPalindrome('babad'));           // bab
