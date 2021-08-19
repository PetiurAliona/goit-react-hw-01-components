import styles from "./Profile.module.css"
import PropTypes from "prop-types"
import StatsProfile from "../StatsProfile/StatsProfile"

const Profile = ({ name, tag, location, avatar, stats }) => {
  const statsArr = Object.entries(stats)
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className="">{tag}</p>
        <p className="">{location}</p>
      </div>
      <ul className={styles.stats}>
        {statsArr.map((e) => (
          <StatsProfile title={e[0]} value={e[1]} key={e[1]} />
        ))}
      </ul>
    </div>
  )
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
}

export default Profile
