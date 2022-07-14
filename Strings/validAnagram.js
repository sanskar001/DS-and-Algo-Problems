// Frequency Counter: valid Anagram

/*
Problem Statement: Given two string, write function to determine if the second string is an anagram of the first.
An anagram is word, phrase or name formed by rearranging the letters of another, such cinema, formed from iceman.
eg.
validAnagram('', '') // true
validAnagram('aaz', 'zza')  // false
validAnagram('anagram', 'nagaram') // true
*/

// Solution-1  (Time complexity - O(n2) and Space complexity - O(n))

// const validAnagram = function(string1, string2){

//     // length check
//     if(string1.length != string2.length){
//         return false;
//     }

//     // Converting string into array
//     let string1Arr = [...string1];
//     let string2Arr = [...string2];

//     for(let val of string1Arr){
//         // If value exist inside string2 array then delete that value from second string array.
//         if(string2Arr.includes(val)){
//             string2Arr.splice(string2Arr.indexOf(val), 1);
//         }
//         // Otherwise return false;
//         else {
//             return false;
//         }
//     }
//     return true;
// }

// Solution-2  (Time complexity - O(n) and Space complexity - O(n))
// Using Frequency Counter

const validAnagram = function(string1, string2){

    // length check
    if(string1.length != string2.length){
        return false;
    }

    // create object of string2 letter count.
    const string2Obj = {};
    for(let letter of string2){
        string2Obj[letter] = (string2Obj[letter] || 0) + 1;
    }

    // Check letter inside string1
    for(let letter of string1){
        if(string2Obj.hasOwnProperty(letter)){
            string2Obj[letter] -= 1;
        }
        else {
            return false;
        }
    }

    // final check of letter count in string object.
    for(let val of Object.values(string2Obj)){
        if(val != 0){
            return false;
        }
    }

    return true;
}

// Testing

console.log(validAnagram('', ''));
console.log(validAnagram('iceman', 'cinema'));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('sanskar', 'hankara'));
