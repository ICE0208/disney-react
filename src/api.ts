const BASE_URL = 'https://disney_api.nomadcoders.workers.dev';

export const fetchCharacters = async () => {
  const response = await fetch(`${BASE_URL}/characters`);
  return await response.json();
};
