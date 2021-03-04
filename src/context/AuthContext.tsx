import React, { createContext, useContext, useState, useCallback } from 'react';
import { CurrentUser } from '../models/User';
import signInService from './../services/authService';
import { Response } from '../types/response';
import { ReturnedResponse } from './../models/ReturnedResponse';
type AuthState = {
  token: string;
  user: User;
};

type SignInCredentials = {
  email: string;
  password: string;
};

type User = {
  nickname: string;
  roles: string;
  user_id: string;
  user_name: string;
};

type AuthContextData = {
  user: User;
  signIn(credentials: SignInCredentials): Promise<ReturnedResponse | undefined>;
  signOut(): void;
};

interface Props {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: Props) => {
  //
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@GoBarber:token');
    const user = localStorage.getItem('@GoBarber:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    //
    try {
      const response = await signInService({ email, password });

      const token = response.data.access_token;

      const { nickname, roles, user_id, user_name }: User = response.data;
      const user = new CurrentUser(nickname, roles, user_id, user_name);

      localStorage.setItem('@GoBarber:token', token);
      localStorage.setItem('@GoBarber:user', JSON.stringify(user));

      setData({ token, user });

      return new ReturnedResponse(Response.Ok, '');
    } catch (error) {
      const message = error.toString();
      console.log('error--', message);
      if (message.includes('code 400')) {
        return new ReturnedResponse(
          Response.BadRequest,
          'Invalid e-mail or password',
        );
      }

      if (message.includes('Network Error')) {
        return new ReturnedResponse(
          Response.InternalServerError,
          "Verify your internet connection. If it's working, maybe our services are offline. Try again in a few minutes",
        );
      }
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@GoBarber:token');
    localStorage.removeItem('@GoBarber:user');
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  return context;
};

export { AuthProvider, useAuth };
