// @flow
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function IncomeExpenses(): React$Node {
  const { transection } = useContext(GlobalContext);

  // Map amounts from transactions
  const amount: number[] = transection.map((obj) => obj.amount);

  // Calculate income (all positive values)
  const income: number = amount
    .filter((num) => num > 0)
    .reduce((acc, item) => acc + item, 0);

  // Calculate expense (all negative values summed)
  const expense: number = amount
    .filter((num) => num < 0)
    .reduce((acc, item) => acc + item, 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${income.toFixed(2)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">${Math.abs(expense).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
