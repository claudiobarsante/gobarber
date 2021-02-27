import React, { createContext } from 'react';

interface AppointmentContextData {
  ap: string;
}

type Props = {
  children: React.ReactNode;
};

const AppointmentContext = createContext<AppointmentContextData>(
  {} as AppointmentContextData,
);

const AppointmentProvider = ({ children }: Props) => {
  return (
    <AppointmentContext.Provider value={{ ap: 'teste' }}>
      {children}
    </AppointmentContext.Provider>
  );
};

export { AppointmentProvider };
