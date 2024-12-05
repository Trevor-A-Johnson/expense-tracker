import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
function IncomeExpenses() {
  const {
    transection
  } = useContext(GlobalContext);
  const amount = transection.map(obj => obj.amount);
  const income = amount.filter(num => num > 0).reduce((acc, item) => acc + item, 0);
  const expense = amount.filter(num => num < 0).reduce((acc, item) => acc + item, 0);
  return <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${income.toFixed(2)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">${Math.abs(expense).toFixed(2)}</p>
      </div>
    </div>;
}
export default IncomeExpenses;