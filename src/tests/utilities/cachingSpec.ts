import { isCached, cacheImage, removeCache, pathExist } from '../../utilities/caching';

describe('testing caching functionality', () => {
  it('cacheImage(path) return a number', async () => {
    expect(await cacheImage('path')).not.toThrowError;
  });
  it('isCached(path) to return true', () => {
    expect(isCached('path')).toBeTrue();
  });
  it('isCached(newPath) to return false', () => {
    expect(isCached('newPath')).toBeFalse();
  });
  it('pathExist(images/fjord.jpg) to be true', async () => {
    expect(await pathExist('images/fjord.jpg')).toBeTrue();
  });
  it('pathExist(images/doesntExist.jpg) to be False', async () => {
    expect(await pathExist('images/doesntExist.jpg')).toBeFalse();
  });
  it('removeCache() to remove cached thumps folder', async () => {
    await removeCache();
    expect(await pathExist('images/thumps')).toBeFalse();
  });
});
