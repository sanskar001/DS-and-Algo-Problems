// Trapping Rain Water

/*
Problem Description: Given n non-negative integers representing an elevation map where the width of each bar is 1,
compute how much water it can trap after raining.

Example:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. 
In this case, 6 units of rain water (blue section) are being trapped.
*/

// Solution: Time complexity - O(n) and Space complexity - O(n)

const trap = function(height){

    const maxLeft = [];
    const maxRight = [];
    let totalTrappedWater = 0;

    let maxLeftValue = 0;
    for(let i = 0; i < height.length; i++){
        maxLeftValue = Math.max(maxLeftValue, height[i]);
        maxLeft.push(maxLeftValue);
    }

    let maxRightValue = 0;
    for(let i = height.length-1; i >= 0; i--){
        maxRightValue = Math.max(maxRightValue, height[i]);
        maxRight.push(maxRightValue);
    }

    // reversing maxRight array
    maxRight.reverse();

    // let calculate trapped water.
    for(let i = 0; i < height.length; i++){
        totalTrappedWater += Math.min(maxLeft[i], maxRight[i]) - height[i];
    }

    return totalTrappedWater;
}

// Testing

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));   // 6 units
console.log(trap([4,2,0,3,2,5]));               // 9 units
