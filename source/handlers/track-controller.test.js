const { describe, it } = require('mocha');
const chai = require('chai');
const http = require('chai-http');

const app = require('../../app');

const { expect } = chai;

chai.use(http);

describe('testing the driver handler', () => {
  it('should update driver track', (done) => {
    chai.request(app)
         .put('/api/v1/update/track/732ab2c8-17bc-426e-affa-258ad9c12451')
         .send({
           location: { 'lat': '-1.940278', 'long': '79.873888' },
           status: 'yes',
           onTrip: 'no'
         })
         .end((err, res) => {
           expect(res.status).to.eql(200);
           done();
         });
  });

  it('should not find a track', (done) => {
    chai.request(app)
         .put('/api/v1/update/track/732ab2c8-17bc-426e-affa-258vd9c12451')
         .send({
           location: { 'lat': '-1.940278', 'long': '79.873888' },
           status: 'yes',
           onTrip: 'no'
         })
         .end((err, res) => {
           expect(res.body.status).to.eql('failed');
           expect(res.body.message).to.eql('Data not found');
           done();
         });
  });

  it('should retrieve all the available drivers. i.e: drivers with isAvailable equal to yes', (done) => {
    chai.request(app)
        .get('/api/v1/read/all/available')
         .end((err, res) => {
           expect(res.body.status).to.eql('success');
           expect(res.body.data).to.be.an('array');
           done();
         });
  });

  it('should get all drivers within 3 km', (done) => {
    chai.request(app)
      .get('/api/v1/read/drivers/within?lat=1.338863&long=32.574064')
      .end((err, res) => {
        expect(res.body.status).to.eql('success');
        expect(res.body.data).to.be.an('array');
        done();
      });
  });

  it('should get 3 closest drivers', (done) => {
    chai.request(app)
      .get('/api/v1/read/close/drivers?lat=1.338863&long=32.574064')
      .end((err, res) => {
        expect(res.body.status).to.eql('success');
        expect(res.body.drivers).to.be.an('array');
        done();
      });
  });

  it('should get the initial route', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res.body.status).to.eql('success');
        expect(res.body.message).to.eql('Fleet Management System');
        done();
      });
  });
});
