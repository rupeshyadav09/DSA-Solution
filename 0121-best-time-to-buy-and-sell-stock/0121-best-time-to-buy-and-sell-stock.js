/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0];
    let maxProfit = 0;

    for(let i =0; i<prices.length; i++){
        let diff = prices[i]-min;

        if(diff > maxProfit){
            maxProfit = diff;
        }

        if(prices[i] < min){
            min = prices[i];
        }
    }
      return maxProfit;
};