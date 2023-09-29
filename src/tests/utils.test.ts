import { validateJokesAmountInput } from '../utils'; // Import your utility function

describe('validateJokesAmountInput', () => {
  it('should return true for valid input (between 1 and 10)', () => {
    const isValid = validateJokesAmountInput('5');
    expect(isValid).toBe(true);
  });

  it('should return false for non-numeric input', () => {
    const isValid = validateJokesAmountInput('abc');
    expect(isValid).toBe(false);
  });

  it('should return false for numeric input less than 1', () => {
    const isValid = validateJokesAmountInput('0');
    expect(isValid).toBe(false);
  });

  it('should return false for numeric input greater than 10', () => {
    const isValid = validateJokesAmountInput('11');
    expect(isValid).toBe(false);
  });

  it('should return true for numeric input equal to 1', () => {
    const isValid = validateJokesAmountInput('1');
    expect(isValid).toBe(true);
  });

  it('should return true for numeric input equal to 10', () => {
    const isValid = validateJokesAmountInput('10');
    expect(isValid).toBe(true);
  });
});
