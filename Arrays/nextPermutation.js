var nextPermutation = function(nums) {

        // Reverse array function - Time complexity - O(n/2)
        function reverseArr(arr, s, e){
                let start = s;
                let end = e;
        
                while(start < end){
                        // swap start and end index value
                        let temp = arr[start];
                        arr[start] = arr[end];
                        arr[end] = temp;
        
                        start++;
                        end--;
                }

                return arr;
        }
        
        // find the index of array where changes required.
        let pointer1;
        
        for(let i = nums.length - 2; i >= 0; i--){
                if(nums[i] < nums[i+1]){
                        pointer1 = i;
                        break;
                }
        }
        
        // If pointer1 still do not have value then return original array.
        if(pointer1 === undefined){
                return reverseArr(nums, 0, nums.length-1);
        }

        // Now find the index value in subarray after pointer1 index which has value more than this.
        let pointer2;
        for(let j = nums.length - 1; j > pointer1; j--){
                if(nums[j] > nums[pointer1]){
                        pointer2 = j;
                        break;
                }
        }

        // Swap pointer1 and pointer2 value.
        let temp = nums[pointer1];
        nums[pointer1] = nums[pointer2];
        nums[pointer2] = temp;

        // Reverse subarray after pointer1 index.
        return reverseArr(nums, pointer1 + 1, nums.length - 1);
};

console.log(nextPermutation([10, 20, 30, 50, 40]));
console.log(nextPermutation([10, 20, 30]));
console.log(nextPermutation([30, 20, 10]));
