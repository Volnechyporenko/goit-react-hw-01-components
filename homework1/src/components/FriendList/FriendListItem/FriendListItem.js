import PropTypes from 'prop-types';
import s from '../FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={s.card}>
    <span className={`${s.status} ${isOnline ? s.online : ''}`} />
    <img className={s.avatar} src={avatar} alt={`${name} avatar`} width="48" />
    <p className={s.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
