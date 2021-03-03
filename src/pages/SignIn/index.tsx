import React, { useState } from 'react';
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
import { useHistory } from 'react-router';

import Modal from './../../components/Modal/index';
type Inputs = {
  email: string;
  password: string;
};

const SignInSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .email('Please, inform an valid e-mail'),
  password: yup.string().required('Password is required'),
});

const SignIn = () => {
  //
  const { register, handleSubmit, errors } = useForm<Inputs>({
    resolver: yupResolver(SignInSchema),
    mode: 'onBlur',
  });

  const [isOpen, setIsOpen] = useState(false);

  const { signIn } = useAuth();
  const history = useHistory();

  const submitForm = async ({ email, password }: Inputs) => {
    try {
      await SignInSchema.validate(
        { email, password },
        {
          abortEarly: false, // para retorar todos os erros de uma só vez, por padrão ele vai retornando um a um
        },
      );

      const result = await signIn({
        email: 'clbmribas@gmail.com',
        password: 'Claudi@202',
      });

      if (result === 'SUCCESS') {
        history.push('/appointment');
      } else {
        setIsOpen(true);
      }
    } catch (error) {
      console.log('errors ', errors, '---', error);
    }
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
              error={errors.email?.message}
            />
            <Input
              id="password"
              name="password"
              icon={FiLock}
              placeholder="Password"
              type="password"
              inputRef={register}
              error={errors.password?.message}
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
      <Modal isOpen={isOpen} />
    </Container>
  );
};

export default SignIn;
