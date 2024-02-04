import axios from 'axios';

axios.defaults.baseURL = 'https://65ba47b6b4d53c0665527927.mockapi.io/api';

export const getAdverts = async (params) => {
  console.log('page in axios ', params);
  const res = await axios.get('/adverts', {
    params,
  });

  console.log('res', res);
  return res.data;
};
