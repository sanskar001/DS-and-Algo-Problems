// Chocolate Distribution Problem

/*
Given an array of n integers where each value represents the number of chocolates in a packet. Each packet can have a variable number of chocolates. There are m students, the task is to distribute chocolate packets such that: 

Each student gets one packet.
The difference between the number of chocolates in the packet with maximum chocolates and packet with minimum chocolates given to the students is minimum.

eg.
Input : arr[] = {7, 3, 2, 4, 9, 12, 56} , m = 3 
Output: Minimum Difference is 2 
Explanation:
We have seven packets of chocolates and 
we need to pick three packets for 3 students 
If we pick 2, 3 and 4, we get the minimum 
difference between maximum and minimum packet 
sizes.
*/

// Solution-1  (Time complexity - O(nlogn) and Space complexity - O(1))

const chocolateDist = function(nums, m){

    // If number of packets is less than children
    if(nums.length < m){
        return null;
    }

    let minDiff = Infinity;

    // Lets sort the given packet array in ascending order.
    nums.sort((a, b) => a - b);

    for(let i = 0; i < nums.length - m + 1; i++){
        let diff = nums[(i + m) - 1] - nums[i];
        minDiff = Math.min(diff, minDiff);
    }

    return minDiff;
}

// Testing

console.log(chocolateDist([7, 3, 2, 4, 9, 12, 56], 3));   // 2
console.log(chocolateDist([3, 4, 1, 9, 56, 7, 9, 12], 5));   // 6
console.log(chocolateDist([12, 4, 7, 9, 2, 23, 25, 41, 30, 40, 28, 42, 30, 44, 48, 43, 50], 7));   // 10
