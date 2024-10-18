import { promises as fsPromises } from 'fs';
import sharp from 'sharp';
import { cacheImage, isCached, pathExist } from './caching';

export const processImages = async (name: string, height: number, width: number): Promise<Buffer> => {
  const path = './images/' + name + '.jpg';
  const thumpPath = `./images/thumps/${name} width${width} height${height}.jpeg`;
  try {
    if (!isCached(thumpPath)) {
      if (await pathExist(path)) {
        cacheImage(thumpPath);
        await sharp(path).resize(width, height).jpeg().toFile(thumpPath);
      } else {
        throw new Error("image doesn't exist");
      }
    }
    return await fsPromises.readFile(thumpPath);
  } catch (error) {
    throw new Error(`failed to process image: ${name} error: ${error}`);
  }
};
