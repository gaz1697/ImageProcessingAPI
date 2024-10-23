import { promises as fsPromises } from 'fs';
import sharp from 'sharp';
import { cacheImage, isCached } from './caching';

export const processImages = async (name: string, height: number, width: number): Promise<Buffer> => {
  const path = './images/' + name + '.jpg';
  const thumpPath = `./images/thumps/${name} width${width} height${height}.jpeg`;
  try {
    if (!isCached(thumpPath)) {
      cacheImage(thumpPath);
      await sharp(path).resize(width, height).jpeg().toFile(thumpPath);
    }

    return await fsPromises.readFile(thumpPath);
  } catch (error: unknown) {
    throw new Error(`failed to process image: ${name} as ${error}`);
  }
};
