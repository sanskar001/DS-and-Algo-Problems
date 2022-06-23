// Chanllenge: isSubsequence

/*

Description: Write a function called isSubsequence which take two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In the other words, the function should check whether the characters in the first string appear somewhere in the second string. without their order change.

eg.
isSubsequence('hello', 'hello world')  // true
isSubsequence('sing', 'sting')         // true
isSubsequence('abc', 'acb')            // false

*/

// Solution-1 (Time complexity - O(n) and Space complexity O(n))

function isSubsequence(subString, mainString){

    if(subString.length > mainString.length){
        return false;
    }

    for(let i = 0, j = 0; i < mainString.length; i++){
        if(mainString[i] === subString[j]){
            if(j + 1 === subString.length){
                return true;
            }
            j++;
        }
    }

    return false;
}

// Solution-2

// const isSubsequence = function(string1, string2){
//     if(string1.length > string2.length){
//         return false;
//     }
//     let string1Length = string1.length;
//     for(let i = string2.length-1; i>-1; i--){
//         if(string2[i] === string1[string1Length-1]){
//             string1Length--;
//         }
//         if(string1Length === 0){
//             return true;
//         }
//     }
//     return false;
// }

// Testing

console.log(isSubsequence('hello', 'hello world'));  // true
console.log(isSubsequence('sing', 'sting'));         // true
console.log(isSubsequence('abc', 'acb'));            // false
console.log(isSubsequence('ceg', 'abcdefgh'));       // true
console.log(isSubsequence('ceg', 'abcdgfeh'));       // false
console.log(isSubsequence('ceg', 'abcdgfehg'));       // true
