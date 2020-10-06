const { describe, it, before } = require('mocha');
const chai = require('chai');
const http = require('chai-http');

const app = require('../../app');

const { expect } = chai;

chai.use(http);

describe('testing the driver handler', () => {
  let id;
  const driver = {
    firstname: 'Hakiza',
    lastname: 'Bosco',
    email: 'hakBos2020@gmail.com',
    phonenumber: '+250788995912',
    gender: 'male'
  };

  before((done) => {
    chai.request(app)
        .post('/api/v1/create/driver')
        .send(driver)
        .end((err, res) => {
          expect(res.body.status).to.eql('success');
          expect(res.body.message).to.eql('Data Created.');
          done();
        });
  });

  it('should check if the driver already exist', (done) => {
    chai.request(app)
         .post('/api/v1/create/driver')
         .send(driver)
         .end((err, res) => {
           expect(res.status).to.eql(400);
           expect(res.body.status).to.eql('failed');
           expect(res.body.message).to.eql('User already exist');
           done();
         });
  });

  it('should validate the input', (done) => {
    chai.request(app)
      .post('/api/v1/create/driver')
      .send({})
       .end((err, res) => {
         expect(res.body.status).to.eql('failed');
         expect(res.body.message).to.eql('firstname is required');
         done();
       });
  });
  it('should get all the riders', (done) => {
    chai.request(app)
    .get('/api/v1/read/all/drivers')
    .end((err, res) => {
      id = res.body.result[0].id;
      expect(res.body.status).to.eql('success');
      expect(res.body.result).to.be.an('array');
      done();
    });
  });

  it('should get one drider', (done) => {
    chai.request(app)
    .get(`/api/v1/read/driver/${id}`)
    .end((err, res) => {
      expect(res.body.status).to.eql('success');
      expect(res.body.result).to.be.an('array');
      done();
    });
  });

  it('should not find a driver', (done) => {
    chai.request(app)
    .get('/api/v1/read/driver/741faf39-1cd3-4c1a-8051-9a71fd75b689')
    .end((err, res) => {
      expect(res.body.status).to.eql('failed');
      expect(res.body.message).to.eql('driver not found');
      done();
    });
  });
});
