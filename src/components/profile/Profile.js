import PropTypes from 'prop-types'

const Profile = props => {
  return (
<div className="profile">
    <div className="description">
      <img
        src={props.avatar}
        alt="User avatar"
        className="avatar"
      />
      <p className="name">{props.username}</p>
      <p className="tag">{props.tag}</p>
      <p className="location">{props.location}</p>
    </div>

    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{props.stats.followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{props.stats.views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{props.stats.likes}</span>
      </li>
    </ul>
  </div>
  )
};

export default Profile;

Profile.propTypes = {
	username: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
	stats: PropTypes.shape({
		followers: PropTypes.number.isRequired,
		views: PropTypes.number.isRequired,
		likes: PropTypes.number.isRequired,
	  }).isRequired,
}
