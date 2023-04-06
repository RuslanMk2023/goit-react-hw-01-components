import PropTypes from 'prop-types';

import { FriendListItem } from './FriendListItem/FriendListItem';
import { WrapperStyledFriendList } from './styles';

export const FriendList = ({ friends }) => {
  return (
    <WrapperStyledFriendList>
      {friends.map(friendItem => {
        const { avatar, name, isOnline, id } = friendItem;

        return (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        );
      })}
    </WrapperStyledFriendList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};