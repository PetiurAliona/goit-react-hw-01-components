import styles from "./StatsProfile.module.css"
import PropTypes from "prop-types"

const StatsProfile = ({ title, value }) => {
  return (
    <li className={styles.item}>
      <span className={styles.label}>{title}</span>
      <span className={styles.quantity}>{value}</span>
    </li>
  )
}

StatsProfile.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number,
}

export default StatsProfile
