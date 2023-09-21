const request = require('request');
const { expect } = require('chai');

const baseUrl = 'http://localhost:7865';

describe('Payment System API Index Page', () => {
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

describe('Payment System API Cart Page', () => {
  it('should return a 200 status code when :id is a number', (done) => {
    request.get(`${baseUrl}/cart/123`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return payment methods message when :id is a number', (done) => {
    request.get(`${baseUrl}/cart/123`, (error, response, body) => {
      expect(response.body).to.equal('Payment methods for cart 123');
      done();
    });
  });

  it('should return a 404 status code when :id is not a number', (done) => {
    request.get(`${baseUrl}/cart/invalid_id`, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
