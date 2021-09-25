import PropTypes from 'prop-types';

import s from './Profile.module.css';
import defaultImage from '../default.jpg';

function Profile(props) {
  const { avatar, name, tag, location, stats } = props;
  return (
    <div className={s.profile}>
      <div className="description">
        <img src={avatar} alt="Аватар пользователя" className="avatar" />
        <p className="name">{name}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={s.list}>
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
Profile.defaultProps = {
  avatar: defaultImage,
  name: 'N/A',
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.object,
};
export default Profile;
