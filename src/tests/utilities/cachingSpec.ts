import { isCached, cacheImage, removeCache, pathExist } from '../../utilities/caching';

describe('testing caching functionality', () => {
  it("cacheImage(path) doesn't throw an error", async () => {
    expect(await cacheImage('path')).not.toThrowError;
  });
  it('isCached(path) returns true', () => {
    expect(isCached('path')).toBeTrue();
  });
  it('isCached(newPath) returns false', () => {
    expect(isCached('newPath')).toBeFalse();
  });
  it('pathExist(images/fjord.jpg) returns true', async () => {
    expect(await pathExist('images/fjord.jpg')).toBeTrue();
  });
  it('pathExist(images/doesntExist.jpg) returns false', async () => {
    expect(await pathExist('images/doesntExist.jpg')).toBeFalse();
  });
  it('removeCache() to remove cached thumps folder', async () => {
    await removeCache();
    expect(await pathExist('images/thumps')).toBeFalse();
  });
});
