import React from 'react';

import { Route, RouteProps, Redirect } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

//RouteProps to have all properties of Route
interface Props extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

/* RULE FOR ACCESSING PAGES
true/true OK
true/false =  redirect the user to login page
false/true = redirect user to dasboard page
false/false = OK
*/

const BarberRoute = ({
  isPrivate = false,
  component: Component,
  ...rest
}: Props) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={props => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/appointment',
              state: { from: props.location }, //para manter o histórico de navegação
            }}
          />
        );
      }}
    />
  );
};

export default BarberRoute;
