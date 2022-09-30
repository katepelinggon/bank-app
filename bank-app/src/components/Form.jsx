import React from 'react'
import SignUp from './SignUp'
import Login from './Login'

const Form = () => {
    const accounts = [];
    
  return (
    <div>
        <div className="flex items-center justify-center h-screen">
            <div className="rounded-xl shadow-xl max-w-md">
                <div className="flex justify-evenly ">
                <h1>SIGN IN</h1>
                <h1>SIGN UP</h1>
                </div><br/>
            <Login/>
            <SignUp/>
            </div>
        </div>
    </div>
  )
}

export default Form
