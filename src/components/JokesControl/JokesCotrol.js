import React, { useState } from "react";

import "./JokesControl.css";

export default function JokesControl(props) {
  const [amount, setAmount] = useState();
  const [isValid, setValid] = useState(false);

  const validateJokesAmountInput = (e) => {
    if (e.target.value.match(/^[0-9]+$/) != null) {
      const number = +e.target.value;
      if (number >= 1 && number <= 10) {
        setAmount(number);
        setValid(true);
        return;
      }
    }
    setValid(false);
  };

  const changeAmount = () => {
    props.fetchJokes(amount);
  };

  return (
    <div>
      <input
        placeholder="input amount of Jokes"
        onChange={(e) => {
          validateJokesAmountInput(e);
        }}
      />
      <button onClick={changeAmount} disabled={!isValid}>
        ADD
      </button>
    </div>
  );
}
