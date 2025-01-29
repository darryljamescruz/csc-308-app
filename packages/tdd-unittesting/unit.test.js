const { StockPortfolio } = require('./stock-tdd');

describe('Stock Portfolio', () => {

    test('2.1 Portfolio is empty.', () => {
        const portfolio = new StockPortfolio();
        expect(portfolio.isEmpty()).toBe(true); // portfolio should be empty at first
    });


    test('2.2 The stock portfolio shall answer whether it is empty (no shares owned).', () => {
        const portfolio = new StockPortfolio();

        portfolio.stocks.set('GOOG', 10);   //  method for adding stock manually
        expect(portfolio.isEmpty()).toBe(false);    // portfolio should have something in it, thus false
    })

    test('2.3 Make a purchase. Given a symbol and # of shares, (add shares to a symbol).', () => {
        const portfolio = new StockPortfolio();
        portfolio.addStock('APPL', 15); // buy a stock using addStock() method.
        
        expect(portfolio.isEmpty()).toBe(false);    // portfolio should have a stock in it
        expect(portfolio.stocks.get('APPL')).toBe(15);  // portfolio should have 15 APPL shares
    })

    test('2.4 Make a sale. Args: SYMBOL, SHARE -> subtract shares from a symbol', () => {
        const portfolio = new StockPortfolio();
        portfolio.addStock('APPL', 15); // first buy stocks from appl
        portfolio.sellStock('APPL', 10);    //  sell 10 stocks from APPL

        expect(portfolio.stocks.get('APPL')).toBe(5);   // APPL should only have 5 shares left
    })

    test('2.5 Portfolio should return # of unique stock symbols', () => {
        const portfolio = new StockPortfolio();
        portfolio.addStock('APPL', 15); // buy stocks from appl
        portfolio.addStock('GOOG', 50); // buy stocks from google

        expect(portfolio.getStockCount()).toBe(2);  // two unique stocks should be in the portfolio
    })
});