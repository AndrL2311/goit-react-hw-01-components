import Profile from './components/profile/Profile';
import user from './components/profile/user.json';

import Statistics from './components/statistical/Statistics';
import statData from './components/statistical/statistical-data.json';

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
      <Statistics title={statData.title} stats={statData.stats} />
    </div>
  );
}

export default App;
