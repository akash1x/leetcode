/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0
    let minPrice=prices[0]
    
    for(let i=1;i<prices.length;i++){
	    // Profit on ith day
	    let profit = prices[i] - minPrice;
    	if( profit > maxProfit){
    		maxProfit= profit;
    	}

		//Got any price lower than current minPrice update it.
    	if(prices[i]<minPrice){
    		minPrice=prices[i]
    	}
    }
    return maxProfit
};