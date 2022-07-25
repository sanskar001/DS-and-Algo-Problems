function productOfArray(arr){
    if(arr.length === 0){
        return 1;
    }

    let lastValue = arr.pop();
    
    return lastValue * productOfArray(arr);
}

// Testing:

console.log(productOfArray([1, 2, 3]));
console.log(productOfArray([1, 0, 3]));
console.log(productOfArray([1, -2, 3]));
