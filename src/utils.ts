export const validateJokesAmountInput = (event: React.ChangeEvent<HTMLInputElement>): boolean => {
    if (event.target.value.match(/^[0-9]+$/) != null) {
      const amount: number = parseInt(event.target.value);
      if (amount >= 1 && amount <= 10) {
        return true;
      }
    }
    return false;
  };