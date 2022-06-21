// Challenge - countUniqueValues

/*

Description: Implement a function called countUniqueValues which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

eg.
countUniqueValues([1,1,1,1,2])   // count: 2  [1, 2]
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])  // count: 7
countUniqueValues([])  // count:0

*/

// Solution-1 (Time complexity - O(n) and Space complexity - O(n))

// function countUniqueValues(inputArr){
//     const mySet = new Set(inputArr);
//     return mySet.size;
// }

// Solution-2 (Time complexity - O(n2) and Space complexity - O(n))

// function countUniqueValues(inputArr){
//     let tempArr = [];
//     for(let val of inputArr){
//         if(!tempArr.includes(val)){
//             tempArr.push(val);
//         }
//     }
//     return tempArr.length;
// }

// Solution-3 (Time complexity - O(n) and Space complexity - O(n))

// function countUniqueValues(inputArr){
//     let count = 0;

//     if(inputArr.length >= 1){
//         count = 1;
//     }
    
//     for(let i = 1; i < inputArr.length; i++){
//         if(inputArr[i] !== inputArr[i-1]){
//             count++;
//         }
//     }

//     return count;
// }

// Solution-4 (Time complexity - O(n) and Space complexity - O(n))
// Using multiple pointer

function countUniqueValues(inputArr){

    if(inputArr.length === 0) return 0;

    let i = 0;
    for(j = 1; j < inputArr.length; j++){
        if(inputArr[i] !== inputArr[j]){
            i++;
            inputArr[i] = inputArr[j];
        }
    }
    return i+1;
}

// Testing

console.log(countUniqueValues([1,1,1,1,2]));   // count: 2  [1, 2]
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));  // count: 7
console.log(countUniqueValues([]));  // count:0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // count: 4
