// Rotate Matrix.

/*
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the 
input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Example 1:

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]

Example 2:

Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]


*/


var rotate = function(matrix) {
    
    // Initialize variables
    let rows = matrix.length;
    let cols = matrix[0].length;
    let top = 0;
    let right = cols - 1;
    
    // Lets reverse rows of matrix.
    for(let r = 0; r < matrix.length; r++){
        matrix[r].reverse();
    }
    
    while(top < rows - 1 && right > 0){
        
        let i = top;
        let j = right;
        
        while(i <= rows - 1 && j >= 0){
            
            // Perform Swapping
            let temp = matrix[top][j];
            matrix[top][j] = matrix[i][right];
            matrix[i][right] = temp;
            
            // Update pointers
            i++;
            j--;
        }
        
        top++;
        right--;
    }
    
    return matrix;
};
