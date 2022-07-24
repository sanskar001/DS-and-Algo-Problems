/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// Time complexity - O(nlogn) and Space complexity - O(1)
// var removeElement = function(nums, val) {

//     // Lets sort given nums.
//     nums.sort((a, b) => a - b);
//     let n = nums.length;
    
//     for(let i = 0, j = n - 1; i < n; i++){
//         if(nums[i] === val && i <= j){
//             // Swap 
//             let temp = nums[i];
//             nums[i] = nums[j];
//             nums[j] = temp;

//             j--;
//         }

//         // console.log(nums);
//     }

//     // pop all last given values
//     while(nums[nums.length - 1] === val){
//         nums.pop();
//     }

//     // console.log(nums);
// };

// Time complexity - O(n) and Space complexity - O(1)
var removeElement = function(nums, val) {

    let n = nums.length;
    let valCount = 0;

    // Count given target value
    for(let v of nums){
        if(v === val) valCount++;
    }

    for(let i = 0, j = 0; i < n - valCount; i++){

        while(nums[j] === val){
            j++;
        }

        nums[i] = nums[j];
        j++;
    }

    // pop last element from nums valCount times
    for(let c = 0; c < valCount; c++){
        nums.pop();
    }

    // console.log(nums);
};
