import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log(state);

  const selectCarHandler = () => {
    dispatch({ type: 'SELECT_CAR', payload: 'redbull' });
  };

  return <div className='App'></div>;
}

export default App;
