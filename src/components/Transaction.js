import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ list }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = list.amount < 0 ? '-' : '+';
  return (
    <li className={list.amount < 0 ? 'minus' : 'plus'}>
      {list.text} <span>{`${sign}$${Math.abs(list.amount)}`}</span>
      <button className='delete-btn' onClick={() => deleteTransaction(list.id)}>
        x
      </button>
    </li>
  );
};
