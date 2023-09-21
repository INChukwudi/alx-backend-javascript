const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./1-calcul');

describe('Calculate Number - SUM', () => {
  it('Should return the sum of two rounded numbers', () => {
    expect(calculateNumber('SUM', 1.4, 2.6)).to.equal(4);
    expect(calculateNumber('SUM', 2.6, 1.4)).to.equal(4);
    expect(calculateNumber('SUM', 0.1, 0.2)).to.equal(0);
    expect(calculateNumber('SUM', -1.5, 1.5)).to.equal(1);
  });
});

describe('Calculate Number - SUBTRACT', () => {
  it('Should return the difference of two rounded numbers', () => {
    expect(calculateNumber('SUBTRACT', 5.5, 3.3)).to.equal(3);
    expect(calculateNumber('SUBTRACT', 2.2, 3.3)).to.equal(-1);
    expect(calculateNumber('SUBTRACT', 0.3, 0.1)).to.equal(0);
    expect(calculateNumber('SUBTRACT', -2.5, -1.5)).to.equal(-1);
  });
});

describe('Calculate Number - DIVIDE', () => {
  it('Should return the quotient of two rounded numbers', () => {
    expect(calculateNumber('DIVIDE', 6, 2)).to.equal(3);
    expect(calculateNumber('DIVIDE', 10, 4)).to.equal(2.5);
    expect(calculateNumber('DIVIDE', 3.6, 1.2)).to.equal(4);
  });

  it('Should return "Error" when dividing by zero', () => {
    expect(calculateNumber('DIVIDE', 5, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 10, 0.3)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 20, -0.2)).to.equal('Error');
  });
});

describe('Calculate Number - Edge Cases', () => {
  it('Should handle negative numbers and rounding', () => {
    expect(calculateNumber('SUM', -1.4, -2.6)).to.equal(-4);
    expect(calculateNumber('SUBTRACT', -2.6, -1.4)).to.equal(-2);
    expect(calculateNumber('DIVIDE', -5, 2)).to.equal(-2.5);
  });

  it('Should handle very small numbers', () => {
    expect(calculateNumber('SUM', 1e-10, 1e-10)).to.equal(0);
    expect(calculateNumber('SUBTRACT', 1e-10, 1e-11)).to.equal(0);
    expect(calculateNumber('DIVIDE', 1e-10, 1e-10)).to.equal('Error');
  });

  it('Should handle large numbers', () => {
    expect(calculateNumber('SUM', 1e20, 2e20)).to.equal(3e20);
    expect(calculateNumber('SUBTRACT', 3e20, 1e20)).to.equal(2e20);
    expect(calculateNumber('DIVIDE', 1e20, 0.5)).to.equal(1e20);
  });
});

