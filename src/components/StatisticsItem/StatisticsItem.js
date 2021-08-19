import { randomColor } from "../../utils/function"
import styles from "./StatisticsItem.module.css"
import PropTypes from "prop-types"

const StatisticsItem = ({ label, percentage }) => {
  return (
    <li
      className={styles.item}
      style={{
        backgroundColor: randomColor(),
      }}
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  )
}

StatisticsItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
}

export default StatisticsItem
