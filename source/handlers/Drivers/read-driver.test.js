const { describe, it } = require('mocha');
const chai = require('chai');
const http = require('chai-http');

const app = require('../../../app');

const { expect } = chai;

chai.use(http);

describe('testing the driver handler', () => {
  it('should retrieve all drivers', (done) => {
    chai.request(app)
      .get('/api/v1/read/all/drivers')
       .end((err, res) => {
         expect(res.body.status).to.eql('success');
         expect(res.body).to.have.property('drivers');
         done();
       });
  });

  it('should retrieve a single driver', (done) => {
    chai.request(app)
      .get('/api/v1/create/driver/732ab2c8-17bc-426e-affa-258ad9c12447')
      .end((err, res) => {
        expect(res.body.driver[0]).to.be.an('object');
        expect(res.body.driver[0]).to.contain('id').eql('732ab2c8-17bc-426e-affa-258ad9c12447');
        done();
      });
  });
});
