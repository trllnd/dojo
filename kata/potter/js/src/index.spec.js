/**
 * @param {number[]} basket
 * @return {number} the price of any conceivable shopping basket, giving as big a discount as possible
 */
function price(basket) {}

describe("Potter tests", () => {
  [[], [0], [0, 0, 0, 0, 0]].forEach(basket =>
    it("should be 0€ when basket is empty", () => {
      expect(price(basket)).toBe(0);
    })
  );
});
