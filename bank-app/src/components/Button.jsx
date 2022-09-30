import React from 'react'

const Button = ({text, onSubmit, type}) => {
  return (
    <div>
        <button className="border-2 rounded-lg bg-slate-200" onSubmit={onSubmit} type={type}>{text}</button>
    </div>
  )
}

export default Button