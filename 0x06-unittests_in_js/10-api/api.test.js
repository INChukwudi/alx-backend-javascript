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

describe('Payment System API Available Methods Endpoint', () => {
  const endpoint = '/available_payments';

  it('should return a 200 status code', (done) => {
    request.get(`${baseUrl}${endpoint}`, (error, response) => {
      if (error) done(error);
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return a string in the response body', (done) => {
    request.get(`${baseUrl}${endpoint}`, (error, _, body) => {
      if (error) done(error);
      expect(body).to.be.a('string');
      done();
    });
  });

  it('should return a JSON object in the response body when parsed as JSON', (done) => {
    request.get(`${baseUrl}${endpoint}`, (error, _, body) => {
      if (error) done(error);
      let responseBody;
      try {
        responseBody = JSON.parse(body);
      } catch (parseError) {
        done('Response body is not valid JSON');
      }
      expect(responseBody).to.be.an('object');
      done();
    });
  });

  it('should have a payment_methods object with credit_cards and paypal properties', (done) => {
    request.get(`${baseUrl}${endpoint}`, (error, _, body) => {
      if (error) done(error);
      let responseBody;
      try {
        responseBody = JSON.parse(body);
      } catch (parseError) {
        done('Response body is not valid JSON');
      }
      expect(responseBody).to.have.property('payment_methods').that.is.an('object');
      expect(responseBody.payment_methods).to.have.property('credit_cards').that.is.a('boolean');
      expect(responseBody.payment_methods).to.have.property('paypal').that.is.a('boolean');
      done();
    });
  });

  it('should have correct payment_methods values for credit_cards as true and paypal as false)', (done) => {
    request.get(`${baseUrl}${endpoint}`, (error, _, body) => {
      if (error) done(error);
      let responseBody;
      try {
        responseBody = JSON.parse(body);
      } catch (parseError) {
        throw done('Response body is not valid JSON');
      }
      expect(responseBody.payment_methods.credit_cards).to.equal(true);
      expect(responseBody.payment_methods.paypal).to.equal(false);
      done();
    });
  });
});

describe('Payment Syetem API Login Endpoint', () => {
  const endpoint = '/login';

  it('should return a 200 status code when the username is sent', (done) => {
    const userName = 'Bob';
    request.post(
      {
        url: `${baseUrl}${endpoint}`,
        json: { userName },
      },
      (error, response, body) => {
        if (error) done(error);
        expect(response.statusCode).to.equal(200);
        done();
      }
    );
  });

  it('should return a 200 status code with a welcome message when a username is sent', (done) => {
    const userName = 'Chuks';
    request.post(
      {
        url: `${baseUrl}${endpoint}`,
        json: { userName },
      },
      (error, response, body) => {
        if (error) done(error);
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal(`Welcome ${userName}`);
        done();
      }
    );
  });

  it('should return a 400 status code when userName is missing', (done) => {
    request.post(
      {
        url: `${baseUrl}${endpoint}`,
      },
      (error, response) => {
        if (error) done(error);
        expect(response.statusCode).to.equal(400);
        done();
      }
    );
  });

  it('should return a 400 status code when userName is an empty string', (done) => {
    request.post(
      {
        url: `${baseUrl}${endpoint}`,
        json: { userName: '' },
      },
      (error, response) => {
        if (error) done(error);
        expect(response.statusCode).to.equal(400);
        done();
      }
    );
  });
});
