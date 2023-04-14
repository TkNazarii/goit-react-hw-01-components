import PropTypes from 'prop-types'
import { BsFillPersonFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { BsChatText } from "react-icons/bs";

// import './Profile.css'
import css from "./Profile.module.css"
// console.log(css);

const Profile = props => {
  return (
<div className={css['profile']}>
    <div className={css['profile__description']}>
      <img
        src={props.avatar}
        alt="User avatar"
        className="description__avatar"
      />
	  
      <p className="profile__description-name"><BsFillPersonFill />{props.username}</p>
      <p className="profile__description-tag"><BsChatText />{props.tag}</p>
      <p className="profile__description-location"><GoLocation />{props.location}</p>
    </div>

    <ul className={css['profile__stats']}>
      <li className={css["profile__stats-item"]}>
        <span className="profile__stats-label">Followers</span>
        <span className="profile__stats-quantity">{props.stats.followers}</span>
      </li>
      <li className={css["profile__stats-item"]}>
        <span className="profile__stats-label">Views</span>
        <span className="profile__stats-quantity">{props.stats.views}</span>
      </li>
      <li className={css["profile__stats-item"]}>
        <span className="profile__stats-label">Likes</span>
        <span className="profile__stats-quantity">{props.stats.likes}</span>
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
