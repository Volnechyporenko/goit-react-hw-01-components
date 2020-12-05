import PropTypes from 'prop-types';
import s from '../../Statistics.module.css';

const StatisticItem = ({ label, percentage, index }) => (
  <li className={`${s.item} ${s[`color${index}`]}`}>
    <span className={s.label}>{label}</span>
    <span className={s.percentage}>{percentage}%</span>
  </li>
);

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default StatisticItem;
