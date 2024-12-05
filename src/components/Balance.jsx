// @flow
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function Balance(): React$Node {
  const { transection } = useContext(GlobalContext);

  // Map amounts and calculate the total balance
  const amount: string = transection
    .map((item) => item.amount)
    .reduce((acc: number, item: number) => acc + item, 0)
    .toFixed(2);

  return (
    <>
      <h4>MY Balance:</h4>
      <h1>${amount}</h1>
    </>
  );
}

export default Balance;
