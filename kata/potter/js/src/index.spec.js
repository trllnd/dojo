const price = require(".");

describe("Potter tests", () => {
  it("should sum unit price for the same book copies", () => {
    expect(price([])).toBe(0);
    expect(price([0, 0, 0, 0, 0])).toBe(0);
    expect(price([0, 0, 0, 1, 0])).toBe(8);
    expect(price([0, 0, 4, 0, 0])).toBe(32);
  });

  it("should apply 5% discount for 2 different copies", () => {
    expect(price([0, 0, 1, 1, 0])).toBe(16 * 0.95);
  });

  it("should sum 2-series discounted price", () => {
    expect(price([0, 2, 0, 2, 0])).toBe(32 * 0.95);
  });

  it("should sum 3-series discounted price", () => {
    expect(price([0, 2, 2, 2, 0])).toBe(2 * 3 * 8 * 0.9);
  });

  it("should sum 3-series discounted price and 2-series discounted price", () => {
    expect(price([0, 2, 3, 3, 0])).toBe(2 * 3 * 8 * 0.9 + 2 * 8 * 0.95);
  });
});
