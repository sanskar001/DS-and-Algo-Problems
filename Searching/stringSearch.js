// Naive String Search

// Problem - find how many times target substring includes inside given input string.

const stringSearch = (inputString, targetString) => {

    let count = 0;
    const len1 = inputString.length;
    const len2 = targetString.length;

    for(let i = 0; i < len1 - len2; i++){
        let isFound = true;
        for(let j = 0; j < len2; j++){
            if(inputString[i+j] !== targetString[j]){
                isFound = false;
                break;
            }
        }
        if(isFound){
            count++;
        }
    }

    return count;
}

// Testing:

console.log(stringSearch("hello food, hello education, hello health", "hello"));
console.log(stringSearch("hello world", "hola"));
