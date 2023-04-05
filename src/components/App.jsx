import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';

const appStyle = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  // fontSize: 40,
  // color: '#010101',
}

export const App = () => {
  // console.log( JSON.stringify(user))

  return (
    <div style={appStyle}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />
    </div>
  );
};
