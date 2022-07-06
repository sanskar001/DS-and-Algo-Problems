// Find the missing and repeating number

/*
Given an unsorted array of size n. Array elements are in the range of 1 to n. 
One number from set {1, 2, …n} is missing and one number occurs twice in the array. 
Find these two numbers. [repeating number, missing number]

Examples: 

Input: arr[] = {3, 1, 3}
Output: Missing = 2, Repeating = 3  
Explanation: In the array, 2 is missing and 3 occurs twice 

Input: arr[] = {4, 3, 6, 2, 1, 1}
Output: Missing = 5, Repeating = 1
*/

// Solution-1: Time complexity -O(nlogn) and Space complexity - O(1)

// function findTwoElement(arr, n){
//     let repeat;
//     let missing = 1;   // let consider 1 is missing
    
//     // Lets sort the given arr in ascending order.
//     arr.sort((a, b) => a - b);  

//     if(missing === arr[0]){
//         missing++;
//     }

//     for(let i = 1; i < n; i++){

//         // finding repeat
//         if(arr[i] === arr[i-1]){
//             repeat = arr[i];
//         }

//         // finding missing element
//         if(arr[i] === missing){
//             missing++;
//         }
//     }

//     return [repeat, missing];
// }

// Solution-2: Time complexity -O(n) and Space complexity - O(n)

// function findTwoElement(arr, n){

//     let repeat, missing;
//     let tempObj = {};

//     // Lets create object of n natural number.
//     for(let i = 0; i < n; i++){
//         tempObj[i+1] = 0;
//     }

//     // Lets assign frequency of element of array inside object.
//     for(let i = 0; i < n; i++){
//         tempObj[arr[i]] = tempObj[arr[i]] + 1;
//     }

//     // Let check for repeat value and missing value.
//     for(let k in tempObj){

//         // Checking repeat element
//         if(tempObj[k] > 1){
//             repeat = k;
//         }

//         // Checking missing element
//         if(tempObj[k] === 0){
//             missing = k;
//         }
//     }

//     return [repeat, missing];
// }

// Solution-2: Time complexity -O(n) and Space complexity - O(1)

// function findTwoElement(arr, n){

//     function factorial(num){
//         let fact = 1;
//         for(let i = 2; i <= num; i++){
//             fact = fact * i;
//         }
//         return fact;
//     }

//     let arrSum = 0;            
//     let arrProduct = 1;
//     let s = (n * (n + 1)) / 2;
//     let p = factorial(n);
//     let repeat, missing;

//     // Lets find sum and product of all elements inside given array.
//     for(let val of arr){
//         arrSum = arrSum + val;
//         arrProduct = arrProduct * val;
//     }

//     console.log(`arrSum: ${arrSum}, arrProduct: ${arrProduct}, s: ${s}, p: ${p}`);
    
//     repeat = ((arrSum - s) * arrProduct) / (arrProduct - p);
//     missing = (repeat * p) / arrProduct;

//     return [repeat, missing];
// }

// Solution-3: Time complexity -O(n) and Space complexity - O(n)

const findTwoElement = function(A, n){
    // let n = A.length;
    let i = 0;
    
    while(i < n){
        if(A[i] !== A[A[i] - 1]){
            // Swapping
            let temp1 = A[i];
            let temp2 = A[A[i] - 1];
            A[A[i] - 1] = temp1;
            A[i] = temp2;
        }
        else {
            i++;
        }
    }

    // console.log(A);
    
    for(let j = 0; j < n; j++){
        if(A[j] !== j+1){
            return [A[j], j+1];
        }
    }
}

// // Testing:
console.log("Hello World");
console.log(findTwoElement([3, 2, 3, 4], 4));         // [repeat: 3, missing: 1]
console.log(findTwoElement([2, 1, 3, 4, 2, 6], 6));   // [repeat: 2, missing: 5]
console.log(findTwoElement([2, 2], 2));               // [repeat: 2, missing: 1]
console.log(findTwoElement([3, 1, 3], 3));            // [repeat: 3, missing: 2]

// let A = [ 389, 299, 65, 518, 361, 103, 342, 406, 24, 79, 192, 181, 178, 205, 38, 298, 218, 143, 446, 324, 82, 41, 312, 166, 252, 59, 91, 6, 248, 395, 157, 332, 352, 57, 106, 246, 506, 261, 16, 470, 224, 228, 286, 121, 193, 241, 203, 36, 264, 234, 386, 471, 225, 466, 81, 58, 253, 468, 31, 197, 15, 282, 334, 171, 358, 209, 213, 158, 355, 243, 75, 411, 43, 485, 291, 270, 25, 100, 194, 476, 70, 402, 403, 109, 322, 421, 313, 239, 327, 238, 257, 433, 254, 328, 163, 436, 520, 437, 392, 199, 63, 482, 222, 500, 454, 84, 265, 508, 416, 141, 447, 258, 384, 138, 47, 156, 172, 319, 137, 62, 85, 154, 97, 18, 360, 244, 272, 93, 263, 262, 266, 290, 369, 357, 176, 317, 383, 333, 204, 56, 521, 502, 326, 353, 469, 455, 190, 393, 453, 314, 480, 189, 77, 129, 439, 139, 441, 443, 351, 528, 182, 101, 501, 425, 126, 231, 445, 155, 432, 418, 95, 375, 376, 60, 271, 74, 11, 419, 488, 486, 54, 460, 321, 341, 174, 408, 131, 115, 107, 134, 448, 532, 292, 289, 320, 14, 323, 61, 481, 371, 151, 385, 325, 472, 44, 335, 431, 187, 51, 88, 105, 145, 215, 122, 162, 458, 52, 496, 277, 362, 374, 26, 211, 452, 130, 346, 10, 315, 459, 92, 531, 467, 309, 34, 281, 478, 477, 136, 519, 196, 240, 12, 288, 302, 119, 356, 503, 527, 22, 27, 55, 343, 490, 127, 444, 308, 354, 278, 497, 191, 294, 117, 1, 396, 125, 148, 285, 509, 208, 382, 297, 405, 245, 5, 330, 311, 133, 274, 275, 118, 463, 504, 39, 99, 442, 337, 169, 140, 104, 373, 221, 499, 413, 124, 510, 159, 465, 80, 276, 83, 329, 524, 255, 387, 259, 397, 491, 517, 23, 4, 230, 48, 349, 412, 142, 114, 487, 381, 164, 35, 67, 498, 73, 440, 108, 226, 96, 132, 144, 207, 235, 33, 69, 128, 236, 364, 198, 475, 173, 493, 150, 90, 515, 111, 68, 232, 340, 112, 526, 492, 512, 495, 429, 146, 336, 17, 350, 251, 7, 184, 76, 380, 359, 293, 19, 49, 345, 227, 212, 430, 89, 474, 279, 201, 398, 347, 273, 37, 185, 177, 102, 304, 295, 422, 94, 426, 514, 116, 183, 180, 494, 42, 305, 152, 390, 30, 247, 451, 32, 388, 331, 78, 424, 368, 394, 188, 306, 449, 8, 214, 120, 179, 280, 511, 409, 338, 153, 507, 370, 461, 217, 161, 483, 147, 242, 86, 417, 268, 71, 462, 420, 167, 513, 379, 307, 522, 435, 113, 296, 457, 525, 45, 529, 423, 427, 2, 438, 64, 316, 46, 40, 13, 516, 367, 233, 110, 318, 250, 283, 216, 186, 310, 237, 377, 365, 175, 479, 378, 66, 414, 473, 165, 210, 50, 348, 372, 363, 339, 20, 168, 284, 415, 505, 206, 53, 223, 434, 202, 123, 399, 400, 135, 269, 428, 219, 456, 28, 464, 267, 489, 98, 391, 195, 366, 300, 484, 533, 229, 213, 149, 160, 256, 303, 530, 301, 29, 404, 344, 401, 220, 287, 9, 407, 170, 450, 523, 249, 72, 410, 3, 21, 200, 260 ];
// let sizeOfA = A.length;

// console.log(sizeOfA)

// console.log(findTwoElement(A, sizeOfA));

