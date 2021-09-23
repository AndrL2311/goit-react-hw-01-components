import Profile from './components/profile/Profile';
import user from './components/profile/user.json';
import Statistics from './components/statistic/Statistics';
import statisticalData from './components/statistic/statistical-data.json';

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
    </div>
  );
}

export default App;
