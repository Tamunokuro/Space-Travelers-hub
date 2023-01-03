import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRockets } from '../redux/rockets';
import Rocket from './Rocket';

const RocketList = () => {
  const { allRockets } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchRockets()); }, [dispatch]);

  return (
    <div>
      {allRockets.map((rocket) => (
        <Rocket key={rocket.id} rocket={rocket} />
      ))}
    </div>
  );
};

export default RocketList;
