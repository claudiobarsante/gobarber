import apiClient from './../api/client';

type Credentials = {
  email: string;
  password: string;
};

const signInService = ({ email, password }: Credentials) =>
  apiClient({
    method: 'post',
    headers: {
      'Content-Type': 'text/plain',
    },
    url: `${process.env.REACT_APP_TOKEN_ENDPOINT}`,
    data: `username=${email}&password=${password}&grant_type=password`,
  });

export default signInService;
