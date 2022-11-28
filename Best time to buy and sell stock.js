var maxProfit = function(prices) {
    var ans=0;
    var pointer;
    for (let i=0;i<prices.length;i++) {
        pointer=i;
        while (i<prices.length && prices[i+1]>=prices[i]) i++;
        ans+=prices[i]-prices[pointer];
    }
    return ans;
};

p=[7,1,5,3,6,4];
console.log(maxProfit(p));