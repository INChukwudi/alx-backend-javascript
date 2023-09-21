const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        expect(result).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('should not return a promise when success is false', (done) => {
    const result = getPaymentTokenFromAPI(false);

    expect(result).to.be.undefined;
    done();
  });
});

