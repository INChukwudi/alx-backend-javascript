const request = require('request');
const { expect } = require('chai');

describe('Payment System API', () => {
  const baseUrl = 'http://localhost:7865';

  it('should return status code 200 for GET /', (done) => {
    request.get(baseUrl, (error, response) => {
      if (error) done(error);
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return "Welcome to the payment system" as response for GET /', (done) => {
    request.get(baseUrl, (error, response, body) => {
      if (error) done(error);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should check the "Content-Type" header\'s value is set to "text/html; charset=utf-8"', (done) => {
    request.get(baseUrl, (error, response) => {
      if (error) done(error);
      expect(response.headers['content-type']).to.equal('text/html; charset=utf-8');
      done();
    });
  });
});

