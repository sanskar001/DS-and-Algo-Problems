// Problem : capitalizeFirst

/*Write a recursive functin called capitalizeFirst. Given an array
of strings, capitalize the first letter of each string in the array.*/

function capitalizeFirst(stringArr){

    if(stringArr.length === 0){
        return [];
    }

    const capitalizedString = [stringArr[0][0].toUpperCase() + stringArr[0].slice(1)];
    
    return capitalizedString.concat(capitalizeFirst(stringArr.slice(1)));
}


// Testing: 
console.log(capitalizeFirst(['car', 'first']));
console.log(capitalizeFirst([]));
console.log(capitalizeFirst(['first']));
