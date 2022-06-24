// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

// Solution-1 (Time complexity - O(n^2) and Aux Space complexity - O(1))

// var maxSubArray = function(nums) {
    
//     let maxSum = nums[0];
    
//     for(let i = 0; i < nums.length; i++){
//         let tempSum = nums[i];
//         for(let j = i+1; j < nums.length; j++){
//             maxSum = (maxSum <= tempSum)? tempSum : maxSum;
//             tempSum += nums[j];
//         }
//         maxSum = (maxSum <= tempSum)? tempSum : maxSum;
//     }
//     return maxSum;
// };

// Solution-2 (Time complexity - O(n) and Space complexity O(1))
// Using Kadane Algorithm

var maxSubArray = function(nums){
    
    let tempSum = nums[0];
    let maxSum = tempSum;
    
    for(let i = 1; i < nums.length; i++){
        tempSum = Math.max(tempSum + nums[i], nums[i]);
        maxSum = Math.max(maxSum, tempSum);
    }
    
    return maxSum;
}
