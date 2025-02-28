import axios from "axios";

const PUBLIC_KEY = "1efbd32fdd9f532cf3894e1d17dc33d0";
const BASE_URL = "https://gateway.marvel.com/v1/public/";

export const getMarvelCharacters = async () => {
  const response = await axios.get(`${BASE_URL}characters?apikey=${PUBLIC_KEY}`);
  return response.data.data.results;
};
