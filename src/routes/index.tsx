import { Switch } from 'react-router-dom';
import BarberRoute from './BarberRoute';
import SignIn from './../pages/SignIn/index';
import SignUp from './../pages/SignUp/index';
import Appointment from './../pages/Appointment/index';

const Routes = () => (
  <Switch>
    <BarberRoute path="/" exact component={SignIn} />
    <BarberRoute path="/signup" component={SignUp} />
    <BarberRoute path="/appointment" component={Appointment} isPrivate />
  </Switch>
);

export default Routes;
