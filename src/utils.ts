export const validateJokesAmountInput = (value: string): boolean => {
    if (value.match(/^[0-9]+$/) != null) {
      const amount: number = parseInt(value);
      if (amount >= 1 && amount <= 10) {
        return true;
      }
    }
    return false;
};
