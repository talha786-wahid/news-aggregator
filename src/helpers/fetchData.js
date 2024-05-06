import axios from 'axios';

const fetchData = async (apiUrl, options = {}) => {
  try {
    const response = await axios.get(apiUrl, options);

    if (!response.status === 'ok') {
      throw new Error(`API request failed with status ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default fetchData;
