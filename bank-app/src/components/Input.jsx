import React from 'react'

const Input = ({type, name, placeholder}) => {
  return (
    <input className="border-2 rounded-md" type={type} name={name} placeholder={placeholder} required/>
  )
}

export default Input