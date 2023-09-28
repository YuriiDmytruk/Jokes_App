import { getRandomCategory, fetchJokes } from '../../api';

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

/*
Continue Later
describe('fetchJokes', () => {
    test('not returns udefined with number', () => {
        return fetchJokes(0, 1).then(jokes => {
            expect(jokes).not.toBe(undefined);
        })
    });
    test('not returns udefined with 0', () => {
        return fetchJokes(0, 0).then(jokes => {
            expect(jokes).not.toBe(undefined);
        })
    });
    test('not returns udefined with -1', () => {
        return fetchJokes(0, -1).then(jokes => {
            expect(jokes).not.toBe(undefined);
        })
    });
});
*/