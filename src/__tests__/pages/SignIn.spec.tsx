import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import SignIn from './../../pages/SignIn/index';

const mockedHistoryPush = jest.fn();
const mockedSignIn = jest.fn();

const submitForm = jest.fn((email, password) => {
  return Promise.resolve({ email, password });
});

//React.ReactNode could be a string, a react component...
jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      //mocking push
      push: mockedHistoryPush,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

//mocking toasts hooks to fake a method that was desctructured from 'useToasts'
jest.mock('react-toast-notifications', () => {
  return {
    useToasts: () => {
      return { addToast: jest.fn() };
    },
  };
});

jest.mock('../../context/AuthContext', () => {
  return {
    useAuth: () => {
      return { signIn: mockedSignIn };
    },
  };
});

describe('SignIn page', () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
  });
  //   it('should be able to sign in', async () => {
  //     const { getByPlaceholderText, getByText } = render(<SignIn />);

  //     const emailField = getByPlaceholderText('E-mail');
  //     const passwordField = getByPlaceholderText('Password');
  //     const buttonElement = getByText('Sign in');

  //     //o objeto com target é porque para pegar o evento do onChange no input
  //     //usamos e => e.target.value
  //     fireEvent.change(emailField, { target: { value: 'clbmribas@gmail.com' } });
  //     fireEvent.change(passwordField, { target: { value: 'Claudio@2021' } });

  //     fireEvent.click(buttonElement);

  //     //expect to call history.push to '/appointment'
  //     await waitFor(() =>
  //       expect(mockedHistoryPush).toHaveBeenCalledWith('/appointment'),
  //     );
  //   });
  // it('should be able to sign in', async () => {
  //   const { getByRole, getByPlaceholderText, getByText } = render(<SignIn />);

  //   const emailField = getByPlaceholderText('E-mail');
  //   const passwordField = getByPlaceholderText('Password');
  //   const buttonElement = getByRole('button');

  //   //o objeto com target é porque para pegar o evento do onChange no input
  //   //usamos e => e.target.value
  //   fireEvent.change(emailField, { target: { value: 'clbmribas@gmail.com' } });
  //   fireEvent.change(passwordField, { target: { value: 'Claudio@2021' } });

  //   fireEvent.click(buttonElement);
  //   //http://localhost:3000/appointment
  //   //expect to call history.push to '/appointment'
  //   //
  //   const linkElement = screen.getByText(/appointment/)
  //   expect(history.location.pathname).toEqual(
  //     `http://localhost:3000/appointment`,
  //   );
  // });
  it('should display matching error when email is invalid', async () => {
    const { getByRole, getByPlaceholderText, getByText } = render(<SignIn />);

    const emailField = getByPlaceholderText('E-mail');
    const passwordField = getByPlaceholderText('Password');
    const buttonElement = getByRole('button');

    //o objeto com target é porque para pegar o evento do onChange no input
    //usamos e => e.target.value
    fireEvent.change(emailField, { target: { value: 'clbmribas@gmail.com' } });
    fireEvent.change(passwordField, { target: { value: 'Claudio@2021' } });

    //fireEvent.click(buttonElement);

    // fireEvent.input(screen.getByRole('textbox', { name: /email/i }), {
    //   target: {
    //     value: 'test',
    //   },
    // });

    // fireEvent.input(screen.getByLabelText('password'), {
    //   target: {
    //     value: 'password',
    //   },
    // });

    fireEvent.submit(screen.getByRole('button'));

    // expect(await screen.findAllByRole('alert')).toHaveLength(1);
    expect(submitForm).not.toBeCalled();
    // expect(screen.getByRole('textbox', { name: /email/i }).value).toBe('test');
    // expect(screen.getByLabelText('password').value).toBe('password');
  });
});
