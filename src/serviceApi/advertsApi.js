import axios from 'axios';

axios.defaults.baseURL = 'https://65ba47b6b4d53c0665527927.mockapi.io/api';

export const getAdverts = async (params) => {
  const res = await axios.get('/adverts', {
    params,
  });

  return res.data;
};
