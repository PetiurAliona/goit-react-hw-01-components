import styles from "./FriendList.module.css"
import FriendListItem from "../FriendListItem/FriendListItem"
import PropTypes from "prop-types"

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
  )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
}

export default FriendList
