import supertest from 'supertest';
import app from '../app';

const request = supertest(app);

describe('testing app server functionality', () => {
  it('gets the app endpoint', async () => {
    const response = await request.get('/');
    expect(response.text).toBe('Image Processing api use endpoint /api/images to process images');
  });
  it('receive a 404 response for unavailable endpoints ', async () => {
    const response = await request.get('/unavailable');
    expect(response.status).toBe(404);
  });
});
