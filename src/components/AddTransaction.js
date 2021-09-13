import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const { addTransaction, transactions } = useContext(GlobalContext);
  const submitTransaction = (e) => {
    e.preventDefault();
    addTransaction({
      id: transactions.length + 1,
      text,
      amount: +amount,
    });
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={submitTransaction}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            placeholder='Enter text...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type='number'
            placeholder='Enter amount...'
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </>
  );
};
