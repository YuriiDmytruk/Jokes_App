import { getRandomCategory } from '../../api';

describe('getRandomCategory', () => {
  it('returns a string', () => {
    const category = getRandomCategory();
    expect(typeof category).toBe('string');
  });

  it('not returns udefined', () => {
    const category = getRandomCategory();
    expect(category).not.toBe(undefined);
  });
});