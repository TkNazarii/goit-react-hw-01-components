import Profile from './_01-profile';
import Statistics from './_02-statistics';
import FriendList from './_03-friendList';
import TransactionHistory from './_04-transactionHistory';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

import './App.css'

export const App = () => {
  return (
    <div className='wrapper'>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
	  <Statistics stats={data} />
	  <FriendList friends={friends} />
	  <TransactionHistory items={transactions} />
    </div>
  );
};
