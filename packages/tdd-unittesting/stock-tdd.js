class StockPortfolio {
    constructor() {
        this.stocks = new Map();    // Map to store stock and their shares (STOCK, SHARES)
    }

    isEmpty() {
        return this.stocks.size === 0;  
    }

    addStock(symbol, shares) {
        if (!Number.isInteger(shares) || shares <= 0) throw new Error('Shares must be a positive integer'); // validate # of shares

        this.stocks.set(symbol, (this.stocks.get(symbol) || 0) + shares)
    }
    sellStock(symbol, shares) {
        if (!this.stocks.has(symbol)) throw new Error('Stock not found in portfolio');  // validate stock symbol which should be in portfolio
        if (!Number.isInteger(shares) || shares <= 0) throw new Error('Shares must be a positive integer'); // validate # of sdhares

        let currentShares = this.stocks.get(symbol);    // get the current shares for the stock requested
        let remainingShares = currentShares - shares;

        if (remainingShares > 0) {
            this.stocks.set(symbol, remainingShares);
        } else {
            this.stocks.delete(symbol); // remove all stock if shares are sold
        }
    }

    getStockCount() {
        return this.stocks.size;
    }
}

// export all functions as properties as module.exports instead of individual exports
module.exports = {
   StockPortfolio
};