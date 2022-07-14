// Problem: 3Sum

/*

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, 
and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.


Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[1] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

*/

// Solution-1 (Time complexity - O(n3) and Space complexity - O(1)) 
// BRUTE FORCE APPROACH

// const threeSum = function(nums){

//     let result = [];

//     // Lets sort "nums" array in ascending order.
//     nums.sort((a, b) => a - b);

//     for(let i = 0; i < nums.length - 2; i++){
        
//         if(i > 0 && nums[i] === nums[i - 1]) continue;
        
//         for(let j = i+1; j < nums.length-1; j++){
            
//             if(j > i+1 && nums[j] === nums[j - 1]) continue;
            
//             for(let k = j+1; k < nums.length; k++){
                
//                 if(k > j+1 && nums[k] === nums[k - 1]) continue;
                
//                 if(nums[i] + nums[j] + nums[k] === 0){
                    
//                     result.push([nums[i], nums[j], nums[k]]);
//                 }
//             }
//         }
//     }

//     return result;
// }


// Solution-2 (Time complexity - O(nlogn + n2) => O(n2) and Aux Space complexity - O(1)) 
// Sorting and Two Pointer Approach 

const threeSum = function(nums){

    let result = [];
    let left, right, target;
    let sum;

    // Lets sort "nums" array in ascending order.
    nums.sort((a, b) => a - b);

    for(let i = 0; i < nums.length - 2; i++){

        if(i > 0 && nums[i] === nums[i - 1]) continue;

        left = i + 1;
        right = nums.length-1;
        target = 0 - nums[i];

        while(left < right){

            sum = nums[left] + nums[right];

            if(sum === target){
                result.push([nums[i], nums[left], nums[right]]);

                while(nums[left] === nums[left + 1]) left++;
                while(nums[right] === nums[right - 1]) right--;
                
                left++;
                right--;
            }
            else if (sum < target){
                left++;
            }
            else {
                right--;
            }
        }
    }

    return result;
}

// Testing:

console.log(threeSum([-1,0,1,2,-1,-4]));               // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 0, 0, 0, 0]));                //[[0, 0, 0]]
console.log(threeSum([]));                             // []
console.log(threeSum([-4, -1, 0, 1, 1, 1, 3, 3]));     // [[-4, 1, 3], [-1, 0, 1]]
