//  Letter Combinations of a Phone Number

/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations 
that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. 
Note that 1 does not map to any letters.

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

*/

// Time complexity - ~ O(3^n)

var letterCombinations = function(digits) {

    if(digits.length === 0) return [];
    
    let phoneObj = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"],
        "0": [" "]
    }

    let result = phoneObj[digits[0]];
    let tempResult;

    for(let i = 1; i < digits.length; i++){

        tempResult = [...result];
        result = [];
        let j = 0;

        while(j < tempResult.length){

            let k = 0;

            while(k < phoneObj[digits[i]].length){

                result.push(tempResult[j] + phoneObj[digits[i]][k]);
                
                k++;
            }
            
            j++;
        }
        
        tempResult = [];
    }

    return result;
    
};

// Testing:

console.log(letterCombinations('23'));
console.log(letterCombinations('2304'));
