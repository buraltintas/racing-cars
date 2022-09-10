import { useSelector } from 'react-redux';
import CarSelection from './views/car-selection';
import Race from './views/race';

function App() {
  const selectedCar = useSelector((state) => state.selectedCar);
  const state = useSelector((state) => state);

  console.log(state);

  return <div className='App'>{selectedCar ? <Race /> : <CarSelection />}</div>;
}

export default App;
