// We can create a seperate file like .env file for our api so we can add our api keys
// But for this task I am creating an api file where we can add api and keys.
export const apis = {
  newsApi: {
    url: 'https://newsapi.org/v2',
    key: '9926efb93c7443b0b8621c1c0297671e',
  },
  guardianApi: {
    url: 'https://content.guardianapis.com/search',
    key: '7c393509-31eb-49db-bf08-f920e27cb572',
  },
  openNewsApi: {
    url: 'https://source.opennews.org/api',
    key: '12d41e4c-d412-4411-9abb-fba9c7d760ba',
  },
};
