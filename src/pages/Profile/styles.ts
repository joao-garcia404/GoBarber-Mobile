import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 100 : 40}px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0;
`;

export const LogoutButton = styled.TouchableOpacity`
  position: absolute;
  right: 24px;
  top: 20px;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 24px;
  top: 20px;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  width: 200px;
  margin-top: 100px;
  border-radius: 100px;
  align-self: center;
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;
  align-self: center;
`;
