import React from 'react'

const Transactions = ({transactionDetails}) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {transactionDetails.map(trans => (
            <tr key={trans.Type}>
                <td>{trans.Type}</td>
                <td>{trans.Amount}</td>
                <td>{trans.Balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Transactions
