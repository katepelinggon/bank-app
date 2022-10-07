import React from 'react'
import { useState } from 'react'
import Deposit from './Deposit'
import Expenses from './Expenses'

const Dashboard = () => {

  let balance = JSON.parse(localStorage.getItem("balance")) || 0;

  const [showBalance, setShowBalance] = useState(balance.toFixed(3));

  const [page, setPage] = useState(true);

  // const changePage = () => {
  //   setPage(!page);
  // }

  return (
    <div>
      <div>Balance: {showBalance}</div>
      <div className="flex items-center justify-center h-screen">
        <div>
          <button onClick="changePage">Accounts</button><br/>
          <button onClick="changePage">Deposit/Withdraw</button><br/>
          <button onClick="changePage">Transfer</button><br/>
          <button onClick="changePage">Transactions</button>
        </div>
        <div>
          <Deposit balance={balance} changeState={setShowBalance}/>
          <Expenses balance={balance} changeState={setShowBalance}/>
        </div>
        <p>ACCOUNT DETAILS</p>
      </div>
    </div>
  )
}

export default Dashboard
