const { describe, it } = require('mocha');
const chai = require('chai');
const http = require('chai-http');

const app = require('../../app');

const { expect } = chai;

chai.use(http);

describe('testing the driver handler', () => {
  const driver = {
    firstname: 'Sibomana',
    lastname: 'Emmanuel',
    email: 'sibo2020@gmail.com',
    phonenumber: '+250788996632',
    gender: 'male'
  };

  it('should check if the rider already exist', (done) => {
    chai.request(app)
         .post('/api/v1/create/rider')
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
      .post('/api/v1/create/rider')
      .send({})
       .end((err, res) => {
         expect(res.body.status).to.eql('failed');
         expect(res.body.message).to.eql('firstname is required');
         done();
       });
  });

  it('should create a new rider', (done) => {
    chai.request(app)
      .post('/api/v1/create/rider')
      .send({
        firstname: 'Kanuma',
        lastname: 'Castro',
        email: 'KanumaCasa@gmail.com',
        phonenumber: '+250781998899',
        gender: 'male'
      })
      .end((err, res) => {
        expect(res.body.status).to.eql('success');
        expect(res.body.message).to.eql('Data Created.');
        done();
      });
  });
});
