import { useSelector, useDispatch } from 'react-redux';
import CarSelection from './views/car-selection';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log(state);

  const selectCarHandler = () => {
    dispatch({ type: 'SELECT_CAR', payload: 'redbull' });
  };

  return (
    <div className='App'>
      <CarSelection />
    </div>
  );
}

export default App;
