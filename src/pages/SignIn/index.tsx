import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import goBarberLogo from '../../assets/logo.svg';

import {
  Container,
  Content,
  FrontImage,
  AnimationContainer,
  Left,
  Right,
} from './styles';
import Input from './../../components/Input/index';
import Button from '../../components/Button';
import { useAuth } from '../../context/AuthContext';

const SignIn = () => {
  console.log('werwer', `${process.env.REACT_APP_TOKEN_ENDPOINT}`);
  const { signIn } = useAuth();

  useEffect(() => {
    // async function load() {
    //   const rep = await signIn({
    //     email: 'clbmribas@gmail.com',
    //     password: 'Claudio@2021',
    //   });
    //   console.log('rep ', rep);
    // }

    signIn({
      email: 'clbmrias@gmail.com',
      password: 'Claudio@2021',
    }).then(response => console.log('res', response));
  }, [signIn]);
  return (
    <Container>
      <Left>
        <img
          src={goBarberLogo}
          alt="GoBarber logo displaying Awesome haircuts and shaves"
        />
        <Content>
          <h1>Login</h1>
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            placeholder="Password"
            type="password"
          />
          <Button>Sign in</Button>
          <a href="forgot">Forgot my password</a>
        </Content>
      </Left>
      <Right>
        <FrontImage />
      </Right>
    </Container>
  );
};

export default SignIn;
