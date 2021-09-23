function FriendList({ friends }) {
  const listItem = friends.map(friend => (
    <li className="item" key={friend.id}>
      <span className="status">{friend.isOnline}</span>
      <img
        className="avatar"
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className="name">{friend.name}</p>
    </li>
  ));

  return <ul className="friend-list">{listItem}</ul>;
}

// =================================
//
//   const { avatar, name, isOnline } = friends;
//   return (
//     <ul className="friend-list">
//       {friends.map(friend => (
//         <li className="item">
//           <span className="status">{friend.isOnline}</span>
//           <img
//             className="avatar"
//             src={friend.avatar}
//             alt={friend.name}
//             width="48"
//           />
//           <p className="name">{friend.name}</p>
//         </li>
//       ))}
//     </ul>
//   );
export default FriendList;