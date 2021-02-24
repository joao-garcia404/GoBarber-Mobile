import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AnimationContainer = styled.SafeAreaView`
  width: 200px;
  height: 200px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  width: 200px;
  margin: 0 auto;
  font-size: 34px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  text-align: center;
  margin-bottom: 20px;
`;

export const Info = styled.Text`
  font-size: 20px;
  color: #999591;
  font-family: 'RobotoSlab-Medium';
  text-align: center;
  margin-bottom: 40px;
`;

export const Button = styled.TouchableOpacity`
  width: 100px;
  height: 50px;
  background: #ff9000;
  border-radius: 10px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #312e38;
  font-family: 'RobotoSlab-Medium';
`;
