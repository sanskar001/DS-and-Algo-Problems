// Problem : nestedEvenSum

/*Write a recursive functin called nestedEvenSum. Return the sum of all even number in an
object which may contain nested objects.*/

// Solution-1 Recursion using helper function.

// function nestedEvenSum(inputObj){

//     let sum = 0;
    
//     function helper(obj){
//         for(let key in obj){
//             const val = obj[key];
//             if(typeof val === "object"){
//                 helper(val);
//             }
//             else if(typeof val === "number" && val % 2 === 0) {
//                 sum += val;
//             }
//         }
//     }

//     helper(inputObj);

//     return sum;
// }

// Solution: Pure recursive

function nestedEvenSum(obj){

    let sum = 0;
    
    for(let key in obj){
        const val = obj[key];
        if(typeof val === "object"){
            sum = sum + nestedEvenSum(val);
        }
        else if(typeof val === "number" && val % 2 === 0) {
            sum += val;
        }
    }

    return sum;
}

// Testing: 

var obj1 = {
  outer: 2,
  outer1: 4,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

console.log(nestedEvenSum(obj1));

////////////////////////////////////////////////////////////

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj2));
