/*

Group Anagrams

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.


Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

*/

// Solution-1: Time complexity - O(n*n*k) and Space complexity - O(k*n)  k: maximum size of string inside  input array

// var groupAnagrams = function(strs) {

//     const validAnagram = function(string1, string2){

//         // length check
//         if(string1.length != string2.length){
//             return false;
//         }
    
//         // create object of string2 letter count.
//         const string2Obj = {};
//         for(let letter of string2){
//             string2Obj[letter] = (string2Obj[letter] || 0) + 1;
//         }
    
//         // Check letter inside string1
//         for(let letter of string1){
//             if(string2Obj.hasOwnProperty(letter)){
//                 string2Obj[letter] -= 1;
//             }
//             else {
//                 return false;
//             }
//         }
    
//         // final check of letter count in string object.
//         for(let val of Object.values(string2Obj)){
//             if(val != 0){
//                 return false;
//             }
//         }
    
//         return true;
//     }

//     let result = [];
//     let tempObj = {};
//     let count = 0;
//     let tempArr;

//     for(let i = 0; i < strs.length; i++){
//         if(!tempObj.hasOwnProperty(strs[i])){
//             tempObj[strs[i]] = count;

//             tempArr = [strs[i]];
//         }
//         else {
//             continue;
//         }

//         for(let j = i+1; j < strs.length; j++){
//             if(validAnagram(strs[j], strs[i])){
//                 // If string[j] is anagram of string[i] then update temp object and array.
//                 tempObj[strs[j]] = count;
//                 tempArr.push(strs[j]);
//             }
//         }
//         result.push(tempArr);
//         count++;
//     }

//     return result;
// }; 


// Solution-2: Time complexity - O(n*k*logk) and Space complexity - O(k*n) k: maximum size of string inside  input array

// var groupAnagrams = function(strs) {
    
//     let tempObj = {};
    
//     for (let str of strs) {

//         // Sorting string
//         let sorted = str.split("").sort().join("");
        
//         if (tempObj.hasOwnProperty(sorted)) {
//             tempObj[sorted] = [...tempObj[sorted], str];
//         } 
//         else {
//             tempObj[sorted] = [str];
//         } 
//     }
//     return Array.from(Object.values(tempObj));
// };

// Solution-3 
// Time Complexity: O(n*k) where n is the size of input array and k is the maximum length of string in input array
// Space Complexity: O(n)

var groupAnagrams = function(strs) {
    
    let res = {};
    
    for (let str of strs) {
        
        let count = new Array(26).fill(0);
        
        for (let char of str){
            count[char.charCodeAt()-97]++;
        }

        
        let key = count.join("#");

        // console.log(key);

        if(res[key]){
            res[key].push(str);
        }
        else {
            res[key] = [str];
        }
    }
    return Object.values(res);
};

// Testing:

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams(["", ""]));
console.log(groupAnagrams([" "]));
