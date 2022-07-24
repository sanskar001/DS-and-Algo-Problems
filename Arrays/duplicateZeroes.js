// Problem : Duplicate zeroes

/*
Given a fixed-length integer array arr, duplicate each occurrence of zero, 
shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written. 
Do the above modifications to the input array in place and do not return anything.

Example 1:

Input: arr = [1,0,2,3,0,4,5,0]
Output: [1,0,0,2,3,0,0,4]
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

Example 2:

Input: arr = [1,2,3]
Output: [1,2,3]
Explanation: After calling your function, the input array is modified to: [1,2,3]

*/

// Solution-1 Time complexity - O(n2) and Space complexity - O(1)

// var duplicateZeros = function(arr) {
    
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === 0){
//             arr.splice(i, 0, 0);
//             arr.pop();
//             i = i + 1;
//         }
//     }
// };



// Solution-2 Time complexity - O(n2) and Space complexity - O(1)

// var duplicateZeros = function(arr) {
    
//     let prev, curr;
    
//     for(let i = 0; i < arr.length-1; i++){
//         if(arr[i] === 0){
//             for(let j = i + 1; j < arr.length; j++){
//                 if(j == i+ 1){
//                     prev = arr[j];
//                     continue;
//                 }
                
//                 curr = arr[j];
//                 arr[j] = prev;
//                 prev = curr;
//             }
            
//             arr[i+1] = 0;
//             i++;
//         }
//     }
// }

// Solution-3 Time complexity -O(n) and Space complexity - O(1)

var duplicateZeros = function(arr){

    // First count the zeroes in arr
    let countZero = 0;
    
    for(let n of arr){
        if(n === 0) countZero++;
    }

    // Lets shift array elements by countZero times.
    let newLen = arr.length + countZero;

    for(let i = arr.length - 1, j = newLen - 1; i >= 0; i--){
        if(arr[i] === 0){
            arr[j] = arr[i];
            j--;
            arr[j] = arr[i];
        }
        else {
            arr[j] = arr[i];
        }
        j--;
    }

    // pop all newly shifted out of array elements.
    for(let c = 0; c < countZero; c++){
        arr.pop();
    }

    // return arr;
}

console.log(duplicateZeros([1,0,2,3,0,4,5,0]));
console.log(duplicateZeros([1,2,3]));
console.log(duplicateZeros([0,0,0]));
console.log(duplicateZeros([1,0,2,3]));
