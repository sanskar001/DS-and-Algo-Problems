// Problem: Product of array except self.

/*
Problem description: Given an integer array nums, return an array answer such that answer[i] is equal
to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.
*/

// Solution1: Time complexity - O(n2) and Aux Space complexity - O(1)

// const productExceptSelf = function(nums) {
//     const answer = [];

//     for(let i = 0; i < nums.length; i++){
//         let p = 1;
//         for(let j = 0; j < nums.length; j++){
//             if(j !== i){
//                 p = p * nums[j];
//             }
//         }
//         answer.push(p);
//     }

//     return answer;
// };

// Solution-2 Time complexity - O(n) and Aux Space complexity - O(n)

// const productExceptSelf = function(nums) {

//     if(nums.length === 1){
//         return;
//     }

//     const leftProducts = [1];
//     const rightProducts = [1];

//     let leftProductValue = 1;
//     for(let i = 1; i < nums.length; i++){
//         leftProductValue *= nums[i-1];
//         leftProducts.push(leftProductValue);
//     }

//     let rightProductValue = 1;
//     for(let i = nums.length-2; i >= 0; i--){
//         rightProductValue *= nums[i+1];
//         rightProducts.push(rightProductValue);
//     }

//     // Reversing "rightProducts"
//     rightProducts.reverse();

//     const answer = [];

//     for(let i = 0; i < nums.length; i++){
//         answer.push(leftProducts[i] * rightProducts[i]);
//     }

//     return answer;
    
// };

// Solution-3 Time complexity - O(n) and Aux Space complexity - O(1)

const productExceptSelf = function(nums) {

    if(nums.length === 1){
        return;
    }

    const answer = [1];

    let leftProductValue = 1;
    for(let i = 1; i < nums.length; i++){
        leftProductValue *= nums[i-1];
        answer.push(leftProductValue);
    }

    let rightProductValue = 1;
    answer[nums.length-1] *= rightProductValue;
    for(let i = nums.length-2; i >= 0; i--){
        rightProductValue *= nums[i+1];
        answer[i] *= rightProductValue;
    }

    return answer;
    
};

// Testing:

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
