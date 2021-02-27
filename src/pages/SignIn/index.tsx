import React from 'react';
import { useForm } from 'react-hook-form';
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
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type Inputs = {
  email: string;
  password: string;
};

const SignInSchema = yup.object().shape({
  email: yup
    .string()
    .required('You must inform your e-mail')
    .email('Inform an valid e-mail'),
  password: yup.string().required('You must inform your password'),
});

const SignIn = () => {
  //
  const { register, handleSubmit, errors } = useForm<Inputs>({
    resolver: yupResolver(SignInSchema),
  });

  const { signIn } = useAuth();
  /*
email: 'clbmribas@gmail.com',
      password: 'Claudio@2021',
*/
  const submitForm = async ({ email, password }: Inputs) => {
    await signIn({
      email,
      password,
    });
  };

  return (
    <Container>
      <Left>
        <img
          src={goBarberLogo}
          alt="GoBarber logo displaying Awesome haircuts and shaves"
        />
        <Content>
          <h1>Login</h1>
          <form onSubmit={handleSubmit(submitForm)}>
            <Input
              id="email"
              name="email"
              icon={FiMail}
              placeholder="E-mail"
              inputRef={register}
            />
            <Input
              id="password"
              name="password"
              icon={FiLock}
              placeholder="Password"
              type="password"
              inputRef={register}
            />
            <Button type="submit">Sign in</Button>
            {errors && <p>{errors.email?.message}</p>}
          </form>
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
