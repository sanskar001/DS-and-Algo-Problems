// Problem: Convert a sentence into its equivalent mobile numeric keypad sequence

// Given a sentence in the form of a string in uppercase, convert it into its equivalent mobile numeric keypad sequence.

// Solution- Time complexity - O(n) and Space complexity - O(1)

const printSequence = function(str){

    let result = '';
    const keypadObj = {
        'A': [0, 2], 
        'B': [1, 2], 
        'C': [2, 2], 
        'D': [0, 3], 
        'E': [1, 3], 
        'F': [2, 3],
        'G': [0, 4], 
        'H': [1, 4], 
        'I': [2, 4],
        'J': [0, 5], 
        'K': [1, 5], 
        'L': [2, 5],
        'M': [0, 6], 
        'N': [1, 6], 
        'O': [2, 6],
        'P': [0, 7], 
        'Q': [1, 7], 
        'R': [2, 7],
        'S': [3, 7], 
        'T': [0, 8], 
        'U': [1, 8],
        'V': [2, 8], 
        'W': [0, 9], 
        'X': [1, 9],
        'Y': [2, 9],
        'Z': [3, 9],
        ' ': [0, 0]
    }

    for(let letter of str){
        result += keypadObj[letter][1].toString().repeat((keypadObj[letter][0] + 1));
    }

    return result;
}

// Testing:

console.log(printSequence('HELLO WORLD'));
console.log(printSequence('HEY U'));
console.log(printSequence('GFG'));
