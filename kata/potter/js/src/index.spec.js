/**
 * @param {number[]} basket
 * @return {number} the price of any conceivable shopping basket, giving as big a discount as possible
 */
function price(basket) {
  if (basket.every(book => book === 0)) return 0;
  if (basket.filter(book => book === 1).length === 1) return 8;
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
});
