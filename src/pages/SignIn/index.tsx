import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { useToasts } from 'react-toast-notifications';
import { ErrorMessage } from '@hookform/error-message';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router';
/**/
import ActivityIndicator from './../../components/ActivityIndicator/index';
import Button from '../../components/Button';
import Input from './../../components/Input/index';
import goBarberLogo from '../../assets/logo.svg';
import { Response } from '../../types/response';
import { useAuth } from '../../context/AuthContext';
/*styles*/
import { Container, Content, FrontImage, Left, Right } from './styles';

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
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, errors } = useForm<Inputs>({
    resolver: yupResolver(SignInSchema),
    mode: 'onBlur',
  });

  const { signIn } = useAuth();
  const history = useHistory();
  const { addToast } = useToasts();

  const submitForm = async ({ email, password }: Inputs) => {
    //
    try {
      await SignInSchema.validate(
        { email, password },
        {
          abortEarly: false, // para retorar todos os erros de uma só vez, por padrão ele vai retornando um a um
        },
      );

      setIsLoading(true);
      const result = await signIn({
        email: 'clbmribas@gmail.com',
        password: 'Claudi@202',
      });

      if (result?.code === Response.Ok) {
        history.push('/appointment');
      } else {
        addToast(result?.message, {
          appearance: 'error',
          autoDismiss: true,
        });
      }
    } catch (error) {
      addToast(
        'An unexpected error has occurred. Please wait a few minutes or contact us',
        {
          appearance: 'error',
          autoDismiss: true,
        },
      );
    }
    setIsLoading(false);
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
            <ErrorMessage
              name="email"
              errors={errors}
              render={({ message }) => <p>{message}</p>}
            />
            <Input
              id="email"
              name="email"
              icon={FiMail}
              placeholder="E-mail"
              inputRef={register}
              error={errors.email?.message}
            />
            <ErrorMessage
              name="password"
              errors={errors}
              render={({ message }) => <p>{message}</p>}
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
          </form>
          {isLoading && <ActivityIndicator />}
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
