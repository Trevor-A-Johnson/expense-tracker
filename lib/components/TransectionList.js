import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
function TransectionList() {
  const {
    transection,
    deleteTransection
  } = useContext(GlobalContext);
  return <div>
      <h3>Transaction History</h3>
      <ul className="list">
        {transection.map(obj => {
        const sign = obj.amount > 0 ? ' ' : '-';
        return <li key={obj.id} className={obj.amount > 0 ? 'plus' : 'minus'}>
              {obj.text}
              <span>
                {sign}${Math.abs(obj.amount)}
              </span>
              <button className="delete-btn" onClick={() => deleteTransection(obj.id)}>
                x
              </button>
            </li>;
      })}
      </ul>
    </div>;
}
export default TransectionList;