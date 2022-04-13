import axios from 'axios';
import {AssetResponse, AssetsResponse} from './types';
const baseUrl = 'https://api.coincap.io/v2/';

export const fetchAssets = async (): Promise<AssetsResponse> => {
  const url = `${baseUrl}assets`;
  const response: any = await axios.get(url).catch(e => console.log(e));
  return response;
};

export const fetchAsset = async (id: number): Promise<AssetResponse> => {
  const url = `${baseUrl}assets/${id}`;
  const response: any = await axios.get(url).catch(e => e);
  return response;
};
