// Problem: Container with most water

/*

Problem Description:

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of 
the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example:

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
In this case, the max area of water (blue section) the container can contain is 49.

*/

// Solution - (Time complexity - O(n2) and Aux Space complexity - O(1))
// BRUTE FORCE APPROACH

// const maxArea = function(height) {

//     if(height <= 1){
//         return 0;
//     }

//     let maxAreaValue = 0;
//     let waterArea = 0;

//     for(let i = 0; i < height.length - 1; i++){
        
//         for(let j = i + 1; j < height.length; j++){
            
//             waterArea = Math.min(height[i], height[j]) * (j - i);
//             maxAreaValue = Math.max(maxAreaValue, waterArea);
//         }
//     }

//     return maxAreaValue;
// };


// Solution - (Time complexity - O(n) and Aux Space complexity - O(1))
// Two Pointer Approach 

const maxArea = function(height) {

    if(height <= 1){
        return 0;
    }

    let maxAreaValue = 0;
    let waterArea = 0;
    let left = 0;
    let right = height.length - 1;

    while(right > left){

        waterArea = Math.min(height[left], height[right]) * (right - left);
        maxAreaValue = Math.max(maxAreaValue, waterArea);
        
        if(height[left] <= height[right]){
            left++;
        }
        else {
            right--;
        }
        
    }

    return maxAreaValue;
};

// Testing:

console.log(maxArea([1,8,6,2,5,4,8,3,7]));        // 49
console.log(maxArea([10]));                       // 0
console.log(maxArea([1,8,6,2,50,50,8,3,7]));        // 50
console.log(maxArea([2, 3, 2]));        // 4
console.log(maxArea([2, 2, 2, 2]));        // 6
console.log(maxArea([2, 3, 4, 1, 2]));        // 8
