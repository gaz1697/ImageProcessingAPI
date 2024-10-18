import { promises as fsPromises } from 'fs';

const cashedImagesSet = new Set();

const cacheImage = async (path: string): Promise<void> => {
  cashedImagesSet.add(path);
  if (cashedImagesSet.size == 1) {
    await fsPromises.mkdir('./images/thumps', { recursive: true });
  }
};

const isCached = (path: string): boolean => {
  return cashedImagesSet.has(path);
};

const removeCache = async (): Promise<void> => {
  try {
    await fsPromises.rm('./images/thumps', {
      force: true,
      recursive: true,
    });
  } catch (error) {
    console.log(error);
  }
};

const pathExist = async (path: string): Promise<boolean> => {
  let pathExist = true;
  try {
    await fsPromises.readFile(path);
  } catch {
    pathExist = false;
  }
  return pathExist;
};

export { cacheImage, isCached, removeCache, pathExist };
