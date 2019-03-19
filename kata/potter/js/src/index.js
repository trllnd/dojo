/**
 * @param {number[]} basket
 * @return {number} the price of any conceivable shopping basket, giving as big a discount as possible
 */
module.exports = function price(basket) {
  var unitPrice = 8;

  const differentCopies = basket.filter(book => book > 0).length;

  if (differentCopies === 2) {
    const nbSeries = basket.reduce((a, b) => Math.max(a, b));
    return nbSeries * differentCopies * unitPrice * 0.95;
  }

  if (differentCopies === 3) {
    const nbSeries = basket.reduce((a, b) => Math.max(a, b));
    return nbSeries * differentCopies * unitPrice * 0.9;
  }

  return basket.map(book => book * unitPrice).reduce((a, b) => a + b, 0);
};
