const sendGridWebhookPOST = require('../data/sendGridWebhookPOST');
const conn = require('../../db');

describe('Mockgoose', () => {

    before(done => {
        conn.open().then(() => done()).catch(done);
    });

    after(done => {
        conn.close().then(() => done()).catch(done);
    });

    it('is mocked', done => {
        expect(mockgoose.helper.isMocked()).to.be.true;
    });
});

describe('Survey Routes', () => {
  describe('POST /api/surveys/webhooks', () => {
    it('returns a match', done => {
        request.post('/api/surveys/webhooks')
            .send(sendGridWebhookPOST.input)
            .expect(200)
            .end((err, res) => {
                expect(res.body).to.eql(sendGridWebhookPOST.output)
                done(err);
            });
    });
  });
});
