import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRockets, reserveRocket } from '../redux/rockets';
import Rocket from './Rocket';

const RocketList = () => {
  const { allRockets } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (allRockets.length) { return; }
    dispatch(fetchRockets());
  },
  [dispatch, allRockets]);

  const handleChange = (id) => {
    dispatch(reserveRocket(id));
  };

  return (
    <div>
      {allRockets.map((rocket) => (
        <Rocket key={rocket.id} rocket={rocket} handleChange={handleChange} />
      ))}
    </div>
  );
};

export default RocketList;
