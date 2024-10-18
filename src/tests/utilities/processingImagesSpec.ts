import { processImages } from '../../utilities/processImages';
import { promises as fsPromises } from 'fs';
describe('testing images processing functionality', () => {
  beforeAll(async () => {
    await fsPromises.mkdir('./images/thumps', { recursive: true });
  });
  it('gets a an image buffer in response to a correct inputs', async () => {
    const buffer = await processImages('fjord', 400, 400);
    expect(buffer).toBeTruthy();
  });
  it('throws an error in response to bad inputs', async () => {
    try {
      const buffer = await processImages('fjordrrw', 400, 400);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
