// Spiral Matrix

/*
Given an m x n matrix, return all elements of the matrix in spiral order.

Example 1:

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:

Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]

*/

// Solution: Time complexity - ~ O(n2) Space complexity - O()

var spiralOrder = function(matrix) {
    
    // Initialize rectangle coordinates
    let lastRowIndex = matrix.length - 1;
    let lastColIndex = matrix[0].length - 1;
    let firstRowIndex = 0;
    let firstColIndex = 0;
    const result = [];
    
    while(firstRowIndex <= lastRowIndex && firstColIndex <= lastColIndex){
        
        // For top most row element
        for(let i = firstColIndex; i <= lastColIndex; i++){
            result.push(matrix[firstRowIndex][i]);
        }
        firstRowIndex++;
        
        // For right most column element
        for(let i = firstRowIndex; i <= lastRowIndex; i++){
            result.push(matrix[i][lastColIndex]);
        }
        lastColIndex--;
        
        // For bottom most row element
        if(firstRowIndex <= lastRowIndex){
            for(let i = lastColIndex; i >= firstColIndex; i--){
                result.push(matrix[lastRowIndex][i]);
            }
            lastRowIndex--;
        }
        
        // For left most column element
        if(firstColIndex <= lastColIndex){
            for(let i = lastRowIndex; i >= firstRowIndex; i--){
                result.push(matrix[i][firstColIndex]);
            }
            firstColIndex++;
        }
    }
    
    return result;
};

// Testing:

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));
console.log(spiralOrder([[1,2,3,4]]));
console.log(spiralOrder([[1],[2],[3]]));
console.log(spiralOrder([[1]]));
