import ExpoConstants from 'expo-constants';

export const baseUrl = 'https://newsapi.org/v2';
export const apiKey = ExpoConstants.manifest?.extra?.newsApiKey;
export const endpoint = 'top-headlines';
export const queryOptions = {
  sortBy: 'popularity',
  limit: '5',
  search: 'crypto',
};
