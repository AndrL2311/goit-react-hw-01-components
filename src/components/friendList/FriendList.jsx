import PropTypes from 'prop-types';
import FriendListItem from '../friendListItem/FriendListItem';

function FriendList({ friends }) {
  const listItem = friends.map(friend => (
    <FriendListItem
      key={friend.id}
      isOnline={friend.isOnline}
      avatar={friend.avatar}
      name={friend.name}
    />
  ));

  return <ul className="friend-list">{listItem}</ul>;
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }),
  ),
};

export default FriendList;
