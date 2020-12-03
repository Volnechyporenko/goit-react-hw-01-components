import PropTypes from "prop-types";
import s from './Statistics.module.css';

const StatisticItem = ({ label, percentage }) => (
  <>
    <span className={s.label}>{label}</span>
    <span className={s.percentage}>{percentage}%</span>
  </>
);

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticItem;
