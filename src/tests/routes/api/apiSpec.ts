import supertest = require('supertest');
import app from '../../../app';

const request = supertest(app);

describe('testing api images processing functionality', () => {
  it('gets a jpeg/image in response to a correct request', async () => {
    const response = await request.get('/api/images?filename=fjord&&width=300&&height=700');
    expect(response.header['content-type']).toEqual('image/jpeg');
  });
  it('gets a 404 for a bad request', async () => {
    const response = await request.get('/api/images?filename=fjord&&width=300&&height=7fr00');
    expect(response.status).toBe(404);
  });
});
