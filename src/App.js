import { useSelector } from 'react-redux';
import CarSelection from './views/car-selection';
import Race from './views/race';

function App() {
  const selectedCar = useSelector((state) => state.selectedCar);

  console.log(selectedCar);

  return <div className='App'>{selectedCar ? <Race /> : <CarSelection />}</div>;
}

export default App;
