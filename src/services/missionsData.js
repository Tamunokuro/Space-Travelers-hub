import axios from 'axios';

const BASE_URL = 'https://api.spacexdata.com/v3/missions';

const loadmissions = async () => {
  const response = await axios.get(BASE_URL);
  return response;
};

export default loadmissions;
