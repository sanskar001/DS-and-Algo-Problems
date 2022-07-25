function power(base, exp){
    if(exp === 0){
        return 1;
    }
    return base * power(base, exp - 1);
}

// Testing:

console.log(power(2, 3));    // 8
console.log(power(2, 0));    // 1
console.log(power(-2, 3));   // -8
console.log(power(5, 3));    // 125
