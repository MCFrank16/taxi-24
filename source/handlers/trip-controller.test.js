const { describe, it, before } = require('mocha');
const chai = require('chai');
const http = require('chai-http');

const app = require('../../app');

const { expect } = chai;

chai.use(http);

describe('testing the trip controller', () => {
  let id;
  const trip = {
    from: { 'lat': -1.940238, 'long': 79.872888 },
    to: { 'lat': -1.900178, 'long': 30.823888 },
    status: 'active',
    riderID: '732ab2c8-17bc-426e-affa-258ad9c12448',
    driverID: '732ab2c8-17bc-426e-affa-258ad9c12451'
  };

  before((done) => {
    chai.request(app)
         .post('/api/v1/create/trip')
         .send(trip)
         .end((err, res) => {
           expect(res.status).to.eql(201);
           expect(res.body.status).to.eql('success');
           expect(res.body.message).to.eql('Trip Created.');
           done();
         });
  });

  it('should validate the input', (done) => {
    chai.request(app)
        .post('/api/v1/create/trip')
        .send({})
         .end((err, res) => {
           expect(res.body.status).to.eql('failed');
           expect(res.body.message).to.eql('from is required');
           done();
         });
  });


  it('should get all the active trips', (done) => {
    chai.request(app)
      .get('/api/v1/read/all/active/trips')
      .end((err, res) => {
        id = res.body.result[0].id;
        expect(res.body.status).to.eql('success');
        expect(res.body.result).to.be.an('array');
        done();
      });
  });

  it('should get all the completed trips', (done) => {
    chai.request(app)
      .get('/api/v1/read/all/completed/trips')
      .end((err, res) => {
        expect(res.body.status).to.eql('success');
        expect(res.body.result).to.be.an('array');
        done();
      });
  });

  it('should not find a trip to finish', (done) => {
    chai.request(app)
      .patch('/api/v1/complete/trip/732ab2c8-17bc-421e-afca-258vd9c12451')
      .send({ price: 5000 })
      .end((err, res) => {
        expect(res.body.status).to.eql('failed');
        expect(res.body.message).to.eql('Trip not found');
        done();
      });
  });

  it('should finish the trip', (done) => {
    chai.request(app)
      .patch(`/api/v1/complete/trip/${id}`)
      .send({ price: 500 })
      .end((err, res) => {
        expect(res.body.status).to.eql('success');
        expect(res.body.message).to.eql('Trip completed');
        done();
      });
  });
});
