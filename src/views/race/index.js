import { useSelector } from 'react-redux';
import Container from './components/container';
import Ready from './components/ready';
import Track from './components/track';

const Race = () => {
  const isUserReady = useSelector((state) => state.isUserReady);

  return <Container>{!isUserReady ? <Ready /> : <Track />}</Container>;
};

export default Race;
