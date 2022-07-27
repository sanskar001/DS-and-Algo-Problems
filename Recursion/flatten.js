// Problem: Flatten a nested array using recursion.

// Solution: Using Recursion with for loop (iteration)

// function flatten(oldArr){
//   var newArr = []
//   	for(var i = 0; i < oldArr.length; i++){
//     	if(Array.isArray(oldArr[i])){
//       		newArr = newArr.concat(flatten(oldArr[i]))
//     	} else {
//       		newArr.push(oldArr[i])
//     	}
//   } 
//   return newArr;
// }


// Solution: Using only recursion
function flatten(arr){

    const result = [];

    function helper(inputArr){
        // Base case
        if(inputArr.length === 0){
            return;
        }

        // If element is nested array
        if(Array.isArray(inputArr[0])){
            helper(inputArr[0]);
        }
        else {
            // if element is any value
            result.push(inputArr[0]);
        }

        // Reducing array
        helper(inputArr.slice(1)); 
    }

    helper(arr);

    return result;
}


// Testing:
console.log(flatten([[[1, 2]], [[0], [1, 2, 3]]]));
console.log(flatten([[1, 2], 0, [1, 2, 3]]));
console.log(flatten([[1], [1]]));
console.log(flatten([[[]]]));
