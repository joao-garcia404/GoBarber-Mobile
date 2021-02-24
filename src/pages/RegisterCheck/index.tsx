import React from 'react';

import { useNavigation } from '@react-navigation/native';

import LottieView from 'lottie-react-native';

import {
  Container,
  Info,
  Title,
  Button,
  ButtonText,
  AnimationContainer,
} from './styles';

import * as Check from '../../assets/animationCheck.json';

const RegisterCheck: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <AnimationContainer>
          <LottieView source={Check} resizeMode="contain" autoPlay />
        </AnimationContainer>
        <Title>Cadastro concluído</Title>
        <Info>Agora é só fazer login</Info>

        <Button onPress={() => navigation.navigate('SignIn')}>
          <ButtonText>OK</ButtonText>
        </Button>
      </Container>
    </>
  );
};

export default RegisterCheck;
