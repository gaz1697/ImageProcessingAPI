import { promises as fsPromises } from 'fs';
import sharp from 'sharp';
import { cacheImage, isCached } from './caching';

export const processImages = async (name: string, height: number, width: number): Promise<string> => {
  const path = '/Users/abdulrahman/Documents/Projects/ImageProcessingAPI/images/' + name + '.jpg';
  const thumpPath = `/Users/abdulrahman/Documents/Projects/ImageProcessingAPI/images/thumps/${name} width${width} height${height}.jpeg`;
  if (isCached(thumpPath)) return thumpPath;
  cacheImage(thumpPath);
  try {
    const image = await fsPromises.readFile(path);
    await sharp(image).resize(width, height).jpeg().toFile(thumpPath);
  } catch (error) {
    console.log(error);
  }
  return thumpPath;
};
