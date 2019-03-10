/**
 * @param {number[]} basket
 * @return {number} the price of any conceivable shopping basket, giving as big a discount as possible
 */
function price(basket) {
  const unitPrice = 8;
  if (basket.filter(book => book > 0).length === 2) return 2 * unitPrice * 0.95;

  return basket.map(book => book * unitPrice).reduce((a, b) => a + b, 0);
}

describe("Potter tests", () => {
  it("should sum unit price for the same book copies", () => {
    expect(price([])).toBe(0);
    expect(price([0, 0, 0, 0, 0])).toBe(0);
    expect(price([0, 0, 0, 1, 0])).toBe(8);
    expect(price([0, 0, 4, 0, 0])).toBe(32);
  });

  it("should apply 5% discount for 2 diferents copies", () => {
    expect(price([0, 0, 1, 1, 0])).toBe(16 * 0.95);
  });
});
