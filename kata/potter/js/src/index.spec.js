/**
 * @param {number[]} basket
 * @return {number} the price of any conceivable shopping basket, giving as big a discount as possible
 */
function price(basket) {
  const unitPrice = 8;
  if (basket.every(book => book === 0)) return 0;
  if (basket.filter(book => book === 1).length === 1) return unitPrice;
}

describe("Potter tests", () => {
  [[], [0], [0, 0, 0, 0, 0]].forEach(basket =>
    it("should be 0€ when basket is empty", () => {
      expect(price(basket)).toBe(0);
    })
  );

  [[1], [0, 1], [0, 0, 1, 0, 0]].forEach(basket =>
    it("should be 8€ when basket has exactly 1 book copy", () => {
      expect(price(basket)).toBe(8);
    })
  );

  [[4], [0, 4], [0, 0, 4, 0, 0]].forEach(basket =>
    it("should sum unit price for the same book copies", () => {
      expect(price(basket)).toBe(32);
    })
  );
});
