import React from 'react'
import { useState } from 'react'
import Accounts from './Accounts'
import Deposit from './Deposit'
import Expenses from './Expenses'
import Transactions from './Transactions'
import Transfer from './Transfer'

const Dashboard = ({accounts}) => {

  let balance = JSON.parse(localStorage.getItem("balance")) || 0;
  let transactionDetails = JSON.parse(localStorage.getItem("transactionDetails")) || [];

  const [showBalance, setShowBalance] = useState(balance.toFixed(3));

  const [accountsPage, setAccountsPage] = useState(true);
  const [depositPage, setDepositPage] = useState(false);
  const [expensesPage, setExpensesPage] = useState(false);
  const [transferPage, setTransferPage] = useState(false);
  const [transactionsPage, setTransactionsPage] = useState(true);

  const showAccounts = () => {
    setAccountsPage(true);
    setDepositPage(false);
    setExpensesPage(false);
    setTransferPage(false);
    setTransactionsPage(false);
  }
  const showDeposit = () => {
    setAccountsPage(false);
    setDepositPage(true);
    setExpensesPage(false);
    setTransferPage(false);
    setTransactionsPage(true);
  }
  const showExpenses = () => {
    setAccountsPage(false);
    setDepositPage(false);
    setExpensesPage(true);
    setTransferPage(false);
    setTransactionsPage(true);
  }
  const showTransfer = () => {
    setAccountsPage(false);
    setDepositPage(false);
    setExpensesPage(false);
    setTransferPage(true);
    setTransactionsPage(true);
  }
  const showTransactions = () => {
    setAccountsPage(false);
    setDepositPage(false);
    setExpensesPage(false);
    setTransferPage(false);
    setTransactionsPage(true);
  }

  return (
    <div className="dashboard">
      <div>Balance: {showBalance}</div>
      <div className="flex items-center justify-center h-screen">
        <div>
          <button onClick={showAccounts}>Accounts</button><br/>
          <button onClick={showDeposit}>Deposit/Withdraw</button><br/>
          <button onClick={showExpenses}>Expenses</button><br/>
          <button onClick={showTransfer}>Transfer</button><br/>
          <button onClick={showTransactions}>Transactions</button>
        </div>
        <div>
          {accountsPage && <Accounts accounts={accounts}/>}
          {depositPage && <Deposit balance={balance} transactionDetails={transactionDetails} changeState={setShowBalance}/>}
          {expensesPage && <Expenses balance={balance} transactionDetails={transactionDetails} changeState={setShowBalance}/>}
          {transferPage && <Transfer />}
         
        </div>
        <div>
        {transactionsPage && <Transactions transactionDetails={transactionDetails}/>}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
