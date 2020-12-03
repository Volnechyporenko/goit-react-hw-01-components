import PropTypes from 'prop-types';
import StatisticItem from './StatisticItem';
import s from './Statistics.module.css';

const StatisticsList = ({ stats }) => (
  <ul>
    {stats.map((item, index) => (
      <li className={`${s.item} ${s[`color${index}`]}`} key={item.id}>
        <StatisticItem label={item.label} percentage={item.percentage} />
      </li>
    ))}
  </ul>
);

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ).isRequired,
};

export default StatisticsList;
