import PropTypes from 'prop-types';
import StatisticItem from './StatisticItem/StatisticItem';
import s from '../Statistics.module.css';

const StatisticsList = ({ stats }) => (
  <ul>
    {stats.map((item, index) => (
      <StatisticItem
        label={item.label}
        percentage={item.percentage}
        key={item.id}
        index={index}
      />
    ))}
  </ul>
);

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default StatisticsList;
