const assert = require('assert');
const calculateNumber = require('./1-calcul');

// Test cases for SUM operation
describe('Calculate Number - SUM', () => {
  it('Should return the sum of two rounded numbers', () => {
    assert.strictEqual(calculateNumber('SUM', 1.4, 2.6), 4);
    assert.strictEqual(calculateNumber('SUM', 2.6, 1.4), 4);
    assert.strictEqual(calculateNumber('SUM', 0.1, 0.2), 0);
    assert.strictEqual(calculateNumber('SUM', -1.5, 1.5), 1);
  });
});

// Test cases for SUBTRACT operation
describe('Calculate Number - SUBTRACT', () => {
  it('Should return the difference of two rounded numbers', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 3.3), 3);
    assert.strictEqual(calculateNumber('SUBTRACT', 2.2, 3.3), -1);
    assert.strictEqual(calculateNumber('SUBTRACT', 0.3, 0.1), 0);
    assert.strictEqual(calculateNumber('SUBTRACT', -2.5, -1.5), -1);
  });
});

// Test cases for DIVIDE operation
describe('Calculate Number - DIVIDE', () => {
  it('Should return the quotient of two rounded numbers', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 6, 2), 3);
    assert.strictEqual(calculateNumber('DIVIDE', 10, 4), 2.5);
    assert.strictEqual(calculateNumber('DIVIDE', 3.6, 1.2), 4);
  });

  it('Should return "Error" when dividing by zero', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 5, 0), 'Error');
    assert.strictEqual(calculateNumber('DIVIDE', 10, 0.3), 'Error');
    assert.strictEqual(calculateNumber('DIVIDE', 20, -0.2), 'Error');
  });
});

// Edge cases scenarios testing
describe('Calculate Number - Edge Cases', () => {
  it('Should handle negative numbers and rounding', () => {
    assert.strictEqual(calculateNumber('SUM', -1.4, -2.6), -4);
    assert.strictEqual(calculateNumber('SUBTRACT', -2.6, -1.4), -2);
    assert.strictEqual(calculateNumber('DIVIDE', -5, 2), -2.5);
  });

  it('Should handle very small numbers', () => {
    assert.strictEqual(calculateNumber('SUM', 1e-10, 1e-10), 0);
    assert.strictEqual(calculateNumber('SUBTRACT', 1e-10, 1e-11), 0);
    assert.strictEqual(calculateNumber('DIVIDE', 1e-10, 1e-10), 'Error');
  });

  it('Should handle large numbers', () => {
    assert.strictEqual(calculateNumber('SUM', 1e20, 2e20), 3e20);
    assert.strictEqual(calculateNumber('SUBTRACT', 3e20, 1e20), 2e20);
    assert.strictEqual(calculateNumber('DIVIDE', 1e20, 0.5), 1e20);
  });
});

