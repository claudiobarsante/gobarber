import { SwapSpinner } from 'react-spinners-kit';
import { Container } from './styles';

const ActivityIndicator = () => {
  return (
    <Container>
      <SwapSpinner size={40} color={'#ff9000'} />
    </Container>
  );
};

export default ActivityIndicator;
