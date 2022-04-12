import axios from 'axios';
const baseUrl = 'https://api.coincap.io/v2/';

export const fetchAssets = async () => {
  const url = `${baseUrl}assets`;
  return await axios.get(url).catch(e => console.log(e));
};

export const fetchAsset = async (id: number) => {
  const url = `${baseUrl}assets/${id}`;
  return await axios.get(url).catch(e => console.log(e));
};
