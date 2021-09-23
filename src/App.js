import Profile from './components/profile/Profile';
import user from './components/profile/user.json';
import Statistics from './components/statistic/Statistics';
import statisticalData from './components/statistic/statistical-data.json';
import FriendList from './components/friendList/FriendList';
import friendsData from './components/friendList/friends.json';

function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friendsData} />
    </div>
  );
}

export default App;
