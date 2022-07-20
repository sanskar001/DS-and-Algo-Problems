// Set Matrix Zeroes

/*

Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

🔥🔥🔥 You must do it in place 🔥🔥🔥

In-place algorithm

In computer science, an in-place algorithm is an algorithm which transforms input using no auxiliary data structure. 
However, a small amount of extra storage space is allowed for auxiliary variables. 
The input is usually overwritten by the output as the algorithm executes. 
An in-place algorithm updates its input sequence only through replacement or swapping of elements. 
An algorithm which is not in-place is sometimes called not-in-place or out-of-place.

Example 1:

Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Example 2:

Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

*/

// Solution: Time complexity - O(m*n) and Space complexity - O(m*n)

var setZeroes = function(matrix) {

    let rows = matrix.length;
    let columns = matrix[0].length;

    // Function to place zeroes as per given position (r, c);
    function placeZeros(r, c){

        // setting zero to 'r' row element
        for(let i = 0; i < columns; i++){
            matrix[r][i] = 0;
        }

        // setting zero to 'c' column element
        for(let i = 0; i < rows; i++){
            matrix[i][c] = 0;
        }
    }

    // Lets find the location of zero in matrix
    let positions = [];

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < columns; j++){
            if(matrix[i][j] === 0){
                positions.push([i, j]);
            }
        }
    }

    // Setting zeroes as per positions.
    for(let i = 0; i < positions.length; i++){

        let x = positions[i][0];
        let y = positions[i][1];
        placeZeros(x, y);
    }

    return matrix;
    
};

// Testing:

console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]));
console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]));
