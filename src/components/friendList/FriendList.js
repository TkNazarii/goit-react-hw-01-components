import PropTypes from 'prop-types'

const FriendList = props => {

  return (
<ul className="friend-list">
	{props.friends.map(one => {
          return (
            <li className="item" key={one.id}>
				<span className="status">{one.isOnline}</span>
				<img className="avatar" src={one.avatar} alt="User avatar" width="48" />
				<p className={one.name}></p>
			</li>
            );
        })}
</ul>
  )
};

export default FriendList;


