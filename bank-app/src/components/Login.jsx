import React from 'react'
import Input from './Input'
import Button from './Button'

const Login = () => {
  
  return (
    <div>
      <Input name="email" type="email" placeholder="Email"/><br/>
      <Input name="pass" type="password" placeholder="Password"/>
      <Button text="SIGN IN" type="submit"></Button>
    </div>
  )
}

export default Login
