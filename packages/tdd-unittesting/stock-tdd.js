class StockPortfolio {
    constructor() {
        this.stocks = new Map();    //Map to store stock and their shares
    }
    isEmpty() {
        return this.stocks.size === 0;  
    }
}

// export all functions as properties as module.exports instead of individual exports
module.exports = {
   StockPortfolio
};