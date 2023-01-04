import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, joinmission } from '../redux/missions';

const MissionsList = () => {
  const { allMissions } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (allMissions.length) return;
    dispatch(fetchMissions());
  }, [dispatch, allMissions.length]);

  return (
    <Container className="pt-3">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {allMissions.map((mission) => (
            <tr key={mission.mission_id}>
              <td className="w-auto">{mission.mission_name}</td>
              <td className="w-auto">{mission.description}</td>
              <td>
                {mission.mission_member ? (
                  <Button variant="secondary" size="md" disabled>
                    Not a Member
                  </Button>
                )
                  : (
                    <Button variant="primary" size="md" disabled>
                      Active Member
                    </Button>
                  )}
              </td>
              <td className="w-auto">
                {mission.mission_member ? (
                  <Button variant="outline-secondary" onClick={() => dispatch(joinmission(mission.mission_id))}>Join Mission</Button>)
                  : (<Button variant="outline-danger" onClick={() => dispatch(joinmission(mission.mission_id))}>Leave Mission</Button>)}

              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default MissionsList;
