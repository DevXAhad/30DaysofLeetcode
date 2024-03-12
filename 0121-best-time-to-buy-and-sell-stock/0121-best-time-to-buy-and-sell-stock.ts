function maxProfit(prices: number[]): number {
    if (prices.length <= 1) {
      return 0;
    }
  
    let minPrice = prices[0];
    let maxProfit = 0;
  
    for (let i = 1; i < prices.length; i++) {
      minPrice = Math.min(minPrice, prices[i]);
      maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
  
    return maxProfit;
  }
  
  const stockPrices = [8, 2, 4, 5, 7, 5];
  const result = maxProfit(stockPrices);
  console.log(result); // buying on Day 2 and selling on Day 5 max profit attained is 5