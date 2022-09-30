import React, { forwardRef } from 'react'
import Input from './Input'
import Button from './Button'

const Login = () => {
  const signIn = () => {

  }

  return (
    <div>
        <form>
            <Input type="email" placeholder="Email"/><br/>
            <Input type="password" placeholder="Password"/>
            <Button text="SIGN IN" onSubmit={signIn}></Button>
        </form>
      
    </div>
  )
}

export default Login
