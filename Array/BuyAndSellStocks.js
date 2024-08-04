function BuyAndSellStocke(){
    let prices = [7,1,5,3,6,4];
    let maxProfit = 0;
    let minPrice = prices[0];
    for(let i = 1; i < prices.length; i++){
        let currentPrice = prices[i];
        let profit = currentPrice - minPrice;
        if(profit > maxProfit){
            maxProfit = profit;
        }
        if(currentPrice < minPrice){
            minPrice = currentPrice;
        }
    }
    console.log(maxProfit)
}

BuyAndSellStocke();