// Linear Search Algorithm.

// Using Iterative approach
const linearSearch = (arr, target) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i;
        }
    }

    return -1;
}

// Testing:
console.log(linearSearch([10, 3, 2, 1, 13, 45], 40));
console.log(linearSearch([10, 3, 2, 1, 13, 45], 45));
console.log(linearSearch([10, 3, 2, 1, 13, 45], 1));
