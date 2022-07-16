//  Longest Substring Without Repeating Characters
/*
Example:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

*/

// Solution: Time complexity - O(n) and Space complexity - O(m)  m - number of distinct letter in string.

var lengthOfLongestSubstring = function(s) {

    const seen = {};
    let maxLength = 0;
    let start = 0;

    for(let i = 0; i < s.length; i++){
        let char = s[i];
        if(seen[char]){
            start = Math.max(start, seen[char]);
        }

        maxLength = Math.max(maxLength, i - start + 1);
        seen[char] = i + 1;
    }

    return maxLength;
    
};


// Testing:

console.log(lengthOfLongestSubstring('Thisisawesome'));
console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
