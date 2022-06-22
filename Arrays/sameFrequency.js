// Chanllenge: sameFrequency

/*

Description: Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

eg. 
sameFrequency(182, 281)  // true
sameFrequency(34, 14)    // false
sameFrequency(11234, 43121)  // true
sameFrequency(22, 222)   // false

*/

// Solution Using frequency counter - Time complexity O(n) and Space complexity O(n)

const sameFrequency = function(num1, num2){

    // Convert number into string
    num1String = num1.toString();
    num2String = num2.toString();

    // Short-circuit condition
    if(num1String.length != num2String.length){
        return false;
    }

    // Creating empty objects
    num1Obj = {};
    num2Obj = {};

    // Lets store frequency of digits into object.
    for(let val of num1String){
        num1Obj[val] = (num1Obj[val] || 0) + 1;
    }
    for(let val of num2String){
        num2Obj[val] = (num2Obj[val] || 0) + 1;
    }
    console.log(num1Obj, num2Obj);
    // Lets check frequency of digits in both objects
    for(let val of num1String){
        if(num1Obj[val] !== num2Obj[val]){
            return false;
        }
    }
    return true;
}


// Testing:

console.log(sameFrequency(182, 281));  // true
console.log(sameFrequency(34, 14));    // false
console.log(sameFrequency(11234, 43121));  // true
console.log(sameFrequency(22, 222));   // false
