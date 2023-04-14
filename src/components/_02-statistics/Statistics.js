import PropTypes from 'prop-types'
import css from "./Statistics.module.css"

const Statistics = props => {

  return (
    <section className={css["statistics"]}>
      <h2 className="title">Upload stats</h2>

      <ul className={css["statistics__stat-list"]}>
        {props.stats.map(one => {
          return (
            <li className="statistics__item" key={one.id}>
              <span className="statistics__label">{one.label}</span>
              <span className="statistics__percentage">{one.percentage}</span>
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

