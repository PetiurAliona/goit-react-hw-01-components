import { name, tag, location, avatar, stats } from "./data/user.json"
import statisticalData from "./data/statistical-data.json"
import friends from "./data/friends.json"
import transactions from "./data/transactions.json"

import Profile from "./components/Profile/Profile"
import Statistics from "./components/Statistics/Statistics"
import FriendList from "./components/FriendList/FriendList"
import TransactionHistory from "./components/TransactionHistory/TransactionHistory"

const App = () => {
  return (
    <>
      <Profile name={name} tag={tag} location={location} avatar={avatar} stats={stats} />
      <Statistics title="Upload stats" stats={statisticalData} />;
      <Statistics stats={statisticalData} />;
      <FriendList friends={friends} />,
      <TransactionHistory items={transactions} />;
    </>
  )
}

export default App
