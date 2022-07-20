// Zigzag (or diagonal) traversal of Matrix

/*

Given a 2D matrix, print all elements of the given matrix in diagonal order. 
For example, consider the following 5 X 4 input matrix

Example:

1     2     3     4
5     6     7     8
9    10    11    12
13    14    15    16
17    18    19    20

Diagonal printing of the above matrix is

1
5 2
9 6 3
13 10 7 4
17 14 11 8
18 15 12
19 16
20

*/

// Solution: Time complexity - O(r^2 + c^2) and Space complexity - O(min(r, c));

const diagonalTraversal = function(arr){

    let rows = arr.length;
    let columns = arr[0].length;

    // left half diagonals 
    for(let k = 0; k < rows; k++){

        let i = k;
        let j = 0;
        let temp = '';

        while(i >= 0){
            if(arr[i][j]){
                temp = temp + arr[i][j] + ' ';
            }
            i--;
            j++;
        }

        console.log(temp);
    }

    // right half diagonals 
    for(let k = 1; k < columns; k++){

        let i = rows - 1;
        let j = k;
        let temp = '';

        while(j < columns){
            if(arr[i]){
                temp = temp + arr[i][j] + ' ';
            }
            i--;
            j++;
        }

        console.log(temp);
    }
    
}

// Testing:

diagonalTraversal([[1]]);
console.log('----------------');
diagonalTraversal([[1, 2, 3, 4]]);
console.log('----------------');
diagonalTraversal([[1, 2, 3, 4], [5, 6, 7, 8]]);
console.log('----------------');
diagonalTraversal([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
console.log('----------------');
diagonalTraversal([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log('----------------');
diagonalTraversal([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16], [17, 18, 19, 20]]);
