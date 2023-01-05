import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Rocket = ({ rocket, handleChange }) => (
  <Container fluid="md" className="pt-3">
    <Row>
      <Col sm={5}>
        <img
          src={rocket.flickr_images}
          alt="Rocket"
          height={300}
          width={400}
          className="rounded"
        />
      </Col>
      <Col sm={7}>
        <div>
          <h2>{rocket.rocket_name}</h2>
          <p>
            <span>
              {rocket.reserved ? 'Reserved' : ''}
            </span>
            {rocket.description}
          </p>
          <Button variant="primary" onClick={() => handleChange(rocket.id)}>
            {rocket.reserved ? 'Cancel Reserve' : 'Reserve Rocket'}
          </Button>
        </div>
      </Col>
    </Row>
  </Container>
);

Rocket.propTypes = {
  rocket: PropTypes.shape({
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    flickr_images: PropTypes.string,
    id: PropTypes.number,
    reserved: PropTypes.bool,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Rocket;
