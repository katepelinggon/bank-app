import React from 'react'

const Accounts = ({accounts}) => {
  return (
    <div>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {accounts.map(acc => (
          <tr key={acc.FirstName}>
            <td>{acc.FirstName}</td>
            <td>{acc.LastName}</td>
            <td>{acc.Email}</td>
          </tr>
        ))}
      </tbody>
    </div>
  )
}

export default Accounts
