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

    
});