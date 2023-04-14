import PropTypes from 'prop-types'
import css from "./TransactionHistory.module.css"

const TransactionHistory = props => {
	return (
<table className={css["transaction-history"]}>
  <thead>
    <tr className={css["transaction-history__thead"]}>
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

  TransactionHistory.propTypes = {
	items: PropTypes.arrayOf(
	  PropTypes.shape({
		id: PropTypes.string.isRequired,
		type: PropTypes.oneOf(['invoice', 'payment', 'withdrawal', 'deposit']).isRequired,
		amount: PropTypes.string.isRequired,
		currency: PropTypes.string.isRequired,
	  })
	).isRequired,
  };
  