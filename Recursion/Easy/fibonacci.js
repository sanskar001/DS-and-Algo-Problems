// 1 1 2 3 5 8 13 21 34...

function fib(num){

    if(num === 1 || num === 2){
        return 1;
    }

    return fib(num - 1) + fib(num - 2);
}

// Testing:

console.log(fib(4));
console.log(fib(5));
console.log(fib(1));
