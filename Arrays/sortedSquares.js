/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Time complexity - O(nlogn) and Space complexity - O(1)
// var sortedSquares = function(nums) {
    
//     for(let i = 0; i < nums.length; i++){
//         nums[i] = nums[i] ** 2;
//     }
    
//     // sort square nums array
//     nums.sort((a, b) => a - b);
    
//     return nums;
// };

// Solution2: Time complexity - O(n) and Space complexity - O(n)

/*

input: [-12, -7, -3, 2, 3, 11]

// Rearrange this input array using two pointer approach

[144, 121, 49, 9, 9, 4]


// Reverse this above result array
[4, 9, 9, 49, 121, 144]
*/

var sortedSquares = function(nums){
    
    const result = [];
    let left = 0;
    let right = nums.length - 1;
    
    while(left <= right){
        
        if(Math.abs(nums[left]) <= Math.abs(nums[right])){
            result.push(nums[right] ** 2);
            right--;
        }
        else {
            result.push(nums[left] ** 2);
            left++;
        }
    }
    
    // Reverse array
    return result.reverse();
}
