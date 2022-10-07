import React from 'react'
import { useState } from 'react';
import Input from './Input';
import Button from './Button';
import Expenses from './Expenses';

const Deposit = ({balance, changeState}) => {

    // Add deposit amount to balance
    const deposit = (e) => {
        e.preventDefault();
        balance += parseFloat(e.target.depositAmount.value);
        localStorage.setItem("balance", JSON.stringify(balance));
        changeState(balance.toFixed(3))
    }

    // Subtract withdraw amount from balance
    const withdraw = (e) => {
        e.preventDefault();
        balance -= parseFloat(e.target.withdrawAmount.value);
        localStorage.setItem("balance", JSON.stringify(balance));
        changeState(balance.toFixed(3))
    }

  return (
    <div>
      <h1>Deposit and Withdraw</h1>
      <form onSubmit={deposit}>
        <Input type="text" name="depositAmount" placeholder="Enter amount"></Input>
        <Button text="Deposit"></Button>
      </form>
      
      <form onSubmit={withdraw}>
        <Input type="text" name="withdrawAmount" placeholder="Enter amount"></Input>
        <Button text="Withdraw"></Button>
      </form>
    </div>

  )
}

export default Deposit
