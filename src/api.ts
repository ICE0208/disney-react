const BASE_URL = 'https://disney_api.nomadcoders.workers.dev';

export const fetchCharacters = async () => {
  const response = await fetch(`${BASE_URL}/characters`);
  return await response.json();
};

export const fetchDetail = async (id: string) => {
  const response = await fetch(`${BASE_URL}/characters/${id}`);
  return await response.json();
};
