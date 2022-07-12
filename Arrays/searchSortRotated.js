var search = function(arr, target){
        
        // Lets create function to search minimum value inside sorted rotated array. - Time     complexity -O(logn)

    function findminValue(arr){
        // Given array is sorted and rotated.

        let minIndex, prevIndex, nextIndex;
        let start = 0;
        let end = arr.length - 1;

        while(start <= end){

            minIndex = Math.floor((start + end) / 2);
            prevIndex = (minIndex - 1 + arr.length) % arr.length;
            nextIndex = (minIndex + 1) % arr.length;

            if(arr[minIndex] <= arr[prevIndex] && arr[minIndex] <= arr[nextIndex]){
                return minIndex;
            }
            else if(arr[minIndex] <= arr[end]){
                end = minIndex - 1;
            }
            else if(arr[minIndex] >= arr[start]){
                start = minIndex + 1;
            }
        }

        return -1;
    }
        
    // Lets create Binary Search function.- Time complexity -O(logn)

    function binarySearch(arr, start, end, target){

        // Create a varaible to store middle value
        let mid;

        while(start <= end){

            // Lets calculate middle index value
            mid = Math.floor((start + end) / 2);

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

        return -1;
    }
        
    // ---------------------------------------------------

    if(arr.length === 0){
        return 'Not found';
    }

    let minIndex = findminValue(arr);

    if(arr[minIndex] === target){
        return minIndex;
    }

    let result1 = binarySearch(arr, 0, minIndex-1, target);
    let result2 = binarySearch(arr, minIndex + 1, arr.length - 1, target);

    if(result1 === -1 && result2 === -1){
        return -1;
    }

    return (result1 !== -1)? result1 : result2;
};
