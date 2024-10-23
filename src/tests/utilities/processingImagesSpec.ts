import { processImages } from '../../utilities/processImages';
import { promises as fsPromises } from 'fs';
describe('testing images processing functionality', (): void => {
  beforeAll(async (): Promise<void> => {
    await fsPromises.mkdir('./images/thumps', { recursive: true });
  });
  it('gets an image buffer in response to correct inputs', async (): Promise<void> => {
    const buffer = await processImages('fjord', 400, 400);
    expect(buffer).toBeTruthy();
  });
  it('throws an error in response to bad inputs', async (): Promise<void> => {
    try {
      const buffer = await processImages('fjordrrw', 400, 400);
    } catch (error: unknown) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
