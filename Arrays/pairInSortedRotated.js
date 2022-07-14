// Problem: Given a sorted and rotated array, find if there is a pair with a given sum

/*

Problem Description:

Given an array that is sorted and then rotated around an unknown point. Find if the array has a pair with a given sum ‘x’.
It may be assumed that all elements in the array are distinct.

Input: arr[] = {11, 15, 6, 8, 9, 10}, x = 16
Output: true
There is a pair (6, 10) with sum 16

Input: arr[] = {11, 15, 26, 38, 9, 10}, x = 35
Output: true
There is a pair (26, 9) with sum 35

Input: arr[] = {11, 15, 26, 38, 9, 10}, x = 45
Output: false
There is no pair with sum 45.

*/

const pairInSortedRotated = function(nums, target){

    // Let find the minimum value inside sorted and rotated array.

    function findMin(arr){
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

    // Lets find pair of number which as sum equal to target value.

    let left = findMin(nums);
    let right = (findMin(nums) - 1 + nums.length) % nums.length;
    let sum = 0;

    while(left != right){

        sum = nums[left] + nums[right];

        if(sum === target){
            return true;
        }
        else if(sum < target){
            left = (left + 1) % nums.length;
        }
        else {
            right = (right - 1 + nums.length) % nums.length;
        }
    }

    return false;
}

console.log(pairInSortedRotated([11, 15, 6, 8, 9, 10], 16));
console.log(pairInSortedRotated([11, 15, 26, 38, 9, 10], 35));
console.log(pairInSortedRotated([11, 15, 26, 38, 9, 10], 45));
