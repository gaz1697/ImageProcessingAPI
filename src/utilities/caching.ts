import { promises as fsPromises } from 'fs';

const cashedImagesSet = new Set();

const cacheImage = async (path: string): Promise<void> => {
  cashedImagesSet.add(path);
  if (cashedImagesSet.size == 1) {
    try {
      await fsPromises.mkdir('/Users/abdulrahman/Documents/Projects/ImageProcessingAPI/images/thumps');
    } catch (error) {
      throw error;
    }
  }
};

const isCached = (path: string): boolean => {
  return cashedImagesSet.has(path);
};

const removeCache = async (): Promise<void> => {
  try {
    await fsPromises.rm('/Users/abdulrahman/Documents/Projects/ImageProcessingAPI/images/thumps', {
      force: true,
      recursive: true,
    });
  } catch (error) {
    console.log(error);
  }
  process.exit(0);
};

export { cacheImage, isCached, removeCache };
