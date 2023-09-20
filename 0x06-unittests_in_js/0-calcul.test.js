const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('calculateNumber', () => {
  it('should return the sum of two whole numbers', () => {
    assert.strictEqual(calculateNumber(4, 6), 10);
    assert.strictEqual(calculateNumber(50, 80), 130);
    assert.strictEqual(calculateNumber(-7, 3), -4);
    assert.strictEqual(calculateNumber(4, -2), 2);
    assert.strictEqual(calculateNumber(-9, -5), -14);
  });

  it('should return the sum of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(1.2, 2.8), 4);
    assert.strictEqual(calculateNumber(0.3, 0.1), 0);
    assert.strictEqual(calculateNumber(3.7, 4.5), 9);
    assert.strictEqual(calculateNumber(-1.4, -2.6), -4);
    assert.strictEqual(calculateNumber(-1.4, 2.6), 2);
  });

  it('should handle rounding negative numbers', () => {
    assert.strictEqual(calculateNumber(-1.4, -2.6), -4);
    assert.strictEqual(calculateNumber(-1.6, -2.4), -4);
    assert.strictEqual(calculateNumber(-1.5, -2.5), -3);
  });

  it('should handle rounding to zero', () => {
    assert.strictEqual(calculateNumber(0.1, 0.2), 0);
    assert.strictEqual(calculateNumber(0.4, -0.4), 0);
  });

  it('should handle large rounded numbers', () => {
    assert.strictEqual(calculateNumber(123456789, 987654321), 1111111110);
    assert.strictEqual(calculateNumber(1000000000, -1000000000), 0);
  });

  it('should return 0 for two zero values', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
    assert.strictEqual(calculateNumber(0.0, 0.0), 0);
    assert.strictEqual(calculateNumber(0.4, 0.3), 0);
  });

  it('should handle rounding of floating point values', () => {
    assert.strictEqual(calculateNumber(2.333, 3.666), 6);
    assert.strictEqual(calculateNumber(-2.333, -3.666), -6);
  });
});

