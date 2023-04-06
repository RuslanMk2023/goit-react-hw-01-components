import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json'

import { Profile, Statistics, FriendList, TransactionHistory } from 'components';

const appStyle = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  pading: '20px',
};

export const App = () => {
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

      <TransactionHistory items={transactions} />
    </div>
  );
};
