import { isCached, cacheImage, removeCache, pathExist } from '../../utilities/caching';

describe('testing caching functionality', (): void => {
  it("cacheImage(path) doesn't throw an error", async () => {
    expect(await cacheImage('path')).not.toThrowError;
  });
  it('isCached(path) returns true', (): void => {
    expect(isCached('path')).toBeTrue();
  });
  it('isCached(newPath) returns false', (): void => {
    expect(isCached('newPath')).toBeFalse();
  });
  it('pathExist(images/fjord.jpg) returns true', async (): Promise<void> => {
    expect(await pathExist('images/fjord.jpg')).toBeTrue();
  });
  it('pathExist(images/doesntExist.jpg) returns false', async (): Promise<void> => {
    expect(await pathExist('images/doesntExist.jpg')).toBeFalse();
  });
  it('removeCache() to remove cached thumps folder', async (): Promise<void> => {
    await removeCache();
    expect(await pathExist('images/thumps')).toBeFalse();
  });
});
