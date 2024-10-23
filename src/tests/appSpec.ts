import supertest from 'supertest';
import app from '../app';

const request = supertest(app);

describe('testing app server functionality', (): void => {
  it('gets the app endpoint', async (): Promise<void> => {
    const response = await request.get('/');
    expect(response.text).toBe('Image Processing api use endpoint /api/images to process images');
  });
  it('receives a 404 response for unavailable endpoints ', async (): Promise<void> => {
    const response = await request.get('/unavailable');
    expect(response.status).toBe(404);
  });
});
