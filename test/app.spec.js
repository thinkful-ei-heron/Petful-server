const app = require('../src/app');

describe('App', () => {
  it('GET / responds with 200 "Hello, world!"', () => {
    return supertest(app)
      .get('/')
      .expect(200).end();
  });
  it('Get /api/cat', () => {
    return supertest(app)
      .get('/api/dog')
      .expect(200);
  });



});
