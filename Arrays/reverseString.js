/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

// Reverse String (leetcode)

// Solution-1 Using Array.prototype.reverse() method.

// var reverseString = function(s) {
//     return s.reverse();    
// };


// Solution-2

// var reverseString = function(s) {
//     let reverseArr = [];
    
//     for(let i = s.length-1; i >= 0; i--){
//         reverseArr.push(s[i]);
//     }
    
//     return reverseArr;
// };

// Solution-3 (Time complexity - O(n/2) and Aux Space complexity - O(1))

var reverseString = function(s){
    
    let left = 0;
    let right = s.length - 1;
    let temp;
    
    while(left < right){
        
        // swapping 
        temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        
        // Move close to each other.
        left++;
        right--;
    }
    
    return s;
}
