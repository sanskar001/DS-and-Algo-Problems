//  Challenge: findLongestSubstring.

/*

Description: Write a function called findLongestSubstring, which accepts a string and return length of the longest substring with all distinct characters.

eg.
findLongestSubstring('')   // 0
findLongestSubstring('rithmschool')   // 7
findLongestSubstring('thisisawesome')   // 6
findLongestSubstring('thecatinthehat')   // 7
findLongestSubstring('bbbbb')   // 1
findLongestSubstring('longestsubstring')   // 8
findLongestSubstring('thisishowwedoit')   // 6

*/

// Solution-1 (Time complexity - O(n2) and Space complexity - O(n))

// const findLongestSubstring = function(inputString){

//     let len = 0;
//     let maxLen = len;
//     for(let i = 0, j = 1; j < inputString.length+1; j++){
//         len = j - i;
//         if(inputString.slice(i, j).includes(inputString[j])){
//             maxLen = (maxLen <= len)? len : maxLen;
//             i = i + inputString.slice(i, j).indexOf(inputString[j]) + 1;
//         }
//     }

//     return Math.max(maxLen, len);
// };

// Solution-2 

// const findLongestSubstring = function (inputString) {
//     let tempArr = [];          // Temporary Array
//     let maxLen = 0;
//     let len = 0;
//     for (let i = 0; i < inputString.length; i++) {
//         if (tempArr.includes(inputString[i])) {
//             tempArr = tempArr.splice(tempArr.indexOf(inputString[i]) + 1);
//             tempArr.push(inputString[i]);
//             len = tempArr.length;
//         }
//         else {
//             tempArr.push(inputString[i]);
//             len++;
//         }
//         maxLen = (maxLen < len) ? len : maxLen;
//         // console.log(` TempArr: ${tempArr}, Character: ${inputString[i]}, len: ${len} and maxlen: ${maxLen}`);
//     }
//     return maxLen;
// };

// Solution-3 (Time complexity - O(n) and Space complexity - O(n))

function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (seen[char]) {
        start = Math.max(start, seen[char]);
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1);
      // store the index of the next char so as to not double count
      seen[char] = i + 1;
    }
    return longest;
  }

// Testing:
console.log(findLongestSubstring('abcdef'));   // 6
console.log(findLongestSubstring(''));   // 0
console.log(findLongestSubstring('rithmschool'));   // 7
console.log(findLongestSubstring('thisisawesome'));   // 6
console.log(findLongestSubstring('thecatinthehat'));   // 7
console.log(findLongestSubstring('bbbbb'));   // 1
console.log(findLongestSubstring('longestsubstring'));   // 8
console.log(findLongestSubstring('thisishowwedoit'));   // 6
