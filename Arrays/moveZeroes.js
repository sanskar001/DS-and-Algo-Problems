var moveZeroes = function(nums) {

    let n = nums.length;
    let zeroCount = 0;

    // Count given target value
    for(let v of nums){
        if(v === 0) zeroCount++;
    }

    for(let i = 0, j = 0; i < n - zeroCount; i++){

        while(nums[j] === 0){
            j++;
        }

        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        
        j++;
    }

    return nums;
};
