import PropTypes from 'prop-types'
import css from "./FriendList.module.css"

const FriendList = props => {
	console.log(props.friends[0].isOnline);

	const styleIsOnline = (a) => {
		if (a) {
			return {
				background: 'green',
			}
		} else {
			return {
				background: 'red',
			}	
		}
	}

  return (
<ul className={css["friend-list"]}>
	{props.friends.map(one => {
          return (
            <li className={css["friend-list__item"]} key={one.id}>
				<span className={css["friend-list__status"]} style={styleIsOnline(one.isOnline)}></span>
				<img className={css["friend-list__avatar"]} src={one.avatar} alt="User avatar" width="48" />
				<p className={css['friend-list__name']}>{one.name}</p>
			</li>
            );
        })}
</ul>
  )
};

export default FriendList;

FriendList.propTypes = {
	friends: PropTypes.arrayOf(
	  PropTypes.shape({
		avatar: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		isOnline: PropTypes.bool.isRequired,
		id: PropTypes.number.isRequired,
	  })
	).isRequired,
  };
