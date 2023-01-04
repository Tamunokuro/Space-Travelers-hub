import PropTypes from 'prop-types';

const Rocket = ({ rocket, handleChange }) => (
  <>
    <div>
      <img
        src={rocket.flickr_images}
        alt="rocket"
      />
      <div>
        <h1>{rocket.rocket_name}</h1>
        <p>
          <span>
            {rocket.reserved ? 'Reserved' : ''}
          </span>
          {rocket.description}
        </p>
        <button
          onClick={() => handleChange(rocket.id)}
          type="button"
        >
          {rocket.reserved ? 'cancel reservation' : 'Reserve Rocket'}
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
  handleChange: PropTypes.func.isRequired,
};

export default Rocket;
