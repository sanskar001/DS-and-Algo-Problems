// Chanllenge:  minSubArrayLen

/*

Description: Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
This function should return the minimal length of a contigous subarray of which the sum is greater than or equal to the integer passed to the function, if there is not one return 0 instead.

eg. 
minSubArrayLen([2, 3, 1, 2, 4, 3], 7)   // 2
minSubArrayLen([2, 1, 6, 5, 4], 9)      // 2
minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)  // 1
minSubArrayLen([1, 2, 3], 7)       // 0

*/

// Solution-1 (Time complexity - O(n2) and Space complexity - O(n))

// function minSubArrayLen(inputArr, num){


//     let minLen = inputArr.length;
//     let sum, len;
    
//     for(let i = 0; i < inputArr.length; i++){
//         sum = 0;
//         len = 0;
//         for(let j = i; j < inputArr.length; j++){
//             sum += inputArr[j];
//             len++;
//             if(sum >= num){
//                 minLen = (minLen >= len)? len : minLen;
//                 break;
//             }
//         }
//         if(sum < num && i === 0){
//             return 0;
//         }
//     }

//     return minLen;
// }

// Solution-2 (Time complexity - O(n) and Space complexity - O(n))

function minSubArrayLen(inputArr, targetNum){

    let minLen = inputArr.length;
    let len = 0;
    let sum = 0;

    for(let i = 0; i < inputArr.length; i++){
        sum += inputArr[i];
        len++;
        if(sum >= targetNum){
            minLen = (minLen >= len)? len : minLen;
            break;
        }
    }

    if(sum < targetNum){
        return 0;
    }

    for(let i = 1; i < inputArr.length-1; i++){
        sum = sum - inputArr[i-1];
        len--;
        if(sum >= targetNum){
            minLen = len;
            continue;
        }
        sum = sum + inputArr[i+len];
        len++;
        minLen = len;
    }

    if(inputArr[inputArr.length - 1] >= targetNum){
        return 1;
    }

    return minLen;
}

// Solution-3  (Time complexity - O(n2) and Space complexity - O(n))

// const minSubArrayLen = function(arr, target){
//     let minLen = Infinity;
//     let count = 0;
//     for(let i=0; i<arr.length; i++){
//         let sum = 0;
//         let len = 0;
//         for(let j=i; j<arr.length; j++){
//             sum = sum + arr[j];
//             len++;
//             if(sum >= target){
//                 minLen = (minLen >= len)? len:minLen;
//                 count++;
//             }
//         }
//     }
//     return count && minLen;
// }

// Testing

// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));   // 2
// console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));      // 2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));  // 1
console.log(minSubArrayLen([1, 2, 3], 7));       // 0
