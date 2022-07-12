// Problem: Maximum Product Subarray

/*
Problem Description: Given an integer array nums, find a contiguous non-empty subarray
within the array that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.
A subarray is a contiguous subsequence of the array.

Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
*/

// Solution-1 Time complexity - O(n2)  and Space complexity - O(1)

// const maxProduct = function(nums){
    
//     let maxProductValue = nums[0];

//     for(let i = 0; i < nums.length; i++){
//         let product = 1;
//         for(let j = i; j < nums.length; j++){
//             product = product * nums[j];
//             maxProductValue = Math.max(maxProductValue, product);
//         }
//     }

//     return maxProductValue;
// }

// Solution-2 Time complexity - O(n)  and Space complexity - O(n)

const maxProduct = function(nums){
    
    const minProduct = [nums[0] || 1];
    const maxProduct = [nums[0] || 1];
    let maxProductValue = nums[0];

    for(let i = 1; i < nums.length; i++){

        if(nums[i] === 0){
            minProduct.push(1);
            maxProduct.push(1);
            maxProductValue = Math.max(maxProductValue, nums[i]);
        }
        else {
            minProduct.push(Math.min(minProduct[i-1] * nums[i], maxProduct[i-1] * nums[i], nums[i]));
            maxProduct.push(Math.max(minProduct[i-1] * nums[i], maxProduct[i-1] * nums[i], nums[i]));
            maxProductValue = Math.max(maxProductValue, maxProduct[i]);
        }
    }

    console.log(nums);
    console.log(maxProduct);
    console.log(minProduct);

    return maxProductValue;
}



// Testing: 

console.log(maxProduct([2,3,-2,4]));   // 6
console.log(maxProduct([-2,0,-1]));  // 0
console.log(maxProduct([0, 2]));  // 2
console.log(maxProduct([3, -1, 4]));  // 4
