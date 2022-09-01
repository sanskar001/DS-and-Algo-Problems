// Insertion Sorting Algorithm

// Description: Build up the sort by gradually creating larger left half which is already sorted.


// Time Complexity - O(n^2) and Aux Space Complexity - O(1)
function insertionSort(arr){

    const size = arr.length;

    for(let left = 1; left < size; left++){

        for(let i = left; i > 0; i--){

            if(arr[i] < arr[i-1]){
                // Swap these values
                [arr[i], arr[i-1]] = [arr[i-1], arr[i]];
            }
            else {
                break;
            }
        }
    }

    return arr;
}

// Testing:

const nums = new Array(6).fill().map(el => Math.trunc(Math.random() * 20));
// const nums = [1, 2, 3, 4, 5, 6];

console.log("INPUT ARRAY:", nums);
console.log("AFTER SORTING: ", insertionSort(nums));
