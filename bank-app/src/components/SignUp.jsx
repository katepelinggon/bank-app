import React from 'react'
import Button from './Button'
import Input from './Input'

const SignUp = () => {

  const accounts =[];

  function addAccount(e){
    e.preventDefault();

    let account = {FirstName: e.target.firstName.value,
      LastName: e.target.lastName.value,
      Email:e.target.email.value, 
      Password:e.target.password.value}

    accounts.push(account)
    localStorage.setItem("accounts", JSON.stringify(accounts))
    console.log(accounts)
  }

  return (
    <div className="border-2 rounded-lg">
      <form className="signup" onSubmit={addAccount}>
        <Input name="firstName" type="text" placeholder="First Name"/>
        <Input name="lastName" type="text" placeholder="Last Name"/><br/>
        <Input name="email" type="email" placeholder="Email"/><br/>
        <Input name="password" type="password" placeholder="Password"/>
        <Button text="SIGN UP" type="submit"/>
      </form>
    </div>
  )
}

export default SignUp
