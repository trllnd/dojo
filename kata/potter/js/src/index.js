/**
 * @param {number[]} basket
 * @return {number} the price of any conceivable shopping basket, giving as big a discount as possible
 */
module.exports = function price(basket) {
  var unitPrice = 8;
  var discount = {
    2: 0.95,
    3: 0.9
  };

  const differentCopies = basket.filter(book => book > 0).length;

  if (differentCopies > 1) {
    const nbSeries = basket.reduce((a, b) => Math.max(a, b));
    return nbSeries * differentCopies * unitPrice * discount[differentCopies];
  }

  return basket.map(book => book * unitPrice).reduce((a, b) => a + b, 0);
};
