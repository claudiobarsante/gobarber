import React from 'react';
import { AuthProvider } from './AuthContext';
import { AppointmentProvider } from './AppointmentContext';

type Props = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: Props) => {
  return (
    <AuthProvider>
      <AppointmentProvider>{children}</AppointmentProvider>
    </AuthProvider>
  );
};

export default AppProvider;
