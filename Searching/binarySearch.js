// Binary Search Algorithm - Applicable only for sorted array - ASCENDING ORDER

// Time complexity - O(log n)

function binarySearch(arr, target){

    // Lets take some pointer varaibles
    let start = 0;
    let end = arr.length - 1;

    while(start <= end){

        // Lets take mid pointer 
        let mid = Math.floor((start + end) / 2);

        if(arr[mid] === target){
            return mid;
        }
        else if(arr[mid] > target){
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }

    // Otherwise 
    return -1;
}

// Testing:

console.log(binarySearch([10, 20, 30, 40, 50], 60));
console.log(binarySearch([10, 20, 30, 40, 50], 10));
console.log(binarySearch([10, 20, 30, 40, 50], 40));

console.log(binarySearch([10, 20, 30, 40], 30));
