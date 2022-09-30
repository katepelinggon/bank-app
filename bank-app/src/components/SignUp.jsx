import React from 'react'
import Button from './Button'
import Input from './Input'

const SignUp = () => {

  return (
    <div>
        <Input name="firstName" type="text" placeholder="First Name"/>
        <Input name="lastName" type="text" placeholder="Last Name"/><br/>
        <Input name="email" type="email" placeholder="Email"/><br/>
        <Input name="password" type="password" placeholder="Password"/>
        <Button text="SIGN UP" type="submit"/>
    </div>
  )
}

export default SignUp
