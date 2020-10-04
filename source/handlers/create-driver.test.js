const { describe, it } = require('mocha');
const chai = require('chai');
const http = require('chai-http');

const app = require('../../app');

const { expect } = chai;

chai.use(http);

describe('testing the driver handler', () => {
  const driver = {
    firstname: 'Harerimana',
    lastname: 'Claude',
    email: 'harera2020@gmail.com',
    phonenumber: '+250788995532',
    gender: 'male'
  };

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

  it('should create a new driver', (done) => {
    chai.request(app)
      .post('/api/v1/create/driver')
      .send({
        firstname: 'Habimana',
        lastname: 'Emmanuel',
        email: 'habemmy2020@gmail.com',
        phonenumber: '+250788998899',
        gender: 'male'
      })
      .end((err, res) => {
        expect(res.body.status).to.eql('success');
        expect(res.body.message).to.eql('Data Created.');
        done();
      });
  });
});
