import PropTypes from 'prop-types';
import {
  StyledUserInfo,
  StyledUserStatus,
  StyledUserAvatar,
  StyledUserName,
} from './styles';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <StyledUserInfo>
    <StyledUserStatus isOnline={isOnline} />
    <StyledUserAvatar alt={`Avatar of ${name}`} src={avatar} />
    <StyledUserName> {name} </StyledUserName>
  </StyledUserInfo>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};