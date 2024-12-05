// @flow
import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

type Transaction = {
  id: number,
  text: string,
  amount: number,
};

function AddTransection(): React$Node {
  const { addTrasnsection } = useContext(GlobalContext);

  const [text, setText] = useState<string>('');
  const [amount, setAmount] = useState<number | string>(0);

  function handleSubmit(e: SyntheticEvent<HTMLFormElement>): void {
    e.preventDefault();

    if (amount === 0 || text.trim() === '') {
      return;
    }

    const newTransection: Transaction = {
      id: Math.trunc(Math.random() * 10000),
      text,
      amount: Number(amount),
    };

    addTrasnsection(newTransection);

    // Reset the form
    setAmount(0);
    setText('');
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter Text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (Negative = Expense, Positive = Income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount..."
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
}

export default AddTransection;
