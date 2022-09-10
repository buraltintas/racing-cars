import Cars from './components/cars';
import Container from './components/container';
import Title from './components/title';

const CarSelection = () => {
  return (
    <Container>
      <Title title={'Select Your Car'} />
      <Cars />
    </Container>
  );
};

export default CarSelection;
