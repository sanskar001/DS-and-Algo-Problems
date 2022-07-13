// Problem: Two Sum

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

// Solution2: Time complexity - O(n) and Space complexity - O(n)  -- Using Hash (Object)

const twoSum = function(nums, target) {

    const tempObj = {};

    for(let i = 0; i < nums.length; i++){
        tempObj[target - nums[i]] = i;
    }

    console.log(tempObj);

    for(let i = 0; i < nums.length; i++){
        if(tempObj.hasOwnProperty(nums[i]) && i !== tempObj[nums[i]]){
            return [i, tempObj[nums[i]]];
        }
    }
};

// Testing:

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
