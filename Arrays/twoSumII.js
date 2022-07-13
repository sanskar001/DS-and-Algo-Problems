// Problem: Two Sum II - Input Array Is Sorted

// Solution1: Time complexity - O(n2) and Space complexity: O(1)

// const twoSum = function(nums, target) {

//     for(let i = 0; i < nums.length-1; i++){
//         for(let j = i+1; j < nums.length; j++){
//             if(nums[i] + nums[j] === target){
//                 return [i, j];
//             }
//         }
//     }
// };

// Solution2: Time complexity - O(n/2) and Space complexity - O(1)  -- Using Multiple pointer 

const twoSum = function(nums, target) {

    let left = 0;
    let right = nums.length-1;
    let sum = 0;

    while(left < right){
        sum = nums[left] + nums[right];

        if(sum === target){
            return [left+1, right+1];
        }
        else if(sum < target) {
            left++;
        }
        else {
            right--;
        }
    }
};

// Testing:

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([2, 3, 4], 6));
