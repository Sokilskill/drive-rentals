import axios from 'axios';

axios.defaults.baseURL = 'https://65ba47b6b4d53c0665527927.mockapi.io/api';

export const getAdverts = async (page = 1) => {
  console.log('page in axios ', page);
  const res = await axios.get('/adverts', {
    params: {
      limit: 12,
      page: page,
    },
  });

  console.log('res', res);
  return res.data;
};

export const getFavoritesAdverts = async (page = 1) => {
  const { data } = await axios.get('/favorites', {
    params: {
      limit: 12,
      page: page,
    },
  });

  return data;
};
