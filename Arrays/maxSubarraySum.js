// Challenge - maxSubarraySum

/*

Description: Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

eg.
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)   // 10
maxSubarraySum([], 4) // null

*/

// Solution-1   (Time complexity - O(n2) and Space complexity - O(n))

// function maxSubarraySum(inputArr, n){
//     if(inputArr.length < n){
//         return null;
//     }
//     if(n <= 0){
//         return null;
//     }

//     let maxSum = -Infinity;
//     for(let i = 0; i < inputArr.length - n + 1; i++){
//         let sum = 0;
//         for(let j = i; j < i + n; j++){
//             sum += inputArr[j];
//         }
//         maxSum = (sum >= maxSum)? sum : maxSum;
//     }
//     return maxSum;
// }

// Solution-2 
// Using Sliding Window.

function maxSubarraySum(inputArr, num) {
    if (inputArr.length < num) {
        return null;
    }
    if (num <= 0) {
        return null;
    }

    let maxSum = 0;
    for(let i = 0; i < num; i++){
        maxSum += inputArr[i];
    }
    let tempSum = maxSum;
    for(let i = num; i < inputArr.length; i++){
        tempSum = (tempSum + inputArr[i]) - inputArr[i-num];
        maxSum = (maxSum <= tempSum)? tempSum : maxSum;
    }
    return maxSum;
}

// Testing:

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));    // 10
console.log(maxSubarraySum([], 4));              // null
console.log(maxSubarraySum([1, 2, 3], 4));        // null
console.log(maxSubarraySum([1, 2, 3, 3], 4));     // 9   
console.log(maxSubarraySum([4, 2, 1, 6], 1));     // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4));  // 13
