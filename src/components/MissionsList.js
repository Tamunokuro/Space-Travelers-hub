import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/missions';

const MissionsList = () => {
  const { allMissions } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => { dispatch(fetchMissions()); }, [dispatch]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Mission</td>
            <td>Description</td>
            <td>Status</td>
            <td> </td>
          </tr>
        </thead>
        <tbody>
          {allMissions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td />
              <td>
                <button type="button">
                  {mission.reserved ? 'Leave Mission' : 'Join Mission'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MissionsList;
