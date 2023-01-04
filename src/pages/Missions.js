import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { getmissions } from '../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);
  useEffect(() => {
    if (missions.length) return;
    dispatch(getmissions());
  }, [dispatch, missions.length]);
  return (
    <Container className="pt-3">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan={1}>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>

          {missions.map((mission) => (
            <tr key={mission.id}>
              <td>{mission.id}</td>
              <td className="w-auto">{mission.name}</td>
              <td className="w-auto">{mission.description}</td>
              <td className="w-auto">{mission.member}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Missions;
