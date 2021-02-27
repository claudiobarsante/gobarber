import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SignIn from './index';

const mockLogin = jest.fn((email, password) => {
  return Promise.resolve({ email, password });
});

jest.mock('react-hook-form', () => {
  return {
    useForm: jest.fn(),
  };
});
describe('SignIn page', () => {
  // beforeEach(() => {
  //   render(<SignIn login={mockLogin} />);
  // });

  it('should be able to sign in', () => {
    const { debug } = render(<SignIn />);

    debug();
  });
});
