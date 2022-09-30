import React from 'react'
import { useState } from 'react'
import SignUp from './SignUp'
import Login from './Login'

const Form = () => {

  // Get Local Storage
  const accounts = JSON.parse(localStorage.getItem("accounts")) || [];

  // Sign Up React States
  const [signUpOpen, setsignUpOpen] = useState(false);
  const [signInOpen, setsignInOpen] = useState(true);

  // Toggle between Sign Up and Sign In components
  const toggleRegister = (e) => {
    setsignUpOpen(current => !current);
    setsignInOpen(current => !current);
//HIDE ERRORMESSAGES
  }

  function addAccount(e){
      // Prevent page reload
      e.preventDefault();
      
      // Create object from form data
      let account = {FirstName: e.target.firstName.value,
        LastName: e.target.lastName.value,
        Email:e.target.email.value, 
        Password:e.target.password.value}

      // Push objects into array
      accounts.push(account)
      // Set array of objects into Local Storage
      localStorage.setItem("accounts", JSON.stringify(accounts))

      // Reload page to return to Sign In
      window.location.reload();
// CREATE RENDER FOR SUCCESSFUL ACCOUNT CREATION
  }

  // Error Message React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errors = {
    email: "User does not exist",
    pass: "Incorrect password"
  };

  const logIn = (event) => {
    // Prevent page reload
    event.preventDefault();

    var { email, pass } = document.forms[0];

    // Find user login info
    const userData = accounts.find((user) => user.Email === email.value);

    // Compare user info
    if (userData) {
      if (userData.Password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
//INPUT CHANGESTATE TO DASHBOARD HERE          
      }
    } else {
      // User not found
      setErrorMessages({ name: "email", message: errors.email });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
//FIX CLASSNAME/STYLING HERE
    );

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="rounded-xl shadow-xl max-w-md">
          <div className="flex justify-evenly ">
            <button onClick={toggleRegister}>SIGN IN</button>
            <button onClick={toggleRegister}>SIGN UP</button>
          </div><br/>
          <form onSubmit={logIn}>
          {renderErrorMessage("email")}
          {renderErrorMessage("pass")}
            {signInOpen && <Login/>}
          </form>
          <form onSubmit={addAccount}>
            {signUpOpen && <SignUp/>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form
