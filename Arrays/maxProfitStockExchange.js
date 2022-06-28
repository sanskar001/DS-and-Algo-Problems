// Best Time to Buy and Sell Stock

// Solution-1 (Brute Force) Time complexity - O(n^2) and Aux Space complexity O(1).
// var maxProfit = function(prices) {

//         let diff = 0;
//         let maxDiff = 0;

//         for(let i = 0; i < prices.length - 1; i++){
//                 for(let j = i; j < prices.length; j++){
//                         if(prices[j] >= prices[i]){
//                                 diff = prices[j] - prices[i];
//                                 maxDiff = Math.max(diff, maxDiff);
//                         }
//                 }
//         }

//         return maxDiff;
// };

// Solution-2 Time complexity - O(n) and Aux Space complexity O(1).
var maxProfit = function(prices) {

        // Short circuit condition
        if(prices.length <= 1){
                return 0;
        }
        
        let minPrice = prices[0];
        let maxDiff = 0;

        for(let i = 1; i < prices.length; i++){
                maxDiff = Math.max(maxDiff, prices[i] - minPrice);
                minPrice = Math.min(minPrice, prices[i]);
        }

        return maxDiff;
        
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));    // 5
console.log(maxProfit([7, 6, 4, 3, 1]));       // 0
console.log(maxProfit([6, 5, 3, 3, 3]));       // 0
console.log(maxProfit([]));                    // 0
console.log(maxProfit([10]));                  // 0
console.log(maxProfit([7, 2, 5, 1, 3]));       // 3
