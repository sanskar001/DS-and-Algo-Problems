// Chanllenge:  averagePair

/*

Description: Write a function called averagePair. Given a sorted array of integers and target average, determines if there is a pair of values in the array where the average of the pair is equal to target average. There may be more than one pair that matches the average target.  

eg.
averagePair([1, 2, 3], 2.5)   // true [2, 3]
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) // true [6, 10]
averagePair([-1, 0, 3, 4, 5, 6], 4.1)    // false
averagePair([], 4)   // false

*/

// Solution-1 (Time complexity - O(n2) and Space complexity - O(n))

// function averagePair(inputArr, targetAvg){

//     for(let i = 0; i < inputArr.length-1; i++){
//         for(let j = i + 1; j < inputArr.length; j++){
//             if(inputArr[i] + inputArr[j] === targetAvg * 2){
//                 return true;
//             }
//         }
//     }

//     return false;
// }

// Solution-2 (Time complexity - O(n) and Space complexity - O(n))
// Using multiple pointer

function averagePair(inputArr, targetAvg){

    // Short circuit condition
    if(inputArr[0] > targetAvg * 2){
        return false;
    }

    let left = 0;
    let right = inputArr.length - 1;

    while(left < right){
        let mySum = inputArr[left] + inputArr[right];

        if(mySum === targetAvg * 2){
            return true;
        }
        else if(mySum < targetAvg * 2){
            left++;
        }
        else {
            right--;
        }
    }

    return false;
}


// Testing

console.log(averagePair([1, 2, 3], 2.5));   // true [2, 3]
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true [6, 10]
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));    // false
console.log(averagePair([], 4));   // false
