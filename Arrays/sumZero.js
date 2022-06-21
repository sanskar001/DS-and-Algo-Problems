// Challenge: sumZero.

/*

Description: Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

eg. 
sumZero([-3, -2, -1, 0, 1, 2, 3])   // [-3, 3]
sumZero([-2, 1, 3, 4])   // undefined

*/

// Solution-1 (Time complexity - O(n2) and Space complexity -O(n))

// function sumZero(inputArr){

//     for(let i = 0; i < inputArr.length; i++){
//         for(let j = i+1; j < inputArr.length; j++){
//             if(inputArr[i] + inputArr[j] == 0){
//                 return [inputArr[i], inputArr[j]];
//             }
//         }
//     }
//     return undefined;
// }

// Solution-2 
// Using multiple pointer (Time complexity -O(n) and Space complexity - O(n))

function sumZero(inputArr){

    if(inputArr[0] > 0){
        return undefined;
    }

    let left = 0;
    let right = inputArr.length - 1;

    while(left < right){
        let sum = inputArr[left] + inputArr[right];
        if(sum === 0){
            return [inputArr[left], inputArr[right]];
        }
        else if(sum > 0){
            right--;
        }
        else {
            left++;
        }
    }
    return undefined;
}

// Testing

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));   // [-3, 3]
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
console.log(sumZero([-2, 1, 3, 4]));   // undefined
