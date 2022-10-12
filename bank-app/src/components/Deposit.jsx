import React from 'react'
import { useState } from 'react';
import Input from './Input';
import Button from './Button';
import Expenses from './Expenses';

const Deposit = ({balance, changeState, transactionDetails}) => {

    // Add deposit amount to balance
    const deposit = (e) => {
      e.preventDefault();
      let dep = parseFloat(e.target.depositAmount.value);

      // Update balance
      balance += dep;
      localStorage.setItem("balance", JSON.stringify(balance));
      changeState(balance.toFixed(3))

      // Push deposit amount to transactions array
      let depositDetail = {Type: "Deposit", Amount: dep.toFixed(3), Balance: balance.toFixed(3)};
      transactionDetails.push(depositDetail)
      localStorage.setItem("transactionDetails", JSON.stringify(transactionDetails));
      }

      // Subtract withdraw amount from balance
      const withdraw = (e) => {
      e.preventDefault();
      let withd = parseFloat(e.target.withdrawAmount.value);

      // Update balance
      balance -= withd;
      localStorage.setItem("balance", JSON.stringify(balance));
      changeState(balance.toFixed(3))

      // Push withdrawal amount to transactions array
      let withdrawDetail = {Type: "Withdrawal", Amount: withd.toFixed(3), Balance: balance.toFixed(3)};
      transactionDetails.push(withdrawDetail)
      localStorage.setItem("transactionDetails", JSON.stringify(transactionDetails));
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
