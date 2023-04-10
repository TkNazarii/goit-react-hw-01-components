const TransactionHistory = props => {
// console.log(props.items);
	return (
<table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
  {props.items.map(one => {
          return (
			<tr key={one.id}>
			<td>{one.type}</td>
			<td>{one.amount}</td>
			<td>{one.currency}</td>
		  </tr>
            );
        })}
  </tbody>
</table>
	)
  };
  
  export default TransactionHistory;
  