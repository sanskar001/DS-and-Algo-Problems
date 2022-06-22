// Chanllenge: areThereDuplicates

/*

Description: Implement a function called areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this problem using either frequency counter or multiple pointer.

eg.
areThereDuplicates(1, 2, 3)             // false;
areThereDuplicates(1, 2, 2)             // true;
areThereDuplicates('a', 'b', 'c', 'a')  // true;
areThereDuplicates()                    // false;
areThereDuplicates(true, false, true)   // true;

*/

// Solution-1 (Time complexity - O(n2) and Space complexity - O(n))

// function areThereDuplicates(...inputArr){

//     if(inputArr.length === 0){
//         return false;
//     }

//     // Lets create an empty array to store values of array.
//     let tempArr = [];
//     for(let val of inputArr){
//         if(tempArr.includes(val)){
//             return true;
//         }
//         else {
//             tempArr.push(val);
//         }
//     }
//     return false;
// }

// Solution-2 (Time complexity - O(n) and Space complexity - O(n))  -- GOOD
// Using frequency counter

function areThereDuplicates(...inputArr){

    if(inputArr.length === 0){
        return false;
    }

    // Lets create an empty obj to store values of array.
    let tempObj = {};
    for(let val of inputArr){
        if(tempObj.hasOwnProperty(val)){
            return true;
        }
        else {
            tempObj[val] = 1;
        }
    }
    return false;
}


// Solution-3 (Time complexity - O(n2) and Space complexity - O(n))

// function areThereDuplicates(...inputArr){

//     if(inputArr.length === 0){
//         return false;
//     }

//     for(let i = 0; i < inputArr.length - 1; i++){
//         for(let j = i+1; j < inputArr.length; j++){
//             if(inputArr[i] === inputArr[j]){
//                 return true;
//             }
//         }
//     }

//     return false;
// }

// Solution-4 (Time complexity - O(nlogn) and Space complexity - O(n))
// Using multiple pointer

// function areThereDuplicates(...inputArr){

//     if(inputArr.length === 0){
//         return false;
//     }

//     // Lets make array to sorted array
//     inputArr.sort((a, b) => (a > b)? 1:-1);

//     for(let i = 0; i < inputArr.length; i++){
//         if(inputArr[i] === inputArr[i-1]){
//             return true;
//         }
//     }

//     return false;

// }

// Testing:

console.log(areThereDuplicates(1, 2, 3));             // false;
console.log(areThereDuplicates(2, 1, 2));             // true;
console.log(areThereDuplicates('a', 'b', 'c', 'a'));  // true;
console.log(areThereDuplicates());                    // false;
console.log(areThereDuplicates(true, false, true));   // true;
