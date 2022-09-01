// Bubble Sorting Algorithm

// Description: A sorting algo where the largest value bubble up to the top.


// Normal Apprach: - Time Complexity - O(n^2) and Aux Space Complexity - O(1)
// function bubbleSort(arr){

//     // Array size
//     let size = arr.length;

//     for (let top = size-1; top >= 1; top--){

//         for(let i = 0; i <= top-1; i++){

//             if(arr[i] > arr[i+1]){
                
//                 // Swap these values
//                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
//             }

//             console.log(arr);

//         }

//     }

//     return arr;
// }

// ----------------------------------------------------

// Problem: If we nearly sorted array or already sorted array then also above approach works as hard as it works O(n^2).

// Optimized Apprach: - Time Complexity - O(n) and Aux Space Complexity - O(1)
function bubbleSort(arr){

    // Array size
    let size = arr.length;

    for (let top = size-1; top >= 1; top--){
        let noSwap = true;

        for(let i = 0; i <= top-1; i++){

            if(arr[i] > arr[i+1]){
                
                // Swap these values
               [arr[i], arr[i+1]] = [arr[i+1], arr[i]];

                noSwap = false;
            }

            console.log(arr);

        }

        // Short circuiting
        if(noSwap){
            break;
        }

    }

    return arr;
}

// Testing:

// const nums = new Array(7).fill().map(el => Math.trunc(Math.random() * 20));
const nums = [1, 2, 3, 4, 5, 6];

console.log("INPUT ARRAY:", nums);
console.log("AFTER SORTING: ", bubbleSort(nums));
