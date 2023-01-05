import React from 'react';
import { useSelector } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions.allMissions);
  const joinedMissions = missions.filter((mission) => !mission.mission_member);
  const rockets = useSelector((state) => state.rockets.allRockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <Container className="py-3">
      <Row>
        <Col>
          <h3>My Missions</h3>
          <ListGroup>
            {joinedMissions.length > 0 ? (
              joinedMissions.map((mission) => (

                <ListGroup.Item key={mission.mission_id} className="py-4">
                  {mission.mission_name}
                </ListGroup.Item>

              ))
            ) : (
              <h5>No Missions</h5>
            )}

          </ListGroup>
        </Col>
        <Col>
          <h3>My Rockets</h3>
          <ListGroup>
            {reservedRockets.length > 0 ? (
              reservedRockets.map((rocket) => (

                <ListGroup.Item key={rocket.id} className="py-4">
                  {rocket.rocket_name}
                </ListGroup.Item>

              ))
            ) : (
              <h5>No reservations</h5>
            )}

          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default MyProfile;
