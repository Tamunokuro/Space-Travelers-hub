import PropTypes from 'prop-types';

const Rocket = ({ rocket }) => (
  <>
    <div>
      <img
        src={rocket.flickr_images}
        alt=""
      />
      <div>
        <h1>{rocket.rocket_name}</h1>
        <p>
          {rocket.description}
        </p>
        <button type="button">
          {rocket.reserved ? 'Cancel Reserve' : 'Reserve Rocket'}
        </button>
      </div>
    </div>
  </>
);

Rocket.propTypes = {
  rocket: PropTypes.shape({
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    flickr_images: PropTypes.string,
    id: PropTypes.number,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Rocket;
