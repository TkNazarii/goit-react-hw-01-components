import PropTypes from 'prop-types'

const Statistics = props => {

  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {props.stats.map(one => {
          return (
            <li className="item" key={one.id}>
              <span className="label">{one.label}</span>
              <span className="percentage">{one.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
	stats: PropTypes.arrayOf(
	  PropTypes.shape({
		id: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
		percentage: PropTypes.number.isRequired,
	  })
	).isRequired,
  };

