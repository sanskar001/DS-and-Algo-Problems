// Challenge: Maximum and minimum of an array using minimum number of comparisons

// Solution-1 (Time complexity - O(nlogn) and Space complexity - O(1))

// const getMaxMin = function(inputArr){

//     // Short cicruit condition
//     if(inputArr.length === 0){
//         return [null, null];
//     }

//     // Lets sort the array in ascedning order.
//     inputArr.sort((a, b) => a - b);

//     return [inputArr[inputArr.length - 1], inputArr[0]];   // [max, min]
// };

// Solution-2 (Time complexity - O(n) and Space complexity - O(1))

// const getMaxMin = function(inputArr){

//     // if array is empty then return null
//     if(inputArr.length === 0){
//         return [null, null];
//     }

//     let maxValue, minValue;

//     // if array has one element return its as max and min.
//     if(inputArr.length === 1){
//         maxValue = inputArr[0];
//         minValue = inputArr[0];
//     }
//     else {
//         // if input array has more than one element.
//         maxValue = (inputArr[0] >= inputArr[1])? inputArr[0] : inputArr[1];
//         minValue = (inputArr[0] >= inputArr[1])? inputArr[1] : inputArr[0];

//         for(let i = 2; i < inputArr.length; i++){
//             maxValue = (maxValue <= inputArr[i])? inputArr[i] : maxValue;
//             minValue = (minValue >= inputArr[i])? inputArr[i] : minValue;
//         }
//     }

//     return [maxValue, minValue];
    
// };

// Solution-3 (Time complexity - O(n/2) and Space complexity - O(1))

const getMaxMin = function(inputArr){

    // if array is empty then return null
    if(inputArr.length === 0){
        return [null, null];
    }

    let num = inputArr.length;
    let i;

    // If length of array is even
    if(num % 2 == 0){
        maxValue = (inputArr[0] >= inputArr[1])? inputArr[0] : inputArr[1];
        minValue = (inputArr[0] >= inputArr[1])? inputArr[1] : inputArr[0];
        i = 2;
    }
    // If length is odd.
    else {
        maxValue = minValue = inputArr[0];
        i = 1;
    }
    
    for(; i < num; i += 2){
        if(inputArr[i] <= inputArr[i + 1]){
            maxValue = (inputArr[i + 1] >= maxValue)? inputArr[i + 1] : maxValue;
            minValue = (inputArr[i] <= minValue)? inputArr[i] : minValue;
        }
        else {
            maxValue = (inputArr[i] >= maxValue)? inputArr[i] : maxValue;
            minValue = (inputArr[i + 1] <= minValue)? inputArr[i + 1] : minValue;
        }
    }

    return [maxValue, minValue];
};


// Testing:

console.log(getMaxMin([1,2,4,5,-3,91]));
console.log(getMaxMin([]));
