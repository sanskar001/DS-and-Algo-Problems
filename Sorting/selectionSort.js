// Selection Sorting Algorithm

// Description: A sorting algo where the smallest value bubble up to the top.


// Normal Apprach: - Time Complexity - O(n^2) and Aux Space Complexity - O(1)
function selectionSort(arr){

    let count = 0;

    // Array size
    let size = arr.length;

    for (let top = 0; top < size - 1; top++){

        let minIndex = top;

        for(let i = top; i < size; i++){

            // find min value and its index
            if (arr[minIndex] >= arr[i]){
                minIndex = i;
            }

            count++;

        }

        // Swap minIndex value with top index value
        if(minIndex !== top) {
            [arr[minIndex], arr[top]] = [arr[top], arr[minIndex]];
        }

    }

    console.log(count);

    return arr;
}

// ----------------------------------------------------

// Problem: If we nearly sorted array or already sorted array then also above approach works as hard as it works O(n^2).

// Testing:

const nums = new Array(7).fill().map(el => Math.trunc(Math.random() * 20));
// const nums = [1, 2, 3, 4, 5, 6];

console.log("INPUT ARRAY:", nums);
console.log("AFTER SORTING: ", selectionSort(nums));
