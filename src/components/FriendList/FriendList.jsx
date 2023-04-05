import PropTypes from 'prop-types';
import styled from 'styled-components'

import { FriendListItem } from './FriendListItem/FriendListItem';

const WrapperFriendList = styled.ul`
 display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px 20px;
  max-width: 400px;
  margin: 20px auto;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  background-color: #ebf5fb;
  color: #f3f4f5;
`;

export const FriendList = ({ friends }) => {
  return (
    <WrapperFriendList>
      {friends.map(friendItem => {
        const { avatar, name, isOnline, id } = friendItem;

        return <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          key={id}
        />;
      })}
    </WrapperFriendList>    
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