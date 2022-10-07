import React from 'react'
import Input from './Input'
import Button from './Button'

const Expenses = ({balance, changeState}) => {

    const addExpense = (e) => {

        e.preventDefault();
        balance -= parseFloat(e.target.expenseAmount.value);
        localStorage.setItem("balance", JSON.stringify(balance));
        changeState(balance.toFixed(3))
        console.log(e.target.Category.value)
        console.log(balance)
    }
  return (
    <div>
      <div >
        <h1>Expenses</h1>
        <form onSubmit={addExpense}>
          <select name="Category">
            <option value="Select">Select Category</option>
            <option value="Food">Food</option>
            <option value="Transportation">Transportation</option>
            <option value="Shopping">Shopping</option>
            <option value="Housing">Housing</option>
            <option value="Pet">Pet</option>
            <option value="Socializing">Socializing</option>
            <option value="Games">Games</option>
            <option value="Gifts">Gifts</option>
            <option value="Business">Business</option>
            <option value="Insurance">Insurance</option>
            <option value="Utilities">Utilities</option>
          </select>
          <Input type="text" name="expenseAmount"placeholder="Enter amount"></Input>
          <Button text = "Add Expense"></Button>
        </form>
        <div>
          EXPENSES TABLE
        </div>  
      </div>
    </div>
  )
}

export default Expenses
