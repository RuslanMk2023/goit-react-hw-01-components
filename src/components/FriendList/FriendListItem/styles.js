import styled from 'styled-components';

export const StyledUserInfo = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  min-width: 260px;
  max-width: 350px;
  margin: 5px 0;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  background-color: #d6eaf8;
  color: #f3f4f5;
`;

export const StyledUserStatus = styled.span`
  background-color: ${props => (props.isOnline ? '#2ECC71' : '#E74C3C')};
  width: 15px;
  height: 15px;
  border-radius: 50px;
  margin: 15px;
`;

export const StyledUserAvatar = styled.img`
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
  background-color: #f3f4f5;
`;

export const StyledUserName = styled.p`
  color: #34495e;
  font-size: 20px;
  padding: 0 20px;
`;