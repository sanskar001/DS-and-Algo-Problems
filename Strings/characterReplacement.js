// Longest Repeating Character Replacement

/*
You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.

*/

// Solution-1 - Time exceeded solution.

// var characterReplacement = function(s, k) {

//     let maxLen = 0;
//     let charObj = {};

//     for(let i = 0; i < s.length; i++){

//         // Resetting char object 
//         charObj = {};
        
//         for(let j = i; j < s.length; j++){
//             let char = s[j];
//             let maxFreq = 0;
//             let subArrLen = j - i + 1;

//             charObj[char] = (charObj[char] || 0) + 1;

//             // console.log(charObj);
            
//             for(let key in charObj){
//                 maxFreq = Math.max(maxFreq, charObj[key]);
//             }
//             if( subArrLen - maxFreq <= k){
//                 maxLen = Math.max(maxLen, subArrLen);
//                 // console.log(s.slice(i, j + 1));
//             }
//         }
//     }

//     return maxLen;
// };


// Solution-2 (Time complexity - O(26 * n) => O(n) and Aux Space complexity - O(26) => O(1))

var characterReplacement = function(s, k) {

    let maxLen = 0;
    const charObj = {};       // Object to store frequency of characters
    let i = 0, j = 0;         // Two pointer for window.

    while(j < s.length){

        let currentChar = s[j];
        let windowSize = j - i + 1;
        let maxFreq = 0;
        
        charObj[currentChar] = (charObj[currentChar] || 0) + 1;

        for(let key in charObj){
            maxFreq = Math.max(maxFreq, charObj[key]);
        }

        if((windowSize - maxFreq) <= k){
            maxLen = Math.max(maxLen, windowSize);
            j++;
        }
        else {

            // Decreament 
            charObj[s[i]] = charObj[s[i]] - 1;
            charObj[s[j]] = charObj[s[j]] - 1;
            i++;
            // continue;
        }
    }

    return maxLen;
    
};

// Testing:

console.log(characterReplacement("AABABBA", 1));
console.log(characterReplacement("ABAB", 2)); 
console.log(characterReplacement("AAA", 2)); 
console.log(characterReplacement("", 2)); 
