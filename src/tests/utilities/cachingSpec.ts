import { isCached, cacheImage, removeCache } from '../../utilities/caching';

describe('testing caching functionality', () => {
  beforeAll(() => {});
  it('testing cacheImage(a valid Path)', () => {
    expect(cacheImage('path')).not.toThrowError();
  });
  it('testing cacheImage(a valid Path)', () => {
    expect(cacheImage('path')).not.toThrowError();
  });
  it('testing cacheImage(a valid Path)', () => {
    expect(cacheImage('path')).not.toThrowError();
  });
  it('testing cacheImage(a valid Path)', () => {
    expect(cacheImage('path')).not.toThrowError();
  });
});
